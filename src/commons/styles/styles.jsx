import styled, { css } from 'styled-components'
import { DESKTOP_1920, TABLET_768, TABLET_740 } from '../constants/sizes';
import {Field} from 'formik';

export const FormikFieldText = styled(Field)`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`

export const ViewContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 60px;
  z-index: 0;

  @media (max-width: ${TABLET_768}px) {
    overflow-x: scroll !important;
    width: 90%;
    margin-bottom:50px;
  }
`;

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td,th{
    border: 1px solid #ddd;
    padding: 8px;
  }
  tr:nth-child(even){
    background-color: #f2f2f2;
  }
  tr:hover{
    background-color: #ddd;
  }
  th{
    text-align: left;
    background-color: #04AA6D;
    color: white;
  }
  
`;

export const PageContainer = styled.div`

  background-color: #010954;
  height: 100%;
  width: 100%;
  
`;

export const ActionButton = styled.div`
 cursor:pointer;
 color: blue;
 text-decoration: none;
 margin-bottom: 20px;
`;

export const ArrowImg = styled.img`
  width: 22px;
  height: 22px;
`;

export const ActionMessage = styled.div`
  color: green;
  font-weight: bold;
  display: ${(props) => props.isVisible ? 'flex' : 'none'};
`;

export const ErrorMessage = styled.div`
  color: #bd2c08;
  font-weight: bold;
`;