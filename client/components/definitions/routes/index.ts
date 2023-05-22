export enum ROUTES {
  HOME = '/',
  LOGIN = '/auth/login',
  REGISTER = '/auth/register',
  CONFIRM_REGISTRATION = '/auth/register/confirm',
  FORGET_PASSWORD = '/auth/forget-password',
  RESET_PASSWORD = '/auth',
  LOGOUT = '/logout',
  ACTIVATION = '/auth/activation',
  COURSES = '/courses',
  ALL_COURSES = '/courses/all',
  LEARNING_PATHS = '/learningpaths',
  ENROLLED_COURSES = '/courses/enrolled',
  ENROLLED_LEARNING_PATHS = '/learningpaths/enrolled',
  ALL_LEARNING_PATHS = '/learningpaths/all',

  PAYMENT = '/plans',
  EARLYBIRD_PAYMENT = '/plans/earlybirds/eb4010',
  PAYMENT_MONTHLY_PLAN_STANDARD = '/payment/monthly/standard',
  PAYMENT_YEARLY_PLAN_STANDARD = '/payment/yearly/standard',
  PAYMENT_MONTHLY_PLAN_EARLY_BIRD = '/payment/monthly/earlyBird',
  PAYMENT_YEARLY_PLAN_EARLY_BIRD = '/payment/yearly/earlyBird',

  ABOUT_US = '/about',
  PRIVACY_POLICY = '/privacy-policy',
  CONTACT_US = '/contact-us',
  TERMS = '/terms',
  BLOGS = '/blogs',

  PROFILE = '/profile',
  SUBSCRIPTION = '/subscription',
  PURCHASE = '/purchase',
  LEADERBOARD = '/leaderboard',

  BADGES = '/badges',
  ROOT_HOME = '/home',
  PROFILE_SHARE = '/profileShare',

  ADMIN_PANEL = '/adminPanel',
  CREATE_SCENARIO = '/create/scenario',
  CREATE_LEARNING_PATH = '/create/learningPath',
  AUTHORING_CREATE_COURSE = '/authoring/create/course',
  AUTHORING_SCENARIO_CREATE = '/authoring/scenario/create',
  AUTHORING_SCENARIO_EDIT = '/authoring/scenario/edit',
  AUTHORING_LEARNING_PATH_CREATE = '/authoring/learningPath/create',
  AUTHORING_COURSE = '/authoring/course',
  AUTHORING_LEARNING_PATH_EDIT = '/edit/learningPath',
  AUTHORING_COURSE_CREATE = '/authoring/course/create',
  AUTHORING_COURSE_EDIT = '/edit/course',
  AUTHOR_PANEL = '/authorPanel',
  SHOPPING_CART = '/cart',
  CHECK_OUT = '/checkOut',
  PURCHASED_HISTORY = '/purchase',
  BLOCKLY_WORKSPACE = '/blocklyWorkspace'
}

export enum ROUTE_NAMES {
  HOME = '',
  USER = 'user',
  AUTH = 'auth',
  PLANS = 'plans',
  TERMS = 'terms',
  BADGES = 'badges',
  ABOUT_US = 'about',
  ROOT_HOME = 'home',
  CONTACT_US = 'contact-us',
  SUBSCRIPTION = 'subscription',
  COURSE = 'course',
  COURSES = 'courses',
  LEARNING_PATH = 'learningpath',
  LEARNING_PATHS = 'learningpaths',
  PRIVACY_POLICY = 'privacy-policy',
  PROFILE_SHARE = 'profileShare',
}

export enum PROD_URLS {
  HOME = 'https://brainarator.com',
  LOGIN = 'https://brainarator.com/auth/login',
  REGISTER = 'https://brainarator.com/auth/register',
  CONFIRM_REGISTRATION = 'https://brainarator.com/auth/register/confirm',
  FORGET_PASSWORD = 'https://brainarator.com/auth/forget-password',
  RESET_PASSWORD = 'https://brainarator.com/auth',
  LOGOUT = 'https://brainarator.com/logout',
  ACTIVATION = 'https://brainarator.com/auth/activation',

  COURSES = 'https://brainarator.com/courses',
  LEARNING_PATHS = 'https://brainarator.com/learningpaths',
  ENROLLED_LEARNING_PATHS = 'https://brainarator.com/learningpaths/enrolled',
  ALL_LEARNING_PATHS = 'https://brainarator.com/learningpaths/all',

  PAYMENT = 'https://brainarator.com/plans',
  PAYMENT_MONTHLY_PLAN = 'https://brainarator.com/payment/monthly',
  PAYMENT_YEARLY_PLAN = 'https://brainarator.com/payment/yearly',

  ABOUT_US = 'https://brainarator.com/about',
  PRIVACY_POLICY = 'https://brainarator.com/privacy-policy',
  CONTACT_US = 'https://brainarator.com/contact-us',
  TERMS = 'https://brainarator.com/terms',

  PROFILE = 'https://brainarator.com/profile',
  SUBSCRIPTION = 'https://brainarator.com/subscription',
  PURCHASE = 'https://brainarator.com/purchase',

  LEADERBOARD = 'https://brainarator.com/leaderboard',
}

export enum DEV_URLS {
  HOME = 'https://dev-l01x-s2s.brainarator.com',
  LOGIN = 'https://dev-l01x-s2s.brainarator.com/auth/login',
  REGISTER = 'https://dev-l01x-s2s.brainarator.com/auth/register',
  CONFIRM_REGISTRATION = 'https://dev-l01x-s2s.brainarator.com/auth/register/confirm',
  FORGET_PASSWORD = 'https://dev-l01x-s2s.brainarator.com/auth/forget-password',
  RESET_PASSWORD = 'https://dev-l01x-s2s.brainarator.com/auth',
  LOGOUT = 'https://dev-l01x-s2s.brainarator.com/logout',
  ACTIVATION = 'https://dev-l01x-s2s.brainarator.com/auth/activation',

  COURSES = 'https://dev-l01x-s2s.brainarator.com/courses',
  LEARNING_PATHS = 'https://dev-l01x-s2s.brainarator.com/learningpaths',
  ENROLLED_LEARNING_PATHS = 'https://dev-l01x-s2s.brainarator.com/learningpaths/enrolled',
  ALL_LEARNING_PATHS = 'https://dev-l01x-s2s.brainarator.com/learningpaths/all',

  PAYMENT = 'https://dev-l01x-s2s.brainarator.com/plans',
  PAYMENT_MONTHLY_PLAN = 'https://dev-l01x-s2s.brainarator.com/payment/monthly',
  PAYMENT_YEARLY_PLAN = 'https://dev-l01x-s2s.brainarator.com/payment/yearly',

  ABOUT_US = 'https://dev-l01x-s2s.brainarator.com/about',
  PRIVACY_POLICY = 'https://dev-l01x-s2s.brainarator.com/privacy-policy',
  CONTACT_US = 'https://dev-l01x-s2s.brainarator.com/contact-us',
  TERMS = 'https://dev-l01x-s2s.brainarator.com/terms',

  PROFILE = 'https://dev-l01x-s2s.brainarator.com/profile',
  SUBSCRIPTION = 'https://dev-l01x-s2s.brainarator.com/subscription',
  PURCHASE = 'https://dev-l01x-s2s.brainarator.com/purchase',

  LEADERBOARD = 'https://dev-l01x-s2s.brainarator.com/leaderboard',
}

export enum PATH_NAMES {
  HOME = '/home/containers/home',
  LOGIN = '/auth/containers/login',
  REGISTER = '/auth/containers/register',
  COURSES = '/course/containers/list',
  ENROLLED_COURSES = '/course/containers/list',
  LEARNING_PATHS = '/learningPath/containers/list',
  ENROLLED_LEARNING_PATHS = '/learningPath/containers/list',
  ALL_COURSES = '/course/containers/list',
  ALL_LEARNING_PATHS = '/learningPath/containers/list',
  PAYMENT = '/payment/containers',
  LEADERBOARD = '/leaderboard/containers',
  BADGES = '/badges/containers',
}
