import AuthApi from 'client/api/apiHandlers/auth';

export const recaptchaHandler = async (response: string) => {
  let recaptchaKeys = {
    secret: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY || '',
    response,
  };
  const recaptchaRes = await AuthApi.validateRecaptcha(recaptchaKeys);
  return recaptchaRes;
};
