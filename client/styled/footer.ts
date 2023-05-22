// #region Global Imports
import styled from 'styled-components';
// #endregion Global Imports

export const FooterWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 0px;
  background-color: #333;
  .list-group {
    display: block;
    .list-group-item {
      padding: 0 7px;
      background-color: transparent;
      border: none;
      display: inline-block;
    }
  }
  @media only screen and (max-width: 768px) {
    .list-group {
      margin-bottom:10px;
    }
  }
  .copy_right {
    text-align: center;
    color: #E3E3E3;
    font-size:13px;
  }
  a {
    cursor: pointer;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 150%;
    color: #E3E3E3;
    &:hover {
      color: #409eff !important;
    }
  }
  .footer-social-media {
    .footer-social-icons {
      display: inline-flex;
      flex-direction: inherit;
    }
    .list-group-item {
      margin-right: 0;
    padding: 0 5px;
}
    }
    .list-group-item.disabled {
      opacity: 0.5;
      pointer-events: revert;
      .social-icon {
        cursor: not-allowed;
      }
    }

    @media only screen and (max-width: 768px) {
      text-align: center;
      margin-top: 0px;
    }
  }
  @media only screen and (max-width: 992px) {
    .quickLinks {
      text-align: center;
      margin-top: 0px;
    }
  }
  /* Helper class to divide the icons */

  .social-icon {
    margin-bottom: 15px;
    box-sizing: border-box;
    border-radius: 138px;
    border: 3px solid;
    text-align: center;
    width: 30px;
    height: 30px;
    display: inline-block;
    line-height: 1px;
    padding-top: 11px;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      transform: rotate(360deg) scale(1.3);
    }
    /* Facebook Button Styling */
    &.facebook {
      font-size: 12px;
      padding-top: 7px;
      border-color: #3b5998;
      background-color: #3b5998;
      color: #ffffff;
      &:hover {
        background-color: #ffffff;
        color: #3b5998;
      }
    }
    /* Twitter Button Styling */
    &.twitter {
      font-size: 12px;
      padding-top: 7px;
      padding-left: 2px;
      border-color: #55acee;
      background-color: #55acee;
      color: #ffffff;
      &:hover {
        background-color: #ffffff;
        color: #55acee;
      }
    }
    /* Linkedin Button Styling */
    &.linkedin {
      font-size: 12px;
      padding-top: 7px;
      padding-left: 1px;
      background-color: #0976b4;
      color: #ffffff;
      border-color: #0976b4;
      &:hover {
        background-color: #ffffff;
        color: #0976b4;
      }
    }
    /* instagram Button Styling */
    &.instagram {
      font-size: 12px;
      padding-top: 9px;
      background: #d6249f;
      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
      color: #ffffff;
      border:none;
      &:hover {
        color: #fff;
      }
    }

`;
export const HeadingFooter = styled.div`
  margin-bottom: 11px;
  color: #fff;
  font-size: 26px;
  font-weight: 500;
`;
