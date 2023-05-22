// #region Global Imports
import styled, { css } from 'styled-components';
/** Heading Css */
export const Heading = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 120%;
  color: #333;
  @media only screen and (max-width: 575px) {
    padding-top: 0;
    font-size: 26px;
    margin-bottom: 0;
  }
`;
/** Full Login Page Css */
export const LoginContainer = styled.div`
  display: flex;
  height: calc(100% - 65px);
  @media only screen and (max-width: 575px) {
    height: 100%;
  }
  .image-holder {
    background-image: url(/static/images/happyWomen.png);
    background-size: cover;
    height: 100%;
    background-repeat: no-repeat;
  }
`;
export const ConfirmationWrapper = styled.div`
  display: flex;
  height: 100%;
  .card-description {
    width: 77%;
    margin: 0px auto;
    @media only screen and (max-width: 767px) {
      font-size: 12px;
    }
    svg {
      vertical-align: sub;
      margin-right: 8px;
    }
  }
`;
