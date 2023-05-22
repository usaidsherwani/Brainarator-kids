import styled from 'styled-components';

export const ScenarioDetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  .wrapper_terminal {
    overflow: hidden;
    position: relative;
    height: calc(100vh - 82px);
  }
  .visual_services {
    height: 100%;
    box-shadow: 0px 0px 10px #ccc;
  }
  div#editorCol {
    height: 100%;
  }
  .activeScenario {
    padding-left: 31px;
    font-size: 28px;
    font-weight: 700;
    text-transform: capitalize;
    color: #409eff;
  }
  .canvas-detail {
    padding: 0;
    background: #dcdcdc;
  }
  .react-tabs {
    height: 100%;
  }
  .react-tabs__tab-panel {
    height: 100%;
  }
  .react-tabs__tab-list {
    border-bottom: 2px solid #0c5bba;
    color: #fff;
    margin-bottom: 0;
  }
  .react-tabs__tab-list li {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    color: #1f1e1f;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: normal;
    display: inline-block;
    padding: 0.5rem 1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: rgb(12, 91, 186);
      background: #f5f5f5;
    }
  }
  .react-tabs__tab-list .active {
    color: #fff;
    background-color: #0c5bba;
  }
  .editiorLogo {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ScenarioDetailHeight {
    height: 100%;
    .sidebar {
      overflow-x: hidden;
      overflow-y: hidden;
      word-wrap: break-word;
      position: relative;
      height: 100%;
      width: 100px;
      box-shadow: 0px 0px 10px #ccc;
      background-color: #fff;
      .action_wrapper {
        position: sticky;
        background-color: whitesmoke;
        display: flex;
        bottom: 7px;
        justify-content: space-between;
        align-items: center;
        padding-right: 32px;
        padding-left: 19px;
        background-color: #fff;
        .btn-outline-primary {
          line-height: 18px;
          color: #21c466;
          border: 2px solid #21c466;
          width: auto;
          &:hover {
            color: #ffffff;
            background-color: #21c466;
            border-color: #21c466;
            svg {
              fill: #ffffff;
            }
          }
        }
        .btn-outline-primary:disabled {
          color: #0f7384;
          background-color: #bbbbbb7a;
          width: auto;
          &:hover {
            svg {
              fill: #21c466;
            }
          }
        }
      }
    }
    .full_height {
      height: 100% !important;
      padding: 15px 0;
      .tab-content {
        height: calc(100% - 35px);
      }
    }
    .full_terminal_view {
      height: 100%;
      margin: 0;
      .height_fifty {
        padding: 0;
        overflow-y: auto;
        height: 50%;
        background-color: #383732;
        overflow-x: hidden;
        border-bottom: 4px solid #fff;
      }
      .inner {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .react-draggable div {
        /* background-color: #fff; */
        background-image: url('/static/images/dargg.png');
        background-repeat: no-repeat;
        background-position: center;
      }
      .pre-line-break {
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    }
  }
`;
