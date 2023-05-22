// #region Global Imports
import styled from 'styled-components';
// #endregion Global Imports
export const RankingListContainer = styled.div`
  padding-bottom: 30px;
  .leaderTable {
    box-shadow: rgb(51 51 51 / 10%) 0px 8px 24px;
    padding: 25px 20px 0px;
    margin-bottom: 0;
    max-height: 400px;
    overflow-y: auto;
    background-color: #fff;
    height: 100%;
    margin-top: 20px;
    img {
      height: 24px;
      width: 24px;
      float: left;
      @media only screen and (max-width: 575px) {
        display: none;
      }
    }
  }
  input {
    width: 100% !important;
  }

  .table {
    tr.scroll {
      background-color: #edf5ff;
    }
    td {
      padding: 20px 15px;
      @media only screen and (max-width: 767px) {
        font-size: 9px;
        line-height: 13px;
      }
    }
  }
  .notFound {
    padding: 10px;
    text-align: center;
    display: block;
    width: 100%;
  }
  .panel-content {
    border-radius: 0 !important;
    .search input {
      font-size: 11px;
    }
    .item-renderer {
      cursor: pointer;
      input {
        height: 15px;
        width: 15px !important;
        margin-right: 10px;
        position: relative;
        top: 3px;
      }
    }
  }
  .dropdown-container {
    border: none !important;
    border-radius: 2px !important;
  }
  .dropdown-heading {
    background: #f5f5f5;
    border-radius: 2px;
    height: 40px;
    padding: 10px 20px;
    span {
      font-size: 11px;
      font-style: italic;
      color: #333;
    }
  }
  .mobileUser {
    @media only screen and (max-width: 767px) {
      display: block;
    }
  }
  .badgeLeft {
    margin-left: 10px;
    margin-top: 2px;
    display: inline-block;
    @media only screen and (max-width: 767px) {
      margin-left: inherit;
    }
  }
  .userInfo {
    display: flex;
    align-items: center;
  }
  .trophyImg {
    background: #edf5ff;
    text-align: center;
    padding: 15px 0;
    img {
      height: auto;
      width: auto;
    }
  }
  .userImg {
    height: 50px;
    width: 50px;
    margin-bottom: 10px;
  }
`;
