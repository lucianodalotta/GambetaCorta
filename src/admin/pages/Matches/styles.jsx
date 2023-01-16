import styled from 'styled-components';
import { DESKTOP_1920, TABLET_768, TABLET_740 } from '../../../commons/constants/sizes'


export const OptionsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: ${TABLET_768}px) {
    overflow-x: hidden !important;
  }
`;

export const Button = styled.div`
  height: fit-content;
  background-color: #d8d8d8; /* Green */
  border: none;
  color: black;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  align-self: center;

  :hover {
    background-color: #4CAF50;
    color: white;
  }
`;