// #region Global Imports
import styled, { css } from 'styled-components';
export const RegisterContainer = styled.div`
  display: flex;
  @media only screen and (min-width: 1600px) {
    height: calc(100% - 65px);
  }
  .image-holder {
    background-image: url(/static/images/happyWomen.png);
    background-size: cover;
    height: 100%;
    background-repeat: no-repeat;
  }
`;
export const ConfirmationEmailWrapper = styled.div`
  display: flex;
  padding: 0;
  height: calc(100% - 65px);
  @media only screen and (min-width: 1600px) {
    padding: 0;
    height: calc(100% - 65px);
  }
  .image-holder {
    background-image: url(/static/images/confirmPassword.png);
    background-size: cover;
    height: 100%;
    background-repeat: no-repeat;
  }
`;
