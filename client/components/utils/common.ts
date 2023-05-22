import YAML from 'yaml';

import { ORIGIN } from 'client/definitions/messages';
import { ReduxNextPageContext, IEmailUserData } from 'interfaces';

/**
 * @param json: JSON object to convert to YAML
 * @returns coverted YAML
 */

export const convertJsonToYaml = (json: { [key: string]: string }) => {
  const doc = new YAML.Document();
  doc.contents = json;

  return doc.toString();
};

// changeUrlforServer used for fetch intial props
export function changeUrlForServer(server: ReduxNextPageContext, url: string) {
  if (server && server.req) {
    return `http://localhost:3001${url}`;
  }
  return url;
}

export const capitalizeFirstLetter = (message: string) => {
  return message?.replace(/(?:^|\s)\S/g, (messageWord: string) => {
    return messageWord.toUpperCase();
  });
};

export function populateUserData(
  data: IEmailUserData,
  subject: string,
  emailType: string,
  active: boolean,
  urlString: string | null
) {
  data.subject = subject;
  data.emailType = emailType;
  data.active = active;

  if (window && window.location) {
    data.origin = urlString ? window.location.origin.concat(urlString) : window.location.origin;
  } else {
    data.origin = ORIGIN.DEFAULT_ORIGIN;
  }
  return data;
}

export function toTitleCase(message: string) {
  if (message)
    return message?.replace(/\w\S*/g, messageText => {
      return messageText.charAt(0).toUpperCase() + messageText.substr(1).toLowerCase();
    });
  return message;
}
