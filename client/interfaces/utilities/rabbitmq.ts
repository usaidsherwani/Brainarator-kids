export interface CLUSTER_REQUEST {
  learningPathTitle: string;
  scenarioTitle: string;
  queue: string;
  token?: string;
  action?: string;
}

export interface IToken {
  token: string;
}

export interface ICluster {
  vmDetails: { public_ip: string };
  isStarted: boolean;
  isFailed: boolean;
  isStopped: boolean;
  clusterStartMessage?: string;
}

export interface ITerminalSize {
  columns: number;
  rows: number;
}
