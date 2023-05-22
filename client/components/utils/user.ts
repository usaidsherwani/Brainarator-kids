/**
 * @author Ali Tahir
 * @fileoverview: this file manages auth cookies
 */
import countryList from 'react-select-country-list';
import { IUserPayload } from 'client/interfaces';
import Cookies from 'universal-cookie';

export interface ILoginResponse {
  token: string;
}

export enum USER_CONFIGS {
  COOKIE_USER_TOKEN = 'USER_SESSION',
  COOKIE_USER_ACTIVATION_TOKEN = 'USER_ACTIVATION',
}

export function isLoggedIn(serverCookie?: any): any {
  let cookies;
  if (serverCookie) cookies = new Cookies(serverCookie);
  else cookies = new Cookies();
  return cookies.get(USER_CONFIGS.COOKIE_USER_TOKEN);
}

export function deleteSession(): void {
  const cookies = new Cookies();
  cookies.remove(USER_CONFIGS.COOKIE_USER_TOKEN, { path: '/' });
}

export function saveUserSession(user: ILoginResponse): void {
  deleteSession();
  const cookies = new Cookies();
  const session = { token: user.token };
  cookies.set(USER_CONFIGS.COOKIE_USER_TOKEN, session, { path: '/' });
}

export function saveUserActivationToken(user: ILoginResponse): void {
  const cookies = new Cookies();
  const session = { token: user.token };
  cookies.set(USER_CONFIGS.COOKIE_USER_ACTIVATION_TOKEN, session, { path: '/' });
}

export function getSession(serverCookie?: any): ILoginResponse {
  let cookies;
  if (serverCookie) cookies = new Cookies(serverCookie);
  else cookies = new Cookies();
  return cookies.get(USER_CONFIGS.COOKIE_USER_TOKEN);
}

export function getUserActivationToken(): ILoginResponse {
  let cookies;
  cookies = new Cookies();
  return cookies.get(USER_CONFIGS.COOKIE_USER_ACTIVATION_TOKEN);
}

export function deleteActivationToken(): void {
  const cookies = new Cookies();
  cookies.remove(USER_CONFIGS.COOKIE_USER_ACTIVATION_TOKEN, { path: '/' });
}

export const updateProfileUserReward = async (user: any, formData: any): Promise<any> => {
  const fields = ['firstName', 'lastName', 'country', 'address', 'bio', 'website']; // TODO:  Removing phone from here for now.
  let points = 0;
  fields.forEach(async field => {
    if (user[field] === '' && formData[field] !== '') {
      points += 3;
    }
  });
  return points;
};

export const completeProfileUserReward = async (formData: any): Promise<any> => {
  const fields = ['firstName', 'lastName', 'country']; // , 'phone']; //TODO: Removing phone for now
  let points = 0;
  fields.forEach(async field => {
    if (formData[field]) {
      points += 3;
    }
  });
  return points;
};

export const getLatestBadge = (user: IUserPayload) => {
  if (user?.rewards?.badges) return user?.rewards?.badges[user?.rewards?.badges?.length - 1];
};

export const getCountryList = () => {
  let countries = countryList()
    .getData()
    .map(country => ({ label: country.label, value: country.label }));
  return countries;
};

// TODO: to be implemented in future
// export function getRefreshToken(): string | null {
//   const session = getSession();
//   if (session && session.refresh) {
//     return session.refresh;
//   }
//   return null;
// }
