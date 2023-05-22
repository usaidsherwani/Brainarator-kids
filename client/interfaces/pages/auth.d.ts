import { IPaymentInfo } from 'client/interfaces';
import { ICoursePrice } from './authoring';

export interface IUserPayload {
  website?: undefined | string;
  referral?: undefined | string;
  bio?: string;
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: undefined | string;
  lastName?: undefined | string;
  privacyPolicy?: boolean;
  phone?: string;
  address?: undefined | string;
  isAdmin?: boolean;
  roles?: string[];
  isActive?: boolean;
  activePlan?: IActivePlan;
  phone?: undefined | string;
  subscribed?: boolean;
  subscribedCourses?: string[];
  uuid?: string;
  paymentInfo?: IPaymentInfo;
  session_id?: string;
  country?: string | undefined;
  rewards?: IUserReward;
  rank?: number;
}

export interface IUserReward {
  points?: number | undefined;
  badges?: string[];
}

export interface ILeaderboardBadge {
  index?: number | string;
  badge?: string;
  label: string;
}
export interface IEmailUserData {
  planName?: string;
  active?: boolean;
  subject?: string;
  emailType?: string;
  origin?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  authentication_token?: string;
  amountPaid?: string;
  currency?: string;
  paymentDate?: string;
  paymentMethod?: string;
  recieptNo?: number;
  isLogoHidden?: boolean;
  newBadge?: string;
  previousBadge?: string;
  points?: number;
  referral?: string;
  scenario?: string;
  learningPath?: string;
  comment?: string;
  oldComment?: string;
  courseName?: string;
}

export interface IUserPasswords {
  password?: string;
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

export interface IUserForgotPasswordEmail {
  email?: string;
}

export interface IActivePlan {
  name?: string;
  finalPrice?: number;
  pretty_name?: string;
  cancelled?: boolean;
  upgraded?: false;
  refund?: false;
}

export interface ITransactionDetails {
  transaction_id?: string;
  transaction_time?: Date;
  payment_method?: string;
  plan?: string;
  billing_month?: string;
  status?: string;
  amount?: number;
  discountedAmount?: number;
  status?: boolean;
  purchasedCourses?: IPurchasedCourses[];
  appliedDiscount?: number;
}
export interface IPurchasedCourses {
  course?: string;
  price?: ICoursePrice;
}

export interface IUserCredentials {
  email?: string;
  password?: string;
}

export interface ILeaderBoardParams {
  page: number | null;
  count: number;
  start: number | null;
}

export interface ILeaderBoardUsers {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  xpPoints: number;
  badges: string[];
  rank: number;
}

export interface ILeaderBoard {
  entries?: ILeaderBoardUsers[];
  hasNext: boolean;
  totalCount: number;
}

export interface IUserCertificate {
  learningPathTitle: string;
  courseTitle: string;
  completionDate: date;
  thumbnail: string;
}

export interface IUserCertificatesData {
  learningPathTitle?: string;
  courseTitle?: string;
}

export interface IUserAddress {
  country?: string;
  region?: string;
  postal?: string;
  city?: string;
}

export interface IUserEmail {
  email: string;
}
