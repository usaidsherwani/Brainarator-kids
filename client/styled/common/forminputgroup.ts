// #region Global Imports
import styled, { css } from 'styled-components';
// #endregion Global Imports
export const FormInputGroup = css`
  align-items: center;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  form {
    width: 60%;
    @media only screen and (max-width: 768px) {
      width: 80%;
    }
    label {
      display: inline-block;
      color: gray;
      font-size: 15px;
      margin-bottom: -0.5rem;
      font-weight: 400;
    }
    input {
      overflow: visible;
      padding: 8px 15px 8px 15px;
      border: 1px solid #ccc;
      border-radius: 50px;
      margin-bottom: 7px;
      margin-top: 2px;
      width: 100%;
      box-sizing: border-box;
      color: #2c3e50;
      background-color: #eceff1;
      transition: all 500ms ease;
      font-size: 16px;
      letter-spacing: 1px;
      &:focus {
        border-radius: 8px;
        -moz-box-shadow: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        border: 1px solid #3e90e1;
        outline-width: 0;
      }
    }

    .field-require {
      color: #e10303;
    }

    .text {
      text-align: center;
      font-size: 13px;
      color: #646c7a;
      text-align: center;
    }
    a {
      text-decoration: none;
      font-size: 13px;
      color: #292f40;
    }
    @media only screen and (max-width: 768px) {
      width: 80% !important;
    }
  }
`;
