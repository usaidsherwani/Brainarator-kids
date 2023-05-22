// #region Global Imports
import styled from 'styled-components';
// #endregion Global Imports
export const HomeWrapper = styled.div`
  background-color: #fff;
  padding-top: 50px;
  .headerContent {
    margin: 20px auto;
    width: 100%;
    max-width: 800px;
    @media only screen and (max-width: 768px) {
      padding: 20px;
    }
  }
`;
export const Heading = styled.h1`
  text-align: center;
  padding-bottom: 30px;
  font-size: 42px;
  color: #101535 !important;
  line-height: 58px;
  @media only screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
  @media only screen and (max-width: 550px) {
    font-size: 24px;
    line-height: 30px;
  }
`;
export const SubTitle = styled.p`
  padding: 0px 50px;
  text-align: center;
  color: #626262;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 150%;
  @media only screen and (max-width: 768px) {
    padding: 0px 0px;
    font-size: 15px;
  }
`;
export const HeadingSmall = styled.h4`
  padding: 23px 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const ScenariosWrapper = styled.div`
  background-color: #f5f5f5;
  .viewLearningPath {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 120%;
    text-decoration: underline;
  }
  .mbl_v_show {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 30px 15px;
    .mbl_v {
      display: none;
    }
    .mbl_v_show {
      display: block;
    }
  }
`;
