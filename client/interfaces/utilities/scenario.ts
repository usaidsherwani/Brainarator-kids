export interface IStartScenario {
  status?: boolean;
  scenarioTitle?: string;
  id?: string;
  username?: string;
  message?: string;
  machine?: string;
  microvm?: Array<any>;
  theia_url?: string;
  web_url?: string;
  existingscenario?: string;
  token?: string;
}

export interface IStopScenario {
  status?: boolean;
  message?: string;
  learningPathTitle?: string;
  scenarioTitle?: string;
  username?: string;
  token?: string;
  time?: number;
}

export interface IScenarioImage {
  imageName?: string;
  imageUrl?: string;
}
