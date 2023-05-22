import styled from 'styled-components';

export const ScenariosListWrapper = styled.div`
  height: calc(100% - 0px);
  @media only screen and (max-width: 992px) {
    height: calc(100% - 5px);
  }
  .scenarioContainer {
    height: calc(100% - 0px);
  }
  .scenarioRow {
    height: calc(100% - 0px);
    .fileExplorer{
      height: calc(100% - 34px);
    }
  }
  .ScenarioColumn{
    height: 100%;
  }
  .fileExplorer {
    height: 100%;
  }
  .pathBanner {
    position: relative;
    .pathIcon {
      position: absolute;
      left: 14px;
    }
  }
.pathIcons{
  vertical-align: 1.4px;
}
  .pathBanner{
    background-image: url(/static/images/scenarioBanner.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100px;
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }
  .bannerImg {
    @media only screen and (max-width: 992px) {
      display: none;
    }
    img{
      width: 100%;
    }
  }
  .userPlans {
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
    position: absolute;
    right: 0;
    top: 12px;
  }
  .leftSec {
    width: 65%;
    float: left;
    margin-top: 106px;
    @media only screen and (max-width: 992px) {
      display: none;
    }
  }
  .rightSec {
    background: #fff;
    padding: 20px;
    width: 30%;
    float: left;
    margin: 25px;
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }

  .cartBtn {
    button {
      max-width: 100%;
      width: 100%;
      border-radius: 0;
    box-shadow: none;

    }
  }
  .gotoCart{
    max-width: 100% !important;
    width: 100%;
  }
  .bannerHeading {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: #333;
    padding-top: 5px;
    margin-bottom: 0;
  }
  .scenarioDesc {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #4a4a4a;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 8px;
    padding-right: 40px;

  }
  .standardPlan {
    height: 25px;
    font-weight: bold;
    font-size: 12px;
    line-height: 25px;
    background: #eb7710;
    border-radius: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    margin-left: 11px;
    padding: 0 10px;
    @media only screen and (max-width: 992px) {
      width: 44px;
      height: 21px;
      font-size: 10px;
      line-height: 20px;
      color: #ffffff;
      margin-left: 0;
      margin-top: 0;
      padding: 0 7px;
      }
  }
  .countsSteps {
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 150%;
    color: #626262;
    padding: 10px;
    img {
      width: 20px;
    }
  }
  .standPrice{
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
  }
    .coursePriceTag {
      color: #000;
      font-weight: 800;
      font-size: 24px;
      margin-bottom: 5px;
      text-align: center;
    }
  .learningPathHeading {
    font-size: 22px;
    margin-bottom: 0;
    @media only screen and (max-width: 768px) {
      font-size: 24px;
      padding-top: 15px;
    }
  }
  .joint-paper.joint-theme-default{
    margin: 0 auto;
    @media only screen and (max-width: 992px) {
    display: none;
    }
  }
  .card{
        min-height: 210px !important;
        width: 100%;

      }
    .card-footer {
      width: 100% !important;
      display: block !important;
      span {
        display: inline-block;
        padding: 5px 0;
        @media only screen and (max-width: 575px) {
          font-size: 11px;
          padding: 0;
          margin-left: 2px !important;
          margin-right: 2px !important;
          vertical-align: 0px;
          }
      }
    }

  .toolTip {
    background-color: gray;
    color: #fff;
    text-align: center;
    padding: 1px 5px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
  }
  .views {
    padding: 20px 0;
    @media only screen and (max-width: 992px) {
      display: none;
    }
      button {
        width: 115px;
        height: 33px;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        color: #626262;
        background: #cdcdcf;
        border: none;
      }
      .active {
        background: #0c5bba;
        color: #fff;
        font-weight: normal;
      }
    }
  .scenarioTabs {
    height: 100%;
    padding: 0;
    @media only screen and (max-width: 768px) {
      padding: 20px;
    }
    .react-tabs {
      height: 100%;
    }
    .react-tabs__tab-panel {
      height: calc(100% - 30px);
    }
  }
  .editiorLogo {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .draggedIcon {
    padding-top: 20px;
  }
  .tabsBar{
    display: flex;
    justify-content: space-between;
    background: #2c2c32;
    color: #9d9d9d;
    align-items: center;
    height: 35px;
    padding: 0 10px;
    background: rgb(79 79 79);
  }
  .scenarioTitle{
    font-size: 12px;
    &:hover {
      color: #fff;
      transition: 0.3s;
    }
  }
  .addSteps {
    color: rgb(12, 91, 186);
    font-weight: normal;
    font-size: 18px;
    line-height: 15px;
    padding: 10px 0px;
    display: block;
    cursor: pointer;
    width: 85px;
    overflow: hidden;
    text-overflow: ellipsis;
    float: left;
  }
  .activeStep {
    color: #fff;
    background: #094771 !important;
    border: 1px solid #007fd4;
  }
  .pencilIcon {
    color: #9d9d9d;
    font-size: 12px;
    vertical-align: middle;
    cursor: pointer;
    padding-left: 5px;
    display: inline-block;
  } 
  .trashIcon {
    color: #fff;
    font-size: 16px;
    vertical-align: middle;
    cursor: pointer;
    padding-right: 5px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: inline-block;
  }
  .disabled-icon {
    pointer-events: none;
    opacity: 0.4;
  }
  .plusSteps {
    display: flex;
    width: 100%;
    float: none;
  }
  .plusIcon {
    color: #9d9d9d;
    font-size: 14px;
    vertical-align: middle;
    display: inline-block;
    cursor: pointer;
    padding: 0 6px ;
    &:hover {
      color: #fff;
      transition: 0.3s;
    }
    span {
      vertical-align: 8px;
      margin-left: 6px;
      color: #505f7d;
      font-size: 12px;
      font-weight: bold;
      font-style: initial;
    }
  }
  .validateIcon{
    color: #9d9d9d;
    font-size: 14px;
    vertical-align: middle;
    display: inline-block;
    cursor: pointer;
    padding: 0 6px ;
  }
  .react-contextmenu-wrapper span{ 
    width: 125px;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 11px;
    @media only screen and (max-width: 992px) {
      width: 70px;
      font-size: 11px;

    }
  }
  .editorFolder {
    display: flex;
    background: rgb(37, 37, 38);
    padding: 5px;
    width: 100%;
    background-color: rgb(37, 37, 38);
  }
   .addStepsText {
    width: 100%;
    text-align: right;
  } 
  .circleIcon {
    margin-top: 0px;
    color:#fff ;
  }
  .saveBtn {
    max-width: 120px;
    padding: 5px;
    font-size: 11px;
    box-shadow: none;
  }
  .gitHubIcon{
    font-size: 13px;
    padding-top: 15px;
  }
  .editScenario {
    margin-top: 55px;
  }
  .editorBorder {
    border: 2px solid #ccc;
  }
  .executeScenario {
    background: #fff;
    height: 100%;
    border: 2px solid #ccc;
  }
.rightPanel {
    margin-right: 240px;
    height: calc(100% - 0px);
    transition: all 0.3s ease-in-out;
  }
.commandsPanel{
  background-color: #fff;
    bottom: 0px;
    right: 0px;
    position: fixed;
    top: 80px;
    max-width: 240px;
    width: 100%;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    height: calc(100% - 94px);
    margin-right: 15px;
    overflow-y: auto;
    .commandHeading{
     font-size: 16px;
    padding: 10px;
    border-bottom: 1px solid #eee;
    font-weight: bold;

    img{
      float: right;
      cursor: pointer ;
      padding-top: 3px;
    }
    }
    ul{
      padding:0 20px;
h6{
  font-size: 14px;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    color:#000;
}
p{
  font-size: 12px;
   font-weight:600;
   padding-top: 10px;

  }
      li{
    font-size: 11px;
    list-style-type: none;
    background: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
  }
  }
}
.commandsPanel.collapsed {
    width: 0px;
    transition: all 0.3s ease-in-out;
}
.collapsedPanel {
  margin-right: 0;
    transition: all 0.3s ease-in-out;
    height: calc(100% - 0px);
}
`;
