// #region Global Imports
import styled from 'styled-components';
// #endregion Global Imports

export const ProfileContainer = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 0 10px;
  }
  .certificateContainer {
    background-color: #fff;
    width: 100%;
    box-shadow: 0px 8px 24px rgba(51, 51, 51, 0.1);
    padding: 25px 15px;
    margin: 0 0 15px 0;
    border: none;
    border-radius: 0;
    @media only screen and (max-width: 767px) {
      margin: 10px 0;
      padding: 15px 5px;
    }
    img {
      margin-right: 10px;
      float: left;
    }
    .eyeIcon {
      font-size: 18px;
    }
    .eyeInfo {
      @media only screen and (max-width: 767px) {
        display: none;
      }
    }
    h4 {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 120%;
      color: #333333;
      margin-bottom: 0;
      @media only screen and (max-width: 767px) {
        font-size: 14px;
      }
    }
    .certificateHeading {
      text-align: left;
      margin-bottom: 5px;
      font-size: 16px;
      font-weight: bold;
      color: #000;
      padding-top: 5px;
      @media only screen and (max-width: 767px) {
        font-size: 14px;
        padding-top: 0;
      }
    }
    p {
      color: #626262;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 120%;
      text-align: right;
      @media only screen and (max-width: 767px) {
        font-size: 12px;
        margin-bottom: 0;
      }
    }
  }
  .profileImg {
    display: block;
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
  h2 {
    width: 100%;
    padding-bottom: 0px !important;
    font-size: 26px;
    text-transform: capitalize;
    font-weight: bold;
    padding-top: 0px;
    @media only screen and (max-width: 768px) {
      margin-top: 15px;
      font-size: 18px;
      margin-bottom: 0;
    }
  }
  .labelHeading {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #626262;
    width: 20%;
    @media only screen and (max-width: 767px) {
      width: 50%;
      display: block;
      font-size: 11px;
    }
  }
  .data {
    font-style: italic;
    font-weight: normal;
    font-size: 13px;
    line-height: 25px;
    color: #8e8e8e;
    width: 80%;
    @media only screen and (max-width: 767px) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      font-size: 12px;
    }
  }
  .userImg {
    width: 75px;
  }
  .changePassword {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    text-decoration-line: underline;
    color: #0b76f7;
    margin-top: 10px;
    display: block;
    margin-right: 5px;
    @media only screen and (max-width: 767px) {
      margin-top: 5px;
    }
  }
  .centerText {
    text-align: right;
    @media only screen and (max-width: 767px) {
      text-align: center;
      margin-top: 25px;
    }
  }
`;

// ChangeProfilePassword CSS
export const ChangeProfilePassword = styled.div`
  form {
    width: 100%;
    @media only screen and (max-width: 510px) {
      padding: 0;
    }
    .resetPassword {
      color: #21c466;
      border: 1px solid #21c466;
      background: #fff;
      box-shadow: none;
      @media only screen and (max-width: 510px) {
        margin-left: 0 !important;
        margin-top: 10px;
      }
    }
    button {
      @media only screen and (max-width: 767px) {
        max-width: 85px;
        width: 100%;
        padding: 7px 0px;
        font-size: 10px;
      }
    }
  }
`;

/** UPDATE PROFILE COMPONENT */
export const UpdateUserProfile = styled.div`
  margin-bottom: 30px;
  @media only screen and (max-width: 767px) {
    padding: 5px 5px 20px 5px;
    padding-bottom: 3em;
  }
  form {
    width: 100%;
    background: rgb(255, 255, 255);
    box-shadow: rgb(51 51 51 / 10%) 0px 8px 24px;
    padding: 30px 50px;
    @media only screen and (max-width: 767px) {
      padding: 20px 30px;
    }
  }
  button {
    max-width: 170px;
    width: 100%;
    @media only screen and (max-width: 767px) {
      max-width: 85px;
      width: 100%;
      padding: 7px 0px;
      font-size: 11px;
    }
  }
`;

/** UPDATE PROFILE CertficateWrapper */

export const CertficateWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .certWrapper {
    background-image: url(/static/images/certificate.png);
    width: 900px;
    margin: 0 auto;
    background-repeat: round;
  }
  .cert-name {
    text-align: center;
  }
  .cert-name {
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 150%;
    color: #333;
    padding-top: 10px;
    span {
      margin-left: -3px;
    }
    img {
      width: 5%;
    }
  }
  .cert-text {
    font-size: 52px;
    color: #0c5bba;
    text-align: center;
    font-weight: 500;
  }
  .cert-text-2 {
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    color: #4a4a4a;
  }

  .cert-user {
    color: #333333;
    font-weight: 600;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 150%;
  }
  .cert-footer {
    display: flex;
    height: 30%;
    width: 100%;
    justify-content: space-around;
    align-items: flex-end;
    padding-top: 30px;
  }
  .cert-date-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 50%;
  }
  .dotted-hr {
    position: static;
    width: 182px;
    height: 0px;
    border: 1px dashed #afafaf;
  }
  .cert-footer-text {
    color: #4a4a4a;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    font-weight: 700;
  }
  .cert-footer-text-2 {
    font-size: 20px;
    color: #4a4a4a;
  }
  .downloadBtn {
    padding: 0px 10px;
    width: 920px;
    i {
      font-size: 14px;
      line-height: 18px;
      color: #1447a6;
    }
  }
`;

/** UPDATE PROFILE Certficate pdf  */

export const CertificateContainer = styled.div`
  width: 1200px;
  height: 500px;
  padding: 50px 100px;
  font-family: 'Merriweather Sans', sans-serif;
  .certificate {
    width: 100%;
    font-family: 'Merriweather Sans', sans-serif;
  }
  table,
  tr,
  td {
    font-family: 'Merriweather Sans', sans-serif;
  }
`;
