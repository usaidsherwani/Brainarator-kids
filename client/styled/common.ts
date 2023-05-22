import styled from 'styled-components';

export const MainHeading = styled.h1`
  width: 100%;
  padding-bottom: 0px !important;
  font-size: 38px;
  text-transform: capitalize;
  font-weight: bold;
  padding-top: 20px;
  margin-bottom: 5px;
  strong {
    color: #409eff;
  }
  @media only screen and (max-width: 575px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 20px;
  }
`;
