import styled, { css } from 'styled-components';

export const SearchBarField = styled.span`
  float: right;
  position: relative;
  @media only screen and (max-width: 1200px) {
    display: block;
    margin-left: 20px;
    width: 100%;
    margin-bottom: 20px;
  }
  input {
    width: 185px;
    font-size: 11px;
    height: 40px;
    @media only screen and (max-width: 1200px) {
      display: block;
      width: 100% !important;
    }
  }
  .searchIcon {
    background: rgb(11, 118, 247);
    color: rgb(255, 255, 255);
    padding: 4px 8px;
    position: absolute;
    right: 5px;
    top: 4px;
  }
`;
