// #region Global Imports
import styled, { css } from 'styled-components';
/** Heading Css */

/** Full Login Page Css */
export const ForgetPasswordContainer = styled.div`
  display: flex;
  padding: 0;
  height: calc(100% - 65px);
  @media only screen and (max-width: 575px) {
    height: calc(100% - 150px);
  }
  a {
    display: block;
  }
  .image-holder {
    background-image: url(/static/images/forgetPassword.png);
    background-size: cover;
    height: 100%;
    background-repeat: no-repeat;
  }
`;
