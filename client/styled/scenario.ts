import styled from 'styled-components';
import { Container, ContainerProps } from 'react-bootstrap';

export const DetailWrapper = styled(Container) <ContainerProps>`
  height: 100%;
  background: #f5f5f5;
  padding-left: 0;
`;
export const ScenarioStepsWrapper = styled.div`
  height: calc(100% - 20px);
  .ReactMarkdown {
    padding: 20px;
    height: calc(100% - 240px);
    overflow: auto;
    background-color: #fff;
    padding-top: 0;
    @media only screen and (max-width: 575px) {
      height: calc(100% - 250px);
    }
  }
  .ReactMarkdown p,
  li {
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    color: #4a4a4a;
  }
  .premium {
    background: #f2994a;
    border-radius: 21.7391px;
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 9.2px;
    line-height: 12px;
    padding: 3px;
    width: 62px;
    text-align: center;
    margin-bottom: 0;
    margin-right: 15px;
  }
  .stepsHeading {
    padding: 0px 20px 0px;
    padding-bottom: 0;
    p {
      margin-bottom: 5px;
    }
    .scenarioHeading {
      font-weight: bold;
      font-size: 20px;
      line-height: 150%;
      color: #333;
    }
    .goldImg {
      width: 25px;
    }
  }
  .totalPoints {
    font-size: 14px;
    line-height: 18px;
    color: #626262;
  }
  .pointLeftborder {
    font-size: 14px;
    line-height: 18px;
    color: #626262;
    border-left: 1px solid #ccc;
  }
  .gainedPoints {
    font-size: 11px;
  }
  .total_steps_count {
    padding: 7px 22px 7px 22px;
    text-align: center;
    background: #fff;
    padding-top: 0;
    .steps_count {
      margin-bottom: 0px;
      color: #1447a6;
      font-size: 18px;
      font-weight: 600;
    }
  }

  .progress {
    height: 5px;
    display: flex;
    width: 70%;
    float: left;
    margin-top: 10px;
  }
  .stepCounts {
    width: 30%;
    font-weight: normal;
    font-size: 12px;
    color: #626262;
  }
  .scenarioSteps {
    text-transform: uppercase;
    margin: 5px;
  }
  .scrollbar-container {
    white-space: pre-line;
    height: 277px;
    position: relative;
    width: 100%;
    overflow-y: scroll;
    h2 {
      font-size: 24px;
      color: #101535;
    }
  }
  .btn {
    padding: 2px 10px 6px 10px;
  }
  ul {
    padding-left: 24px;
    width: 100%;
  }
  pre {
    width: 100%;
    white-space: break-spaces;
    padding: 20px;
    .rightArrow {
      float: right;
      margin-right: 19px;
      margin-top: 10px;
      cursor: pointer;
    }
    .rightTick {
      float: right;
      margin-right: 19px;
      margin-top: 10px;
    }
  }
  .title {
    display: flex;
    background-color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #333;
    padding-top: 10px;
    @media only screen and (max-width: 768px) {
      padding-top: 26px !important;
    }
  }

  button {
    &[disabled] {
      border: 1px solid #cccccc;
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }
  .MarkdownPreview {
    padding: 20px;
    height: 100%;
    overflow: auto;
    background-color: #fff;
    padding-top: 0;
    @media only screen and (max-width: 575px) {
      height: calc(100% - 250px);
    }
  }
  .MarkdownPreview p,
  li {
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    color: #4a4a4a;
  }
`;
