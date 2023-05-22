export enum CURRENCY_LIST {
  USD = 'USD',
}
export enum REPO_TYPES {
  REPO_NAME = 'Repository',
  STATUS = 'Status',
  ACTION = 'Action',
}
export enum CLONED_REPO_TYPES {
  SELECT = 'Select',
  NAME = 'Name',
  TYPE = 'Type',
  STAtUS = 'Status',
}

export enum GIT_UPLOAD_EVENT {
  LEARNING_PATH_UPLOADING_COMPLETED = 'LEARNING PATH UPLOADING COMPLETED',
  COURSE_UPLOADING_COMPLETED = 'COURSE UPLOADING COMPLETED',
  RESYNC_WHOLE_REPO_COMPLETED = 'RESYNC WHOLE REPO COMPLETED',
}

export enum CLONED_REPO_TYPES_FOR_SCENARIOS_IN_LEARNING_PATH {
  NAME = 'Name',
  TYPE = 'Type',
  STAtUS = 'Status',
}
export enum CLONED_REPO_TYPES_FOR_LEARNING_PATH {
  NAME = 'Name',
  TYPE = 'Type',
}
export enum COMPLEXITY_LEVEL {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  EXPERT = 'expert',
}
export const COMPLEXITY_LEVEL_OPTIONS = [
  { value: 'beginner', name: 'Beginner' },
  { value: 'intermediate', name: 'Intermediate' },
  { value: 'advance', name: 'Advance' },
];
