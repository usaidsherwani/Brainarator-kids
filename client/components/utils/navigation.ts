import nextRouter from 'server/routes';

const { Router } = nextRouter;

export const goto = (...args: any): void => {
  const urlParams = new URLSearchParams(window.location.search);
  const returnUrl = urlParams.get('return-url');
  if (returnUrl) {
    Router.pushRoute(returnUrl);
  } else {
    Router.pushRoute(...args).then(() => window.scrollTo(0, 0));
  }
};
