import { IGitHubCourseLogs, IGitHubLearningPathLogs } from './authoring';

export interface ILearningPath {
  title?: string;
  learningPathTitle?: string;
  authors?: string[];
  description?: string;
  isPremium?: boolean;
  scenarioCount?: number;
  thumbnail?: string;
  type?: string;
  isAvailable?: boolean;
  points?: number;
  email?: string;
  isNew?: boolean;
  enrollmentDate?: string;
  status?: string;
  state?: string;
  categories?: string[];
  scenarios?: IScenario[];
  progress?: ILearningPathProgress;
  isMerged?: boolean;
  contribution?: string;
  isDraft?: boolean;
  isUploadedFromGitHub?: boolean;
  gitHubRepo?: string;
  isDeletionAllowed?: boolean;
  isExistInAuthoring?: boolean;
  isReOrderRequest?: boolean;
  isLive?: boolean;
  gitUploadLogs?: IGitHubLearningPathLogs;
}

export interface ICouponCourse {
  courseName?: string;
  discountedValue?: number;
}
export interface ICourse {
  courseName?: string;
  description?: string;
  courseProgress?: ICourseProgress;
  isAvailable?: boolean;
  points?: number;
  isPremium?: boolean;
  state?: string;
  isDraft?: boolean;
  authors?: string[];
  thumbnail?: string;
  categories?: string[];
  contribution?: string;
  learningPath?: string[];
  learningPaths?: string[];
  learningPathsData?: ILearningPath[];
  isConflicted?: boolean;
  comment?: string;
  admin?: string;
  isDeletionRejected?: boolean;
  isReOrderRequest?: booleann;
  isForDeletion?: boolean;
  reOrderDetails?: { comment: string; reOrderLearningPathTitles: string[] };
  isUploadedFromGitHub?: boolean;
  gitHubRepo?: string;
  isDeletionAllowed?: boolean;
  isLive?: boolean;
  price?: ICoursePrice;
  complexity?: string;
  status?: string;
  isExistInAuthoring?: boolean;
  reOrderApproval?: string;
  username?: string;
  gitUploadLogs?: IGitHubCourseLogs;
  discountedValue?: number;
}

export interface ICourseProgress {
  courseName?: string;
  status?: string;
  learningPaths: ILearningPathProgress[];
}
export interface ILearningPathProgress {
  learningPathTitle: string;
  status?: string;
  scenarios?: IScenarioProgress[];
  isAvailable?: boolean;
  learningPathPoints?: number;
  description?: string;
  isPremium?: boolean;
  scenarioCount?: number;
  thumbnail?: string;
  points?: number;
}

export interface IScenarioProgress {
  scenarioTitle: string;
  learningPathTitle: string;
  status: string;
  count?: number;
  isAvailable: boolean;
  scenarioPoints?: number;
}

export interface IScenario {
  title?: string;
  learningPathTitle?: string;
  description?: string;
  isPremium?: boolean;
  thumbnail?: string;
  stepCount?: number;
  level?: string;
  time?: string;
  status?: string;
  isAvailable?: boolean;
  isNew?: boolean;
  isDraft?: boolean;
  points?: number;
  state?: string;
  assets?: boolean;
  count?: number;
  backendImage?: string;
  environment?: { uilayout: string };
  steps?: string[];
  authors?: string[];
  isConflicted?: boolean;
  isUploadedFromGitHub?: boolean;
  gitHubRepo?: string;
  comment?: string;
  admin?: string;
  isForDeletion?: boolean;
  isDeletionRejected?: boolean;
  isMerged?: boolean;
}

export interface IScenarioStep {
  text?: string;
  status?: string;
  filePath?: string;
  hasNext?: boolean;
  scenarioTitle?: string;
  hasPrevious?: boolean;
  stepInfo?: IStepInfo;
}

export interface IStepInfo {
  contents: string;
  time: string;
  title: string;
}

export interface IRunningScenario {
  learningPathTitle?: string;
  scenarioTitle?: string;
  isPending?: string;
  status?: boolean;
  isAuthor?: boolean;
  courseName?: string;
}

export interface ITerminatePopupData {
  isTerminatePopupVisible?: boolean;
  terminationText?: string;
  popupActions?: string[];
  scenarioTitle?: string;
}

export interface IScenarioSteps {
  scenarioMetadata: IScenario;
  steps: IScenarioStep[];
}

export interface ICreateScenario {
  learningPath?: string;
  description?: string;
  complexity?: string;
  duration?: string;
  title?: string;
  type?: string;
}

export interface ICreateScenarioPayload {
  learningPath?: string;
  description?: string;
  complexity?: string;
  duration?: string;
  title?: string;
  type?: string;
}
