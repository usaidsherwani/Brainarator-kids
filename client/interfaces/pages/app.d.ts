// #region Global Imports
import { Store } from 'redux';
import { AppInitialProps } from 'next/app';
import { NextPageContext } from 'next';
import { ThunkDispatch } from 'redux-thunk';
import { WithTranslation } from 'next-i18next';
// #endregion Global Imports

interface AppStore extends Store {
  dispatch: ThunkDispatch;
}

export interface AppWithStore extends AppInitialProps {
  store: AppStore;
}

export interface ReduxNextPageContext extends NextPageContext {
  store: AppStore;
}

export interface ITranslationProps extends WithTranslation {}

export interface IInitialProps {
  namespacesRequired: string[];
}

export interface customSEO {
  keywords?: string;
  openGraph?: IOpenGraph;
  twitter?: ITwitter;
}

export interface IOpenGraph {
  type?: string;
  locale?: string;
  url?: string;
  title?: string;
  description?: string;
  defaultImageWidth?: number;
  defaultImageHeight?: number;
  site_name?: string;
}

export interface ITwitter {
  url?: string;
  title?: string;
  description?: string;
  defaultImageWidth?: number;
  defaultImageHeight?: number;
  image?: string;
}
