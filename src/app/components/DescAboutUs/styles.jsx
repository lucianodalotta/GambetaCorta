import styled from 'styled-components';

import { DESKTOP_1920, TABLET_768, TABLET_740, DESKTOP_1040, DESKTOP_1200 , DESKTOP_1366, TABLET_600} from '../../../commons/constants/sizes';


export const TextContainer = styled.div`
display: flex;
`

export const Content = styled.div`
display: flex; 
gap: 70px;
@media (max-width:${DESKTOP_1040}px) {
  flex-direction: column;
};
@media (max-width: ${TABLET_600}px) {
  align-items: center;
};
`


export const Body = styled.div`
  width: 100%;
  higth: 100%;
  justify-content:center;
  display: flex;
  flex-direction: column;
  align-items: center;
  backgroundColor:#010954;
  margin-bottom: 50px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 90px;
  margin-top: 90px;
  @media (max-width:${DESKTOP_1200}px) {
    gap: 40px;
  };
  @media (max-width: ${TABLET_740}px) {
    align-items: center;
  };
  
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  @media (max-width: ${DESKTOP_1920}px) {
    gap: 30px;
  };
  @media (max-width:1400px) {

    font-size: 30px;
  };
  @media (max-width: ${TABLET_768}px) {
    font-size: 15px;
    gap: 70px;
    width: 500px;
  };
  @media (max-width: ${TABLET_740}px) {
    font-size: 14px;
    gap: 20px;
  };
  @media (max-width: ${TABLET_600}px) {
    flex-direction: column;
    width: fit-content;
  };
`


export const Image = styled.img`
width: 80px;
height: 80px;
@media (max-width:${DESKTOP_1200}px) {
  width: 60px;
  height: 60px;
};
@media (max-width:${DESKTOP_1040}px) {
  width: 80px;
  height: 80px;
};

`

export const Text = styled.div`
  font-style: normal;
  font-weight:400;
  color: #FFFFFF;
  width: 400px;
  justify-content:center;
  font-size:20px;
  @media (max-width:${DESKTOP_1366}px) {
    font-size: 20px;
  };
  @media (max-width:${DESKTOP_1200}px) {
    font-size: 15px;
  };
  @media (max-width:${DESKTOP_1040}px) {
    font-size: 20px;
  };
  @media (max-width: ${TABLET_600}px) {
    font-size: 15px;
    width: 300px;
  };
  
  
  
 `

export const Title = styled.h2`
  flex: none;
  order: 0;
  flex-grow: 0;
  color: #FFB900;
  width: 300px;
  margin-bottom: 50px;
`
