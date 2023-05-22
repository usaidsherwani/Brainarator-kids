import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  box-shadow: rgb(204 204 204) 0px 0px 10px;
  background-color: #1447a6;
  .navbar {
    padding: 0px 30px;
    height: 65px;
    .desktopLogo {
      cursor: pointer;
    }
    .mobileLogo {
      display: none;
    }
    @media only screen and (max-width: 992px) {
      padding: 8px 10px;
      .desktopLogo {
        display: none;
      }
      .mobileLogo {
        display: block;
      }
    }
    .nav-link {
      padding: 6px 0px;
      font-size: 18px;
      line-height: 14px;
      margin-right: 20px;
      margin-left: 20px;
      color: rgb(255, 255, 255) !important;
      text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
      @media only screen and (max-width: 1200px) {
        font-size: 12px;
        margin-left: 10px;
        margin-right: 10px;
        text-shadow: none !important;
      }
    }
    .navbar-nav a {
      position: relative;
    }
    .navbar-nav a,
    .navbar-nav a:after,
    .navbar-nav a:before {
      transition: all 0.5s;
    }
    .navbar-nav a:after {
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      margin: auto;
      width: 0%;
      content: '';
      color: transparent;
      background: #fff;
      height: 2px;
    }
    .navbar-nav .active:after {
      display: none;
    }
    .navbar-nav .active {
      border-bottom: 2px solid rgb(255, 255, 255) !important;
      color: rgb(255, 255, 255) !important;
      transition: all 0.5s;
    }
    .signUp.nav-link {
      background: linear-gradient(180deg, #ffffff -81.58%, rgba(255, 255, 255, 0) 76.32%), #21c466;
      background-blend-mode: soft-light, normal;
      border: 1px solid #21c466;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 10px 16px !important;
      color: #fff;
      text-transform: uppercase;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      &:hover {
        color: #fff !important;
      }
    }
    .signUp.nav-link.active {
      border-bottom: none !important;
    }

    .dropdown-toggle::after {
      display: inline-block;
      margin-left: 5px;
      vertical-align: 1px;
    }

    .goldIcon {
      cursor: pointer;
      span {
        font-style: normal;
        font-size: 18px;
        line-height: 18px;
        text-transform: capitalize;
        margin-left: 5px;
        color: #fff;
        @media only screen and (max-width: 1200px) {
          font-size: 12px;
        }
        @media only screen and (max-width: 992px) {
          color: #000;
        }
      }
      img {
        width: 25px;
        @media only screen and (max-width: 767px) {
          width: 22px;
        }
      }
    }
    .badge {
      cursor: default;
    }
    .dropdown {
      .btn-primary {
        background-color: transparent;
        border: none;
        margin: 0 0 0 20px;
        @media only screen and (max-width: 992px) {
          margin: 10px 15px;
        }
        &::focus {
          box-shadow: none;
        }
        ::after {
          display: none !important;
        }
      }
    }

    .navbar-nav .signUp:after {
      display: none;
    }
    .navbar-nav .badge:after {
      display: none;
    }
    .navbar-nav .dropdown-item:after {
      display: none;
    }
    .navbar-nav a:hover:after {
      width: 100%;
    }

    .mobilePoints {
      display: none;
    }
    .mobileMenu {
      display: none;
    }
    .authorIcon {
      font-size: 21px;
      color: #0c5bba;
      vertical-align: middle;
    }
  }

  .navbarBg {
    .navbar-nav {
      align-items: center;
    }
    .dropdown-menu {
      border-radius: 0;
      box-shadow: 0px 0px 5px #ccc;
      border: none;
      padding: 0;
      left: -105px !important;
      min-width: 13rem;
      top: 53px !important;
    }
    .dropdown-item {
      border-bottom: 1px solid #ccc;
      font-weight: 400;
      color: #262626;
      padding: 12px 20px;
      cursor: pointer;
      img {
        cursor: pointer;
      }
    }
    .navbar-light .navbar-nav .nav-link:hover,
    .navbar-light .navbar-nav .nav-link:focus {
      color: #b1b1b1;
    }
    .dropdownMenu {
      justify-content: flex-end;
      a {
        padding: 0 15px;
      }
    }
    .logoutOptions {
      width: 100%;
      position: absolute;
      bottom: 0;
      margin-bottom: 0;
      li a {
        font-weight: bold;
        text-align: left;
        text-transform: uppercase;
        font-size: 14px;
      }
    }
    .subscribe {
      background: #0cc6bb;
      border: 1px solid #0cc6bb;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 10px 16px !important;
      color: #fff;
      text-transform: uppercase;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      margin: 0;
      &:hover {
        color: #fff !important;
      }
    }
    .iconCart {
      color: #fff;
      font-size: 22px;
      cursor: pointer;
      position: relative;
      @media only screen and (max-width: 992px) {
        color: #fff;
        margin-top: 20px;
        top: 6px;
      }
      span {
        background: #fff;
        color: #000;
        display: inline-block;
        font-weight: 700;
        position: absolute;
        text-align: center;
        left: 22px;
        top: -3px;
        border-radius: 30px;
        font-size: 9px;
        width: 14px;
        font-style: initial;
        @media only screen and (max-width: 992px) {
          color: #000 !important;
          font-size: 14px;
          line-height: 16px;
          font-size: 16px;
        }
      }
    }
    .userName {
      font-size: 12px;
      margin-left: 0px;
      font-weight: 600;
      display: inline-block;
    }
    @media only screen and (max-width: 992px) {
      .navbar-collapse {
        background-color: #fff;
        box-shadow: 0px 0px 10px #ccc;
        margin-top: 7px;
      }
      .nav-link {
        color: #000 !important;
        padding: 10px 0;
        display: block;
        border-bottom: 1px solid #e3e3e3;
        width: 100%;
        text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
      }
      .nav-link.active {
        color: #fff !important;
        background: rgb(20, 71, 166) !important;
      }
      .dropup,
      .dropright,
      .dropdown,
      .dropleft {
        width: 100%;
      }
      .navbar-nav {
        text-align: center;
        margin: 0px auto;
      }
      .dropdown-menu {
        text-align: center;
        display: block;
        visibility: visible;
      }
      .signUp.nav-link {
        background: transparent;
        border: transparent;
        font-size: 12px;
        text-transform: capitalize;
        font-weight: normal;
        &:hover {
          color: #000 !important;
        }
      }
      .mobilePoints {
        position: absolute;
        left: 33%;
        display: block;
        top: 6px;
        text-align: center;
        a {
          color: #fff !important;
          border-bottom: none;
          display: inline-block;
          width: 25%;
          margin-left: 5px;
          margin-right: 5px;
        }
        span {
          color: #fff;
          font-size: 11px;
        }
      }
      .goldIcon {
        display: none;
      }
      .mobileDropdown {
        display: none;
      }
      .mobileMenu {
        display: block;
      }
    }
  }
`;
