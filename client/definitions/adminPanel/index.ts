export enum ADMIN_PANEL_TYPE {
  SCENARIO_STATUS = 'Status',
  SCENARIO_NAME = 'Scenario',
  LEARNING_PATH_TITLE = 'Learning Path',
  AUTHOR_NAME = 'Author Name',
  LEVEL = 'Level',
  DURATION = 'Duration',
  ACTION = 'Actions',
}

export enum ADMIN_PANEL_TYPES_FOR_LEARNING_PATHS {
  LEARNING_PATH_STATUS = 'Status',
  LEARNING_PATH_NAME = 'Learning Path',
  AUTHOR_NAME = 'Author Name',
  CATEGORIES = 'categories',
  ACTION = 'Actions',
}
export enum ADMIN_PANEL_TYPES_FOR_COURSES {
  COURSE_STATUS = 'Status',
  COURSE_NAME = 'Course Name',
  AUTHOR_NAME = 'Author Name',
  CATEGORIES = 'categories',
  ACTION = 'Actions',
}
export enum ADMIN_PANEL_CATEGORIES {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CONFLICTED = 'conflicted',
  REORDERED = 'reordered',
}
export enum ADMIN_PANEL_VIEW_TYPE {
  LEARNING_PATHS = 'Learning Paths',
  SCENARIOS = 'Scenarios',
  COURSES = 'Courses',
}

export enum PLATFORM_AUTHOR {
  BRAINARATOR = 'brainarator',
}

export enum AUTHOR_PANEL_VIEW_TYPE {
  BRAINARATOR = 'Managed By Brainarator',
  LIVE_LEARNING_PATHS = 'Live Learning Paths',
  CREATED_LEARNING_PATHS = 'Created Learning Paths',
  COLLABORATIONS = 'Collaborations',
  CREATED_COURSES = 'Created Courses',
  LIVE_COURSES = 'Live Courses',
}

export enum COMMENT_ACTION {
  NEW = 'new',
  EDIT = 'edit',
}
