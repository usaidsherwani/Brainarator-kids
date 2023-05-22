// #region Global Imports
import React from 'react';
import { NextPage } from 'next';
// #endregion Global Imports

import HomeComponent from 'client/components/home';

interface IProps{
}

const Home: NextPage<IProps> = () => {
  return <HomeComponent />;
};
export default Home;
