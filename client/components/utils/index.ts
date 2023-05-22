export const API_TYPE = (action: string): { [key: string]: string } => ({
  STARTED: `${action}_STARTED`,
  FULLFILLED: `${action}_FULLFILLED`,
  REJECTED: `${action}_REJECTED`,
});

export const SOCKET_TYPE = (action: string): { [key: string]: string } => ({
  WS_CONNECTED: `${action}_CONNECTED`,
  WS_DISCONNECTED: `${action}_DISCONNECTED`,
  WS_MESSAGE_RECEIVED: `${action}_MESSAGE_RECEIVED`,
  WS_COMMAND_RECEIVED: `${action}_COMMAND_RECEIVED`,
  WS_SEND_MESSAGE: `${action}_SEND_MESSAGE`,
  WS_RESIZE_TERMINAL: `${action}_RESIZE_TERMINAL`,
  WS_SEND_COMMAND: `${action}_SEND_COMMAND`,
  WS_REQUEST_CONNECTION: `${action}_REQUEST_CONNECTION`,
  WS_TREE_STRUCTURE_REQUEST: `${action}_TREE_STRUCTURE_REQUEST`,
  WS_SAVE_FILE: `${action}_SAVE_FILE`,
  WS_SEND_REQUEST: `${action}_WS_SEND_REQUEST`,
});

export const SOCKET_CHANNEL_TYPES = () => ({
  MESSAGE: 'message',
  COMMAND: 'command',
});
