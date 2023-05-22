export enum UI_LAYOUT {
  EDITOR = 'editor',
}

export enum SCENARIO_TABS {
  TERMINAL_AND_EXPLORER = 'Terminal & Explorer',
  CANVAS = 'Visualisation',
}

export enum SCENARIO_TABS_INDICES {
  TERMINAL_AND_EXPLORER = 0,
  CANVAS = 1,
}

export enum VM_DETAILS {
  PUBLIC_IP = 'public_ip',
  IDE_PORT = 'ide_port',
  THEIA_URL = 'theia_url',
}

export const EXECUTED_INDEX = 4; // Constant to replace the character 'e' with 'd'

export const COPY_TAG_OPENING_LENGTH = 17; // {{copy filename='

export const WEB_URL_OPENING_LENGTH = 15; // {{weburl port=';

export const SEARCH_STRING_LENGTH = 3; // " '}} "

export const REMOVE_EXTRA_SPACES = 1;

export const SEARCH_STRING = "'}}";

export const SINGLE_QUOTE_SEARCH_STRING = "'}}";

export const DOUBLE_QUOTE_SEARCH_STRING = '"}}';

export const EXECUTE_TAG_PREFIX = '{{execute}}';

export const EXECUTE_TAG_SUFFIX = '{{/execute}}';

export const EXECUTED_TAG = '{{/executd}}';

export const EXECUTED_TAGG = '{{/executed}';

export const EXPLORER_COPIED_ICON = '{{copied';

export const EXPLORER_COPY_ICON = '{{copy';

export const COPY_TAG_PREFIX = "{{copy filename='";

export const COPY_TAG_SINGLE_QUOTE_PREFIX = "{{copy filename='";

export const COPY_TAG_DOUBLE_QUOTE_PREFIX = '{{copy filename="';

export const COPY_TAG_SUFFIX = '{{/copy}}';

export const COPIED_TAG = '{{/copied}}';

export const HIGHLIGHT_ICON_START = '{{highlight}}';

export const HIGHLIGHT_ICON_END = '{{/highlight}}';

export const EXECUTE_REGEX = /{{(\s*)execute(\s*)}}/g;

export const INITIAL_OFFSET = -1;

export const WEB_URL = "{{weburl port='";

export const SINGLE_QUOTE_WEB_URL_PREFIX = "{{weburl port='";

export const DOUBLE_QUOTE_WEB_URL_PREFIX = '{{weburl port="';

export const MARKDOWN_QUOTES = '```';

export const OPENING_MARKDOWN_QUOTES_REGEX = /```(\s*)/gi;

export const CLOSING_MARKDOWN_QUOTES_REGEX = /(\s*)```/gi;

export const EXECUTE_TAG_PREFIX_REGEX = /{(\s*){(\s*)execute(\s*)}(\s*)}/gi;

export const FORMATTED_EXECUTE_TAG_PREFIX_REGEX = /{(\s*){(\s*)execute(\s*)}(\s*)}(\s*)/gi;

export const EXECUTE_TAG_SUFFIX_REGEX = /{(\s*){(\s*)\/(\s*)execute(\s*)}(\s*)}/gi;

export const FORMATTED_EXECUTE_TAG_SUFFIX_REGEX = /(\s*){(\s*){(\s*)\/(\s*)execute(\s*)}(\s*)}/gi;

export const HIGHLIGHT_ICON_START_REGEX = /{(\s*){(\s*)highlight(\s*)}(\s*)}/gi;

export const HIGHLIGHT_ICON_END_REGEX = /{(\s*){(\s*)\/(\s*)highlight(\s*)}(\s*)}/gi;

export const FORMATTED_COPY_TAG_PREFIX_SINGLE_QUOTE_REGEX = /(\s*){(\s*){(\s*)copy(\s*)filename(\s*)=(\s*)'/gi;

export const FORMATTED_COPY_TAG_PREFIX_DOUBLE_QUOTE_REGEX = /(\s*){(\s*){(\s*)copy(\s*)filename(\s*)=(\s*)"/gi;

export const COPY_TAG_PREFIX_SINGLE_QUOTE_REGEX = /{(\s*){(\s*)copy(\s*)filename(\s*)=(\s*)'/gi;

export const COPY_TAG_PREFIX_DOUBLE_QUOTE_REGEX = /{(\s*){(\s*)copy(\s*)filename(\s*)=(\s*)"/gi;

export const COPY_TAG_SUFFIX_REGEX = /{(\s*){(\s*)\/(\s*)copy(\s*)}(\s*)}/gi;

export const FORMATTED_COPY_TAG_SUFFIX_REGEX = /(\s*){(\s*){(\s*)\/(\s*)copy(\s*)}(\s*)}(\s*)/gi;

export const ENDING_BRACKETS_SINGLE_QUOTE_REGEX = /'[ \t]*}[ \t]*}(\s*)/gi;

export const WEBURL_SINGLE_QUOTE_REGEX = /{(\s*){(\s*)weburl(\s*)port(\s*)=(\s*)'/gi;

export const WEBURL_DOUBLE_QUOTE_REGEX = /{(\s*){(\s*)weburl(\s*)port(\s*)=(\s*)"/gi;

export const ENDING_BRACKETS_DOUBLE_QUOTE_REGEX = /"[ \t]*}[ \t]*}/gi;

export const FORMATTED_ENDING_BRACKETS_SINGLE_QUOTE_REGEX = /'(\s*)}(\s*)}(\s*)/gi;

export const FORMATTED_ENDING_BRACKETS_DOUBLE_QUOTE_REGEX = /"(\s*)}(\s*)}(\s*)/gi;
