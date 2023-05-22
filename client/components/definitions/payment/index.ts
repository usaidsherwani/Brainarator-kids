export enum PAYMENT_METHODS {
  STRIPE = 'killbill-stripe',
  PAYPAL = 'killbill-paypal',
  PAYPAL_PAYMENT = 'PAYPAL',
  STRIPE_PAYMENT = 'STRIPE',
  VISA = 'VISA',
  PAYPAL_EXTERNAL_TITLE = '__EXTERNAL_PAYMENT__',
  MASTERCARD = 'MASTERCARD',
  CARD = 'Credit/Debit Card',
}

export const PAYMENT_CARD_TYPES = [`AMEX`, `DINERS`, `DISCOVER`, `JCB`, `MASTERCARD`, `UNIONPAY`, `VISA`, 'PAYPAL'];

export enum PREMIUM_PAYMENT_PLANS {
  MONTHLY = 'Premium_Monthly',
  ANNUAL = 'Premium_Annual',
}

export enum PAYMENT_PLANS {
  MONTHLY = 'monthly',
  ANNUAL = 'yearly',
  FREE_PLAN = 'Free_Plan',
  ONE_TIME = 'one-time',
}

export const PAYMENT_STATUS_TYPES = [`SUCCESS`, `REFUND FAILED`, `REVERSAL IN PROGRESS`];

export enum PAYMENT_STATUS {
  SUCCESS = 'success',
  CANCELLED = 'cancelled',
  UPDATED = 'updated',
  PENDING_STATUS = 'PENDING',
  SUCCESS_STATUS = 'SUCCESS',
  FAIL_STATUS = 'FAIL',
  REFUND_FAIL_STATUS = 'REFUND FAILED',
  REVERSAL_IN_PROGRESS = 'REVERSAL IN PROGRESS',
}

export enum PAYMENT_CATEGORY {
  EARLY_BIRD = 'earlyBird',
  STANDARD = 'standard',
}

// TODO: Target to get this info from API in v1.6.0
export const monthlyPaymentPlan = {
  title: 'Monthly',
  features: ['All Learning Paths', 'All Scenarios'],
};

export const yearlyPaymentPlan = {
  title: 'Yearly',
  features: ['All Learning Paths', 'All Scenarios'],
};

export const NUM_OF_MONTHS = {
  ONE_MONTH: 1,
  TWELVE_MONTHS: 12,
};

export const TRANSACTION_STATUS = {
  SUCCESS: 'SUCCESS',
  PENDING: 'PENDING',
  FAIL: 'FAIL',
  REFUNDED: 'REFUNDED',
  REFUND_FAILED: 'REFUND FAILED',
};

export enum PAYPAL_PAGE_HELPERS {
  PAYPAL_RENDER_LIMIT = 500,
  PAYPAL_RENDER_HELPER = 1,
}

export enum PAYPAL_PAYMENT_UPGRADE {
  PAYPAL_APPROVAL_KEY = 'approval',
  PAYPAL_APPROLVAL_NOT_FOUND = 'no approval found',
}

// TODO: GTAG code, will add after getting input from Aymen
// export enum GOOGLE_TAG {
//   EVENT_KEY = 'event',
//   EVENT_NAME = 'purchase',
// }

export enum PAYMENT_COUPON {
  NO_COUPON = 'NoCoupon',
}

export enum PAYPAL_SUBSCRIPTION {
  APPROVAL = 'paypal_approval',
}
export enum PAYMENT_METHODS_LOGOS {
  PAYPAL = '/static/images/paypal.png',
  CARD = '/static/images/cardIcon.png',
}
export enum PAYMENT_ACTIONS {
  CHECKOUT = 'checkout',
}
