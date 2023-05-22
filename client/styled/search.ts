import styled, { css } from 'styled-components';

export const SearchField = styled.span`
  position: absolute;
  top: 50%;
  right: 15px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(0%, -27%);
  background: #f5f5f5;
  height: 40px;
  @media only screen and (max-width: 992px) {
    display: none;
  }
  /* input */
  input {
    outline: none;
    border: none;
    width: 0;
    padding: 0;
    color: #333;
    float: left;
    font-size: 11px;
    transition: 0.3s;
    line-height: 40px;
    background: #f5f5f5;
    height: 40px;
    @media only screen and (max-width: 575px) {
      width: 86.5%;
      padding: 10px;
    }
  }
  input::placeholder {
    color: #ccc;
  }
  /* icon */
  .search-btn {
    float: right;
    width: 40px;
    height: 40px;
    background: rgb(11, 118, 247);
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.3s;
  }
`;
