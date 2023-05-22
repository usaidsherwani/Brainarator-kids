import styled from 'styled-components';

export const InspectorContainer = styled.div`
  overflow-x: hidden;
  transition: 0.5s;
  position: absolute;
  top: 10px;
  right: 0px;
  transition: 0.5s;
  z-index: 9999;
  width: 550px;
  height: 100vh;
  height: 98%;
  display: flex;
  .ace_editor {
    height: calc(100% - 36px) !important;
  }
`;

export const CanvasContainer = styled.div`
  height: 100%;
  width: 100%;
  input[type='text'] {
    padding-top: 7px !important;
  }
`;
