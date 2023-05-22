// #region Global Imports
import styled from 'styled-components';
// #endregion Global Imports

export const SubscriptionInfoWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 30px 20px;
  }
  h1 {
    @media only screen and (max-width: 768px) {
      font-size: 26px !important;
      margin-top: 0;
    }
  }
  .table-responsive {
    height: 250px;
    overflow: auto;
  }
  .cancelSub {
    font-weight: bold;
    font-size: 14px;
    line-height: 15px;
    color: #333;
    margin-top: 10px;
    display: block;
    text-transform: capitalize;
    text-align: center;
    margin-top: 20px;
    @media only screen and (max-width: 768px) {
      text-align: left;
      margin-top: 0;
    }
    a {
      color: #333;
    }
    .ProfileImg {
      width: 20px;
      margin-right: 10px;
    }
  }
  .upgradePlan {
    color: #1447a6;
  }
  .upgradePlans {
    @media only screen and (max-width: 768px) {
      position: absolute;
      bottom: 110px;
      right: 0;
    }
    .updatePassword {
      max-width: 160px;
    }
    .cancelSubscriptionPlan {
      border: 2px solid #e91b1b;
      color: #e91b1b;
      &:hover {
        background-color: #e91b1b;
        color: #fff;
      }
    }
  }
  .subscriptionContainer {
    background-color: #fff;
    background: #ffffff;
    box-shadow: 0px 8px 24px rgba(51, 51, 51, 0.1);
    padding: 25px 20px;
    margin-bottom: 20px;
    padding-bottom: 0;

    .standardPlans {
      font-size: 16px;
      line-height: 28px;
      color: rgb(98, 98, 98);
    }
  }
  .SubscriptionPlan {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 120%;
    color: #333;
    padding: 30px 15px 15px;
  }
  .yearlyPlan {
    background: #f2994a;
    border-radius: 21px;
    width: 100px;
    height: 33px;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 32px;
    color: #ffffff;
    text-align: center;
  }
  .monthlyPay {
    font-size: 24px;
    color: #333333;
    font-weight: bold;
    strong {
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      line-height: 120%;
    }
  }
  .startDate {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #626262;
    span {
      font-style: italic;
      margin-left: 5px;
      color: #8e8e8e;
      font-weight: normal;
    }
  }
  .cancelSubscription {
    color: #0b76f7;
    text-decoration-line: underline;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
  }
  .table td {
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #8e8e8e;
    border-top: none;
  }
  .table -webkit-tap-highlight-color span {
    cursor: pointer;
  }

  .freePlan {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    text-transform: uppercase;
    color: #626262;
    span {
      font-style: italic;
      color: #8e8e8e;
      font-weight: normal;
    }
  }
  .upgrade {
    text-decoration: underline;
    font-weight: bold;
    color: green;
    cursor: pointer;
  }
`;
