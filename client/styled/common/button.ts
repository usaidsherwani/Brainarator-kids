// #region Global Imports
import styled from 'styled-components';
// #endregion Global Imports

export const DefaultButton = styled.button`
  border: none;
  color: #fff;
  text-transform: uppercase;
  background: linear-gradient(180deg, #ffffff -81.58%, rgba(255, 255, 255, 0) 76.32%), #21c466;
  background-blend-mode: overlay, normal;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  cursor: pointer;
  max-width: 160px;
  width: 100%;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background-color: #21c466;
  }
  button {
    &[disabled] {
      border: 1px solid #cccccc;
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }
  .resetPassword {
    color: #fff;
  }
  @media only screen and (max-width: 575px) {
    .resetPassword {
      font-size: 13px;
      color: #fff;
    }
  }
`;
export const GreenBorderButton = styled.button`
  border: 2px solid #21c466;
  box-sizing: border-box;
  border-radius: 4px;
  background: #ffffff;
  color: #21c466;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 15px;
  padding: 12px 20px;
  text-transform: uppercase;
  &:hover {
    background-color: #21c466;
    color: #ffffff;
  }
`;
