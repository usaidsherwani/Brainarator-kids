// #region Global Imports
import styled from 'styled-components';
// #endregion Global Imports

export const CommonWrapper = styled.div`
  .commonPages {
    width: 100%;
    background-image: url(/static/images/InnerBanner.png);
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    padding: 75px 0;
    h1 {
      color: #fff;
    }
  }
  .commonContainer {
    background: #ffffff;
    box-shadow: 0px 8px 24px rgba(51, 51, 51, 0.1);
    padding: 50px;
    @media only screen and (max-width: 575px) {
      padding: 30px;
    }
  }
  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 150%;
    color: #333333;
    @media only screen and (max-width: 575px) {
      font-size: 18px;
    }
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    @media only screen and (max-width: 575px) {
      font-size: 15px;
    }
  }
  p,
  li {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #4a4a4a;
    @media only screen and (max-width: 575px) {
      font-size: 14px;
    }
  }
  a {
    font-weight: bold;
  }
`;
export const SubHeading = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 150%;
  color: #333333;
`;
