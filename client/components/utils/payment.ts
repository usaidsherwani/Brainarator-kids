/* eslint-disable radix */
import {
  PAYMENT_PLANS,
  NUM_OF_MONTHS,
  PAYMENT_STATUS,
  PAYMENT_CARD_TYPES,
  PAYMENT_STATUS_TYPES,
} from 'client/definitions/payment';

import moment from 'moment';

import { isLoggedIn } from 'utils/user';
import AuthApi from 'client/api/apiHandlers/auth';
import LearningPathApi from 'client/api/apiHandlers/learningPath';

import {
  IScenario,
  ITransactionDetails,
  IPlanPrice,
  IUserPayload,
  IUserAddress,
  ICourse,
  IPurchasedCourses,
} from 'client/interfaces';
import { SCENARIO_PREMIUM_STATES } from 'client/definitions/scenario';
import _ from 'lodash';

export function getPlanAmount(planPrice?: IPlanPrice, numberOfMonths?: number) {
  let price = planPrice?.value ? planPrice?.value * (numberOfMonths || NUM_OF_MONTHS.ONE_MONTH) : 0;
  return price;
}

export function getCurrencySign(currency?: string) {
  switch (currency) {
    case 'JPY':
      return '¥';
    case 'GBP':
      return '£';
    case 'EUR':
      return '€';
    default:
      return '$';
  }
}

export function getCurrencyLabelFromCountry(country?: string) {
  switch (country) {
    case 'Japan':
      return 'JPY';
    case 'United Kingdom':
      return 'GBP';
    case 'France':
    case 'Germany':
    case 'Italy':
    case 'Spain':
      return 'EUR';
    default:
      return 'USD';
  }
}

export function getCurrencySignFromCountry(country?: string) {
  switch (country) {
    case 'Japan':
      return '¥';
    case 'United Kingdom':
      return '£';
    case 'France':
    case 'Germany':
    case 'Italy':
    case 'Spain':
      return '€';
    default:
      return '$';
  }
}

export function calculateDiscount(perMonthPrice?: IPlanPrice, perYearPrice?: IPlanPrice) {
  const monthlyPkgAnnualAmount = getPlanAmount(perMonthPrice, NUM_OF_MONTHS.TWELVE_MONTHS);
  const yearlyPkgAnnualAmount = getPlanAmount(perYearPrice, NUM_OF_MONTHS.TWELVE_MONTHS);
  let discountPercentage = 0;
  if (yearlyPkgAnnualAmount && monthlyPkgAnnualAmount)
    discountPercentage = ((monthlyPkgAnnualAmount - yearlyPkgAnnualAmount) / monthlyPkgAnnualAmount) * 100;
  return Math.round(discountPercentage);
}

export function setPriceUptoTwoDecimal(price?: number) {
  return price ? price.toFixed(2) : 0;
}

export function calculateMonthlyDiscountForEarlyBird(standardPrice: number, earlyBirdPrice: number) {
  let discountPercentage = 100 - (earlyBirdPrice * 100) / standardPrice;
  return Math.round(discountPercentage);
}

export const calculateAmountWithCurrency = (country?: string, price?: number, numberOfMonths?: number) => {
  // TODO Just for now to show the latest transaction amount without calculation
  // const totalAmount = price ? price * (numberOfMonths || NUM_OF_MONTHS.ONE_MONTH) : 0;
  const totalAmount = price || 0;
  let currencySign = getCurrencySignFromCountry(country);
  if (currencySign === '$') return `${currencySign}${Number(totalAmount.toFixed(2))}`;
  return `${currencySign}${Math.round(totalAmount)}`;
};

export const parseAmountWithCurrency = (price?: IPlanPrice, numberOfMonths?: number) => {
  const planValue = price?.value || 0;
  const totalAmount = planValue * (numberOfMonths || NUM_OF_MONTHS.ONE_MONTH);
  let currencySign = getCurrencySign(price?.currency);
  if (currencySign === '$') return `${currencySign}${Number(totalAmount.toFixed(2))}`;
  return `${currencySign}${Math.round(totalAmount)}`;
};

export const checkUserPlan = async (scenarioTitle: string, scenarios: IScenario[], userPlan: string) => {
  // TODO: Subscription will be handled in future
  // if (scenarios && userPlan) {
  //   const scenario: IScenario[] = await scenarios?.filter(
  //     (currentScenario: IScenario) => currentScenario.title === scenarioTitle
  //   );
  //   if (scenario[0]) {
  //     if (scenario[0]?.isPremium) {
  //       return true;
  //     }
  //     return true;
  //   }
  //   return true;
  // }
  // If user direct hits the url to start scenario
  // if (isLoggedIn()) {
  //   const user = await AuthApi.getUserInfo();
  //   const { data } = await LearningPathApi.getAllScenarios();
  //   if (scenarioTitle && user?.activePlan && data?.length !== 0) {
  //     const scenario: IScenario[] = await data.filter(
  //       (currentScenario: IScenario) => currentScenario.title === scenarioTitle
  //     );
  //     if (scenario[0]) {
  //       if (scenario[0]?.isPremium) {
  //         return user?.activePlan?.name !== PAYMENT_PLANS.FREE_PLAN;
  //       }
  //       return true;
  //     }
  //     return false;
  //   }
  // }
  return true;
};

export const getCoursePaymentInfo = (transactionDetails?: ITransactionDetails[], course?: ICourse) => {
  const coursePaymentInfo = transactionDetails?.filter((detail: ITransactionDetails) => {
    let filteredCourse = detail.purchasedCourses?.some(
      (courseDetail: IPurchasedCourses) => courseDetail?.course === course?.courseName
    );
    return filteredCourse;
  });
  return coursePaymentInfo;
};
export const getCoursePaymentStatus = (transactionDetails?: ITransactionDetails[], course?: ICourse) => {
  const coursePaymentInfo = getCoursePaymentInfo(transactionDetails, course);
  if (coursePaymentInfo && coursePaymentInfo[0]?.status) {
    return coursePaymentInfo[0]?.status;
  }
};

export const checkUserPayment = async (
  user?: IUserPayload,
  course?: ICourse,
  scenarioTitle?: string,
  scenarios?: IScenario[],
  transactionDetails?: ITransactionDetails[]
) => {
  const scenario = scenarios?.filter((scenario: IScenario) => scenario.title === scenarioTitle);
  const coursePaymentInfo = getCoursePaymentInfo(transactionDetails, course);
  let isScenarioAvailableToStart = false;

  if (
    (user &&
      user.username &&
      (course?.authors?.includes(user?.username) ||
        (user?.subscribedCourses &&
          user?.subscribedCourses?.includes(course?.courseName || '') &&
          coursePaymentInfo &&
          PAYMENT_STATUS_TYPES.includes(coursePaymentInfo[0]?.status || '')))) ||
    (scenario && !scenario[0]?.isPremium) ||
    !course?.isPremium
  ) {
    isScenarioAvailableToStart = true;
  } else if (!user && ((scenario && !scenario[0]?.isPremium) || !course?.isPremium)) {
    isScenarioAvailableToStart = true;
  } else {
    isScenarioAvailableToStart = false;
  }

  if (!isScenarioAvailableToStart) {
    if (
      scenario &&
      scenario[0]?.isPremium &&
      user &&
      user?.subscribedCourses &&
      user?.subscribedCourses?.includes(course?.courseName || '') &&
      coursePaymentInfo &&
      coursePaymentInfo[0]?.status === PAYMENT_STATUS.PENDING_STATUS
    ) {
      return PAYMENT_STATUS.PENDING_STATUS;
    }
    return SCENARIO_PREMIUM_STATES.PREMIUM;
  }
  return isScenarioAvailableToStart;
};

const getDate = (isLastWeek: boolean) => {
  let today = new Date();
  let unformatedDate = isLastWeek
    ? new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3) // It should be 1 week duration but for now its 1 for testing purposes
    : new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let unformatedDateMonth = unformatedDate.getMonth() + 1;
  let unformatedDateDay = unformatedDate.getDate();
  let unformatedDateYear = unformatedDate.getFullYear();
  let formatedDate: any = `${`00${unformatedDateDay.toString()}`.slice(
    -2
  )}-${`00${unformatedDateMonth.toString()}`.slice(-2)}-${`0000${unformatedDateYear.toString()}`.slice(-4)}`;
  return formatedDate;
};

export const checkRefundAvailablilty = (dateToCheck: any) => {
  let currentDate = getDate(false);
  let lastWeekDate = getDate(true);
  currentDate = currentDate.split('-');
  lastWeekDate = lastWeekDate.split('-');
  dateToCheck = dateToCheck.split('-');
  let fromDate = new Date(lastWeekDate[2], parseInt(lastWeekDate[1]) - 1, lastWeekDate[0]); // -1 because months are from 0 to 11
  let toDate = new Date(currentDate[2], parseInt(currentDate[1]) - 1, currentDate[0]);
  let check = new Date(dateToCheck[2], parseInt(dateToCheck[1]) - 1, dateToCheck[0]);
  if (check >= fromDate && check <= toDate) {
    return true;
  }
  return false;
};

export const getPaymentMethodIcon = (paymentMethod: string) => {
  if (PAYMENT_CARD_TYPES.includes(paymentMethod)) return `/static/images/${paymentMethod.toLowerCase()}Icon.png`;
  return `/static/images/debitCardIcon.png`;
};

export const calculateTransactionDate = (transactionDetail: ITransactionDetails, planName?: string) => {
  let currentDate = transactionDetail?.transaction_time;
  if (currentDate) {
    if (planName) {
      if (planName.toLowerCase() === PAYMENT_PLANS.ANNUAL) {
        const duration = moment.duration({ days: 365 });
        const formattedDate = moment(new Date(currentDate)).add(duration);
        return moment(formattedDate).format('DD-MM-YYYY');
      }
      if (planName.toLowerCase() === PAYMENT_PLANS.MONTHLY) {
        const formattedDate = moment(currentDate).add(NUM_OF_MONTHS.ONE_MONTH, 'months');
        return moment(formattedDate).format('DD-MM-YYYY');
      }
    }
    return moment(currentDate).format('DD-MM-YYYY');
  }
  return '';
};

export const calculateReceiptNumber = (): number => {
  return Math.floor(100000 + Math.random() * 900000); // For now this function generates random numbers on each call
};

export const checkUserPaymentStatus = (transactions: ITransactionDetails[], activePlan: any) => {
  if (transactions?.length === 0) {
    return false;
  }
  if (transactions[transactions.length - 1]?.status === PAYMENT_STATUS.PENDING_STATUS) {
    return false;
  }
  if (
    transactions[transactions.length - 1]?.status === PAYMENT_STATUS.SUCCESS_STATUS &&
    activePlan?.name !== PAYMENT_PLANS.FREE_PLAN
  ) {
    return true;
  }
  if (transactions[transactions.length - 1]?.status === PAYMENT_STATUS.FAIL_STATUS) {
    return false;
  }
  if (transactions[transactions.length - 1]?.status === PAYMENT_STATUS.REFUND_FAIL_STATUS) {
    return true;
  }
};

export const getDataObjectForGoogleTagManager = (
  user: IUserPayload,
  address: IUserAddress,
  latestTransaction: ITransactionDetails
) => {
  return {
    transaction_id: `t_${Math.floor(Math.random() * 90000) + 10000}`,
    currency: getCurrencyLabelFromCountry(address?.country),
    value: latestTransaction?.amount,
    user_data: {
      email_address: user?.email,
      address: {
        postal_code: address?.postal,
        first_name: user?.firstName,
        country: address?.country,
        last_name: user?.lastName,
        region: address?.region,
        city: address?.city,
      },
    },
    items: [
      {
        item_name: `brainarator_${user?.activePlan?.name?.toLowerCase()}_plan`,
        item_category: user?.activePlan?.name?.toLowerCase(),
        price: latestTransaction?.amount,
        item_brand: 'brainarator',
        quantity: 1,
      },
    ],
  };
};
