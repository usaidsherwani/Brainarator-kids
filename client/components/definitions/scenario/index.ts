export enum AUTHORING_STATE {
  DRAFT = 'draft',
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export enum SCENARIO_STATES {
  DRAFT = 'draft',
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CONFLICTED = 'conflicted',
}

export enum LEARNING_PATH_STATES {
  DRAFT = 'draft',
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CONFLICTED = 'conflicted',
}
export enum COURSE_STATES {
  DRAFT = 'draft',
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CONFLICTED = 'conflicted',
  REORDERED = 'reordered'
}
export enum APPROVAL_STATUSES {
  DRAFT = 'Draft',
  PENDING = 'Approval Pending',
  APPROVED = 'Approved By Admin',
  REJECTED = 'Rejected By Admin',
}

export enum SCENARIO_AUTHOR_TYPES {
  ADMIN = 'admin',
  AUTHOR = 'author',
}

export enum CONTRIBUTION {
  AUTHORED_COURSE = 'AuthoredCourse',
  AUTHORED_LEARNING_PATH = 'AuthoredLearningPath',
  AUTHORED_SCENARIO = 'authoredScenario',
}
export enum REPO_VIEW {
  REPOS = 'Repos',
  CLONED_REPOS = 'Cloned Repos',
}

export enum RESYNC_IDENTITY {
  SCENARIO = 'scenario',
  LEARNING_PATH = 'learningPath',
  COURSE = 'course',
}

export enum ADMIN_APPROVAL {
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

export enum SCENARIO_PREMIUM_STATES {
  PREMIUM = 'PREMIUM',
}

export const PREVIEW_MODE = 'Preview Mode';
