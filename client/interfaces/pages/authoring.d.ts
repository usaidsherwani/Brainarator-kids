import { ICourse, ILearningPath, IScenario } from './learningPath';

export interface IAuthoringScenarioStep {
  name: string;
  content: string;
  isImage?: boolean;
  order?: number;
  scenarioTitle?: string;
  title?: string;
  status?: string;
  description?: string;
  filePath?: string;
  contents?: string;
  bgScript?: string;
  hasNext?: boolean;
  hasPrevious?: boolean;
  text?: string;
}
export interface IAuthoringScenarioSteps {
  scenarioDetail: IAuthScenario;
  steps: IAuthoringScenarioStep[];
  assets: IAuthoringScenarioAsset[];
}

export interface IAuthoringScenarioAsset {
  label: string;
  url: string;
}

export interface IAuthoringScenarioStepPayload {
  learningPathTitle?: string;
  scenarioTitle?: string;
  step?: IAuthoringScenarioStep;
  steps?: IAuthoringScenarioStep[];
  stepName?: string;
  oldStep?: string;
  newStep?: string;
  actionName?: string;
  isClickedSaveButton?: boolean;
  content?: string;
  isForGitHub?: boolean;
  overwrite?: boolean;
  repoPath?: string;
  isPressedCtrlS?: boolean;
  gitHubUserName?: string;
  gitHubRepoName?: string;
  isUploadLearningPath?: boolean;
  treeNodes?: INode;
  isEditor?: boolean;
  stepObject?: any;
  currentSelectedStep?: string;
  isImage?: boolean;
  deleteIndex?: number;
  stepToDelete?: any;
  selectedStep?: any;
}

export interface IAuthoringScenario {
  courseName?: string;
  learningPathTitle: string;
  userCreatedLearningPathTitle: string;
  scenarioTitle: string;
  learningPath?: string;
  title?: string;
  description: string;
  isPremium?: boolean;
  complexity: string;
  duration: string;
  unit: string;
  time: string;
}

export interface IAuthScenario {
  learningPath?: string;
  learningPathTitle?: string;
  complexity?: string;
  duration?: string;
  assets?: string[];
  status?: string | undefined;
  type?: string;
  title?: string;
  icon?: string;
  description?: string;
  points?: number;
  count?: number;
  isPremium?: boolean;
  isNew?: boolean;
  time?: string;
  level?: string;
  stepCount?: number;
  environment?: { uilayout: string };
  learningPathTitle?: string;
  isAvailable?: boolean;
  isNew?: boolean;
  status?: string;
  state?: string;
  backendImage?: string;
  isUploadedFromGitHub?: boolean;
}

export interface IAuthoringScenarioPayload {
  learningPathTitle?: string;
  learningPath?: string;
  scenarioTitle?: string;
  steps?: IAuthoringScenarioStep[];
  username?: string;
  oldScenarioTitle?: string;
  title?: string;
  description?: string;
  isPremium?: boolean;
  complexity?: string;
  duration?: string;
  time?: string;
  level?: string;
  courseName?: string;
}

export interface IAuthoringGitPayload {
  learningPathTitle?: string;
  scenarioTitle?: string;
  isDelete?: boolean;
  isScenario?: boolean;
  isAdminAction?: boolean;
  isConflictResolved?: boolean;
  userName?: string;
  courseName?: string;
}

export interface IAuthoringLearningPath {
  learningPathTitle?: string;
  description?: string;
  categories?: string[];
  authors?: string[];
  title?: string;
  state?: string;
  isDraft?: boolean;
  isAvailable?: boolean;
  isNew?: boolean;
  isPremium?: boolean;
  license?: string;
  type?: string;
  scenarioCount?: number;
  username?: string;
  scenarios?: IAuthScenario[];
  thumbnail?: string;
  isMerged?: boolean;
  contribution?: string;
  isDraft?: boolean;
  isConflicted?: boolean;
  isDeletingLiveLearningPath?: boolean;
  isForDeletion?: boolean;
  isDeletionRejected?: boolean;
  isReOrderRequest?: boolean;
  reOrderDetails?: { comment: string; reOrderScenarioTitles: string[] };
  reOrderApproval?: string;
  courseName?: string;
  comment?: string;
  admin?: string;
}

export interface ICoursePrice {
  value?: number | any;
  currency?: string;
  discountedValue?: number;
}
export interface IAuthoringCoursePayload {
  courseName?: string;
  description?: string;
  categories?: string[];
  isPremium?: boolean;
  authors?: string[];
  username?: string;
  courseLearningPaths?: string[];
  learningPathsData?: ILearningPath[];
  courseInfo?: { learningPaths?: ILearningPath[] };
  isForGitHub?: boolean;
  isDeletingLiveCourse?: boolean;
  comment?: string;
  isDeletionRejected?: boolean;
  isDeletingLiveCourse?: boolean;
  enable?: boolean;
  coursesNameList?: string[];
  course?: ICourse;
  learningPaths?: string[];
  price?: number | ICoursePrice | ICoursePrice[];
  complexity?: string;
}
export interface IAuthoringLearningPathPayload {
  courseName?: string;
  learningPathTitle?: string;
  oldLearningPathTitle?: string;
  description?: string;
  categories?: string[];
  authors?: string[];
  isPremium?: boolean;
  username?: string;
  isReOrderedBySuperUser?: boolean;
  learningPathScenarios?: IScenario[];
  isForGitHub?: boolean;
  isDeletingLiveLearningPath?: boolean;
  courseLearningPaths?: ILearningPath[];
  isDeletingLiveScenario?: boolean;
  comment?: string;
  isReOrderRequest?: boolean;
  isGetLearningPath?: boolean;
}
export interface IAuthoringGitHubPayload {
  accessToken?: string;
  gitHubUserName?: string;
  gitHubAuthenticationCode?: string;
  userGitHubAccessToken?: string;
  repository?: string;
  learningPathTitle?: string;
  scenarioTitle?: string;
  gitHubRepoName?: string;
  repoFileName?: string;
  repoPath?: string;
  isForGitHub?: boolean;
  overwrite?: boolean;
  repoFolderName?: string;
  username?: string;
  scenariosToUpload?: string[];
  isUploadingLearningPath?: boolean;
  isResync?: boolean;
  scenario?: IScenario;
  scenariosToResync?: string[];
  courseName?: string;
  course?: ICourse;
  authors?: string[];
  isResyncLearningPath?: boolean;
  thumbnail?: string;
  isResyncCourse?: boolean;
  learningPath?: ILearningPath;
  gitHubFolderPath?: string;
  categories?: string[];
  learningPathBaseRepoDetails?: ILearningPath;
  resyncRepo?: boolean;
  isResyncFromRepoPage?: boolean;
  courseName?: string;
  isLpPremium?: boolean;
  isResyncCourse?: boolean;
}
export interface IGitHubRepos {
  name: string;
  path: string;
  children?: any;
}

export interface ICommentPayload {
  title?: string;
  comment?: string;
  admin?: string;
  isDeletionRejected?: boolean;
}
export interface IGitHubErrors {
  learningPathTitle?: string;
  scenarioTitle?: string;
  stepName?: string;
  error?: string;
}
export interface IGitHubCourseLogs {
  status?: string;
  learningPathTitle?: string;
  courseName?: string;
  msg?: string;
  learningPaths?: IGitHubLearningPathLogs[];
  scenarios?: IGitHubScenarioLogs[];
}
export interface IGitHubScenarioLogs {
  status?: string;
  scenarioTitle?: string;
  learningPathTitle?: string;
  msg?: string;
}
export interface IGitHubLearningPathLogs {
  status?: string;
  scenarios?: IGitHubScenarioLogs[];
  learningPathTitle?: string;
  msg?: string;
}
export interface IGitHubStepResult {
  status?: string;
  stepName?: string;
  msg?: string;
}
export interface IGitHubCourseUploaded {
  result?: IGitHubCourseLogs;
  scenario?: IGitHubScenarioLogs;
  scenarios?: IGitHubScenarioLogs[];
  stepResponses?: IGitHubStepResult[];
  learningPaths?: IGitHubLearningPathLogs[];
  status?: string;
  courseName?: string;
  learningPathTitle?: string;
  scenarioTitle?: string;
  msg?: string;
}

export interface IGitHubWholeRepoResynLogs {
  course?: IGitHubCourseLogs[];
  learningPath?: IGitHubLearningPathLogs[];
  scenario?: IGitHubScenarioLogs[];
  status?: string;
  msg?: string;
}
export interface IConflictedFileData {
  title?: string;
  learningPathTitle?: string;
  scenarioTitle?: string;
  content?: string;
  isRepoFromVolume?: boolean;
  userName?: string;
  learningPathDetails?: IAuthoringLearningPathPayload;
  scenarioDetails?: IScenario;
}

export interface CategoriesMultiSelectField {
  label: string;
  value: string;
}

export interface IReorderPayload {
  title?: string;
  comment?: string;
  admin?: string;
  reOrderApproval?: string;
}
