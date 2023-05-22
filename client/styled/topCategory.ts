import styled, { css } from 'styled-components';

export const TopCategory = styled.div`
  padding: 20px 0 0 0;
  @media only screen and (max-width: 1200px) {
    padding: 0;
  }
  .category {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    color: rgb(51, 51, 51);
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    text-align: center;
    margin: 5px;
    border: none;
    padding: 6px 5px;
    transition: all 0.5s cubic-bezier(0.4, 0, 1, 1);
    &:hover {
      background-color: #1447a6;
      color: #fff;
    }
    @media only screen and (max-width: 767px) {
      width: 100%;
    }
    span {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      width: 105px;
      @media only screen and (max-width: 767px) {
        width: 100%;
      }
    }
    img {
      width: 8px;
      vertical-align: -2px;
      margin-right: 5px;
    }
  }
  .category-selected {
    background: rgb(12, 91, 186);
    color: #fff !important;
  }
  .leftCategory {
    width: 80%;
    float: left;
    @media only screen and (max-width: 992px) {
      width: 100%;
    }
  }
  .rec-arrow {
    font-size: 15px;
    width: 20px;
    height: 20px;
    min-width: 20px;
    line-height: 22px;
    background-color: transparent;
    box-shadow: none;
    border-radius: 0;
    text-align: left;
  }
  .rec-arrow:hover:enabled,
  .rec-arrow:focus:enabled {
    color: #000;
    background-color: transparent;
    box-shadow: none;
  }
  input:focus,
  input:not(:placeholder-shown) {
    width: 185px;
    padding: 0 6px;
  }
  .search-box:hover > input {
    width: 185px;
    padding: 0 6px;
  }
  .search-box:hover > .search-btn,
  input:focus + .search-btn,
  input:not(:placeholder-shown) + .search-btn {
    background: rgb(11, 118, 247);
    color: rgb(255, 255, 255);
  }
`;
