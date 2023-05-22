export enum FORM_NAMES {
  LOGIN_FORM = 'loginForm',
  USER_INFO_FORM = 'userInfoForm',
  REGISTER_FORM = 'registerForm',
  FORGET_PASSWORD_FORM = 'forgetPasswordForm',
  RESET_PASSWORD_FORM = 'resetPasswordForm',
  CHANGE_PASSWORD_FORM = 'changePasswordForm',
  SUBSCRIPTION_FORM = 'subscriptionForm',
  CONTACT_US = 'contact-us',
  EDIT_PROFILE = 'editProfile',
  COMPLETE_BILLING = 'completeBilling',
  CREATE_SCENARIO = 'createScenario',
  EDIT_SCENARIO = 'updateScenario',
  CREATE_SENARIO_STEPS = 'createScenarioSteps',
  CREATE_STEP = 'createStep',
  COUPON_FORM = 'discountCouponForm',
  CREATE_LEARNING_PATH = 'createLearningPath',
  CREATE_COURSE = 'createCourse',
  EDIT_LEARNING_PATH = 'updateLearningPath',
  EDIT_COURSE = 'updateCourse',
}

export enum VALIDATIONS {
  REQUIRED = 'Required',
  MIN_NAME_LENGTH = 3,
  MAX_NAME_LENGTH = 10,
  MIN_PASSWORD_LENGTH = 8,
  MAX_CHAR_LENGTH = 15,
  MAX_TITLE_LENGTH = 64,
  MIN_DESCRIPTION_LENGTH = 20,
  MAX_DESCRIPTION_LENGTH = 150,
  MIN_PRICE_VALUE = 1,
  MAX_PRICE_VALUE = 999,
  MIN_DURATION_VALUE = 5,
  MAX_DURATION_VALUE = 60,
  MAX_MESSAGE_LENGTH = 250,
  MAX_ADDRESS_LENGTH = 50,
  MAX_WEBSITE_LENGTH = 30,
  MAX_BIO_LENGTH = 100,
}

export enum LOGIN_FORM {
  TOKEN = 'authentication_token',
}

export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PHONE_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
export const ALPHA_SPACE_REGEX = /^[a-zA-Z ]*$/;
export const NO_CAPITAL_REGEX = /^[a-z0-9]+$/;
export const SPACE_REGEX = /\s/;
export const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9 ]*$/;
export const ALPHA_NUMERIC_WITH_SPECIAL_CHARACTERS_REGEX = /^[a-zA-Z0-9-_()+ ]*$/;
export const SPACE_REGEX_START_AND_END = /^[^\s]+[-a-zA-Z0-9-_()+\s]+([-a-zA-Z]+)*[^\s]$/;
export const PRICE_UPTO_TWO_DECIMAL_REGEX = /^([0-9]*)(\.[0-9]([0-9])?)?$/;
