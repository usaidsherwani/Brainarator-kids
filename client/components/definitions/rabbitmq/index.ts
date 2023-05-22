import { CLUSTER_REQUEST } from 'interfaces';
import { getSession } from '../../utils/user';

/* -------------------------------------------------------------------------- */
/*                                   QUEUES                                   */
/* -------------------------------------------------------------------------- */

export enum CONSUMER_QUEUES {
  FLAMINGO = 'flamingo.done',
  HORNBILL = 'hornbill.done',
  JASPER = 'jasper.done',
}

/* -------------------------------------------------------------------------- */
/*                            NOTIFICATION STRUCTS                            */
/* -------------------------------------------------------------------------- */

/* --------------------------------- CLUSTER -------------------------------- */

export enum CLUSTER_ACTIONS {
  START = 'start',
  STOP = 'stop',
}

export const START_CLUSTER = (struct: CLUSTER_REQUEST) => ({
  learningPathTitle: struct.learningPathTitle,
  scenarioTitle: struct.scenarioTitle,
  token: getSession().token,
  action: CLUSTER_ACTIONS.START,
  queue: struct.queue,
});

export const TERMINATE_CLUSTER = (struct: CLUSTER_REQUEST) => ({
  learningPathTitle: struct.learningPathTitle,
  scenarioTitle: struct.scenarioTitle,
  token: getSession().token,
  action: CLUSTER_ACTIONS.STOP,
  queue: struct.queue,
});

export const RABBIT_MQ = 'rabbitmq';
