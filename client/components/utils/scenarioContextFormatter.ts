import {
  EXECUTE_TAG_SUFFIX,
  EXECUTE_TAG_PREFIX_REGEX,
  EXECUTE_TAG_PREFIX,
  EXECUTE_TAG_SUFFIX_REGEX,
  HIGHLIGHT_ICON_START,
  HIGHLIGHT_ICON_START_REGEX,
  HIGHLIGHT_ICON_END_REGEX,
  HIGHLIGHT_ICON_END,
  COPY_TAG_SUFFIX_REGEX,
  COPY_TAG_SUFFIX,
  MARKDOWN_QUOTES,
  WEBURL_DOUBLE_QUOTE_REGEX,
  COPY_TAG_PREFIX_SINGLE_QUOTE_REGEX,
  COPY_TAG_PREFIX_DOUBLE_QUOTE_REGEX,
  ENDING_BRACKETS_DOUBLE_QUOTE_REGEX,
  ENDING_BRACKETS_SINGLE_QUOTE_REGEX,
  WEBURL_SINGLE_QUOTE_REGEX,
  OPENING_MARKDOWN_QUOTES_REGEX,
  CLOSING_MARKDOWN_QUOTES_REGEX,
  FORMATTED_EXECUTE_TAG_PREFIX_REGEX,
  FORMATTED_EXECUTE_TAG_SUFFIX_REGEX,
  FORMATTED_COPY_TAG_SUFFIX_REGEX,
  SINGLE_QUOTE_SEARCH_STRING,
  DOUBLE_QUOTE_SEARCH_STRING,
  COPY_TAG_SINGLE_QUOTE_PREFIX,
  COPY_TAG_DOUBLE_QUOTE_PREFIX,
  COPY_TAG_OPENING_LENGTH,
  WEB_URL_OPENING_LENGTH,
  SINGLE_QUOTE_WEB_URL_PREFIX,
  DOUBLE_QUOTE_WEB_URL_PREFIX,
} from 'client/definitions/learningPath/scenarios';
import { IScenarioSteps } from 'client/interfaces';

export const markDownParser = (step: any) => {
  let parsedContent =
    step.stepInfo?.contents &&
    step.stepInfo?.contents
      .replaceAll(EXECUTE_TAG_PREFIX_REGEX, EXECUTE_TAG_PREFIX)
      .replaceAll(EXECUTE_TAG_SUFFIX_REGEX, EXECUTE_TAG_SUFFIX)
      .replaceAll(HIGHLIGHT_ICON_START_REGEX, HIGHLIGHT_ICON_START)
      .replaceAll(HIGHLIGHT_ICON_END_REGEX, HIGHLIGHT_ICON_END)
      .replaceAll(COPY_TAG_PREFIX_SINGLE_QUOTE_REGEX, COPY_TAG_SINGLE_QUOTE_PREFIX)
      .replaceAll(COPY_TAG_PREFIX_DOUBLE_QUOTE_REGEX, COPY_TAG_DOUBLE_QUOTE_PREFIX)
      .replaceAll(COPY_TAG_SUFFIX_REGEX, COPY_TAG_SUFFIX)
      .replaceAll(ENDING_BRACKETS_SINGLE_QUOTE_REGEX, SINGLE_QUOTE_SEARCH_STRING)
      .replaceAll(WEBURL_SINGLE_QUOTE_REGEX, SINGLE_QUOTE_WEB_URL_PREFIX)
      .replaceAll(WEBURL_DOUBLE_QUOTE_REGEX, DOUBLE_QUOTE_WEB_URL_PREFIX)
      .replaceAll(ENDING_BRACKETS_DOUBLE_QUOTE_REGEX, DOUBLE_QUOTE_SEARCH_STRING);
  let rawContent = parsedContent;
  let formattedContent;
  while (
    rawContent?.includes(EXECUTE_TAG_PREFIX) ||
    rawContent?.includes(COPY_TAG_SINGLE_QUOTE_PREFIX) ||
    rawContent?.includes(COPY_TAG_DOUBLE_QUOTE_PREFIX) ||
    rawContent?.includes(SINGLE_QUOTE_WEB_URL_PREFIX) ||
    rawContent?.includes(DOUBLE_QUOTE_WEB_URL_PREFIX)
  ) {
    if (rawContent.includes(EXECUTE_TAG_PREFIX)) {
      let filteredContent;
      const startingIndex = rawContent?.indexOf(EXECUTE_TAG_PREFIX);
      const endingIndex = rawContent?.indexOf(EXECUTE_TAG_SUFFIX);
      const oldData = rawContent?.slice(startingIndex, endingIndex + 12);
      let data = rawContent.slice(startingIndex + 11, endingIndex);
      if (data.includes(MARKDOWN_QUOTES)) {
        filteredContent = data.replace(MARKDOWN_QUOTES, `${EXECUTE_TAG_PREFIX}`);
        filteredContent = filteredContent.replace(MARKDOWN_QUOTES, `${EXECUTE_TAG_SUFFIX}`);
        formattedContent = filteredContent.splice(0, 0, `${MARKDOWN_QUOTES}`);
        formattedContent = formattedContent.replace(OPENING_MARKDOWN_QUOTES_REGEX, `${MARKDOWN_QUOTES}\n`);
        formattedContent = formattedContent.replace(FORMATTED_EXECUTE_TAG_PREFIX_REGEX, `${EXECUTE_TAG_PREFIX}\n`);
        formattedContent = formattedContent.splice(endingIndex + 12, 0, `\n${MARKDOWN_QUOTES}`);
        formattedContent = formattedContent.replace(FORMATTED_EXECUTE_TAG_SUFFIX_REGEX, `\n${EXECUTE_TAG_SUFFIX}`);
        formattedContent = formattedContent.replace(CLOSING_MARKDOWN_QUOTES_REGEX, `\n${MARKDOWN_QUOTES}`);
        parsedContent = parsedContent.replace(oldData, formattedContent);
        rawContent = rawContent.replace(oldData, '');
      } else {
        formattedContent = oldData.replace(FORMATTED_EXECUTE_TAG_PREFIX_REGEX, `${EXECUTE_TAG_PREFIX}\n`);
        formattedContent = formattedContent.replace(FORMATTED_EXECUTE_TAG_SUFFIX_REGEX, `\n${EXECUTE_TAG_SUFFIX}\n`);
        parsedContent = parsedContent.replace(oldData, formattedContent);
        rawContent = rawContent.replace(oldData, '');
      }
    }
    if (rawContent?.includes(COPY_TAG_SINGLE_QUOTE_PREFIX) || rawContent?.includes(COPY_TAG_DOUBLE_QUOTE_PREFIX)) {
      let filteredContent;
      let copyFileName;
      let completeCopyTag;
      const isSingleQuotedTag = rawContent.includes(COPY_TAG_SINGLE_QUOTE_PREFIX);
      const startingIndex = isSingleQuotedTag
        ? rawContent?.indexOf(COPY_TAG_SINGLE_QUOTE_PREFIX)
        : rawContent?.indexOf(COPY_TAG_DOUBLE_QUOTE_PREFIX);
      const endingIndex = rawContent?.indexOf(COPY_TAG_SUFFIX);
      const oldData = rawContent.slice(startingIndex, endingIndex + 9);
      let midIndex = isSingleQuotedTag
        ? oldData?.indexOf(SINGLE_QUOTE_SEARCH_STRING)
        : oldData?.indexOf(DOUBLE_QUOTE_SEARCH_STRING);
      let endIndex = oldData?.indexOf(COPY_TAG_SUFFIX);
      completeCopyTag = oldData?.slice(0, midIndex + 3);
      copyFileName = oldData?.slice(COPY_TAG_OPENING_LENGTH, midIndex);
      let data = oldData?.slice(midIndex + 3, endIndex);
      if (data.includes(MARKDOWN_QUOTES)) {
        data = data.replace(CLOSING_MARKDOWN_QUOTES_REGEX, MARKDOWN_QUOTES);
        const startIndexOfQuotes = data?.indexOf(MARKDOWN_QUOTES);
        const endingIndexOfLang = data?.indexOf('\n');
        const qouteWithFileType = data?.slice(startIndexOfQuotes, endingIndexOfLang);
        filteredContent = data.replace(
          qouteWithFileType,
          `${COPY_TAG_SINGLE_QUOTE_PREFIX}${copyFileName}${SINGLE_QUOTE_SEARCH_STRING}`
        );
        filteredContent = filteredContent.replace(MARKDOWN_QUOTES, `${COPY_TAG_SUFFIX}`);
        formattedContent = filteredContent.splice(0, 0, `${qouteWithFileType}\n`);
        formattedContent = formattedContent.replace(FORMATTED_COPY_TAG_SUFFIX_REGEX, `\n${COPY_TAG_SUFFIX}`);
        formattedContent = formattedContent.splice(endingIndex + 9, 0, `\n${MARKDOWN_QUOTES}\n`);
        formattedContent = formattedContent.replace(CLOSING_MARKDOWN_QUOTES_REGEX, `\n${MARKDOWN_QUOTES}`);
        parsedContent = parsedContent.replace(oldData, formattedContent);
        rawContent = rawContent.replace(oldData, '');
      } else {
        formattedContent = oldData.replace(
          completeCopyTag,
          `${COPY_TAG_SINGLE_QUOTE_PREFIX}${copyFileName}${SINGLE_QUOTE_SEARCH_STRING}`
        );
        formattedContent = formattedContent.replace(FORMATTED_COPY_TAG_SUFFIX_REGEX, `\n${COPY_TAG_SUFFIX}\n`);
        parsedContent = parsedContent.replace(oldData, formattedContent);
        rawContent = rawContent.replace(oldData, '');
      }
    }
    if (rawContent?.includes(SINGLE_QUOTE_WEB_URL_PREFIX) || rawContent?.includes(DOUBLE_QUOTE_WEB_URL_PREFIX)) {
      const isSingleQuotedTag = rawContent.includes(SINGLE_QUOTE_WEB_URL_PREFIX);
      const startingIndex = isSingleQuotedTag
        ? rawContent?.indexOf(SINGLE_QUOTE_WEB_URL_PREFIX)
        : rawContent?.indexOf(DOUBLE_QUOTE_WEB_URL_PREFIX);
      const endingIndex = isSingleQuotedTag
        ? rawContent?.indexOf(SINGLE_QUOTE_SEARCH_STRING)
        : rawContent?.indexOf(DOUBLE_QUOTE_SEARCH_STRING);
      const oldData = rawContent?.slice(startingIndex, endingIndex + 3);
      let midIndex = isSingleQuotedTag
        ? oldData?.indexOf(SINGLE_QUOTE_SEARCH_STRING)
        : oldData?.indexOf(DOUBLE_QUOTE_SEARCH_STRING);
      const portInfo = oldData?.slice(WEB_URL_OPENING_LENGTH, midIndex);
      formattedContent = `${SINGLE_QUOTE_WEB_URL_PREFIX}${portInfo}${SINGLE_QUOTE_SEARCH_STRING}`;
      parsedContent = parsedContent.replace(oldData, formattedContent);
      rawContent = rawContent.replace(oldData, '');
    }
  }
  return parsedContent || '';
};

export const spaceFormatterHandler = (scenario: IScenarioSteps) => {
  let { steps } = scenario;
  const formattedSteps = steps.map((step, index) => {
    return {
      ...step,
      stepInfo: {
        title: step.stepInfo?.title,
        time: step.stepInfo?.time,
        contents: markDownParser(step),
      },
    };
  });
  return { ...scenario, steps: formattedSteps };
};
