export interface IPaymentInfo {
  plan?: string;
  coupon?: string;
  category?: string;
  pluginName?: string;
  isDefault?: boolean;
  sessionId?: string;
  subscriptionId?: string;
  payment_method?: string;
  paymentType?: string;
  courseName?: any;
  isFromPurchaseHistroy?: boolean;
}

export interface ILatestTransactionInfo {
  transaction_id: string;
  transaction_time: string;
  payment_method: string;
  billing_month: string;
  status: string;
  amount: number | undefined;
  country: string;
  planName: string;
  firstName: string;
}
export interface IUserCardInfo {
  card_type: string;
  card_num: string;
}

export interface IRedirectionUrls {
  success_url?: string;
  cancel_url?: string;
}
export interface IRedirectionUrlsForOneTimePayment {
  successUrl?: string;
  cancelUrl?: string;
  methodType?: string;
  courses?: string;
  couponCode?: string;
}

export interface IPaymentPricing {
  title: string;
  price?: string;
  features?: string[];
}

export interface ISubscriptionPlanResponse {
  plans?: ISubscriptionPlan[];
}

export interface ISubscriptionPlan {
  plan_name: string;
  billing_period?: string;
  price?: IPlanPrice;
}

export interface IPlanPrice {
  currency?: string;
  value?: number;
}

export interface ISubscriptionPricesMap {
  planName?: string;
  price?: IPlanPrice;
}
export interface IPaypalPlan {
  price?: IPlanPrice;
  plan_name?: string;
  plan_id?: string;
}

export interface IBillingCycles {
  allowedCycles?: number;
  type?: string;
}

export interface IPaypalApproval {
  isApproved: boolean;
  approvalUrl: string;
}

export interface ICouponData {
  couponCode?: string;
  isExpired?: boolean;
  discount?: number;
  isValid?: boolean;
  msg?: string;
  planDetails?: IPaypalPlan[];
  billingCycles?: IBillingCycles[];
  allowedCountries?: string[];
  payableAmount?: number;
  isCourseCoupon?: boolean;
  courses?: ICourse[];
}
export interface ICouponPayload {
  coupon?: string;
  courses?: string[];
}
