import styled from 'styled-components';

import { DESKTOP_1920, TABLET_768, TABLET_740, TABLET_800 } from '../../../commons/constants/sizes';

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`

export const Select = styled.select`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`

export const ViewContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1366px;;
  margin: 0 auto;

  @media (max-width: ${TABLET_768}px) {
    overflow-x: hidden !important;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  //background-color: gray;

  @media (max-width: ${TABLET_800}px) {
    padding: 0 18px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  background-color: white;
`


