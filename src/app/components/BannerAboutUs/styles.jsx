import styled from 'styled-components';
import { DESKTOP_1920, TABLET_768, TABLET_740, TABLET_800 } from '../../../commons/constants/sizes';
import bn_dk from '../../../commons/resources/banner.svg'

export const Div = styled.div`
  width: 100%;
  @media (max-width: ${TABLET_800}px) {
    position: inherit;
  };
`

export const Image = styled.div`
  background-image: url(${bn_dk});
  width: 100%;
  height: 1100px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${TABLET_800}px) {
    height: 600px; 
  };
`
export const Header = styled.div`
  position: inherit; 
  top: 200px; 
  width: 100%; 
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: safe center;
  align-items: center;
  font-size: 50px;
  font-weight: 900;
  font-style: italic;
  @media (max-width: ${TABLET_800}px) {
    font-size: 90px;
    top: 230px; 
  };
  @media (max-width: ${TABLET_768}px) {
    font-size: 80px;
    top: 220px; 
  };
  @media (max-width: ${TABLET_740}px) {
    font-size: 70px;
    font-weight: 800;
    left: 15px;
  };
`



export const Column = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
`

export const Header2 = styled.div`
  position: inherit; 
  top: 200px; 
  width: 100%; 
  color: yellow;
  display: flex;
  flex-direction: row;
  justify-content: safe center;
  align-items: center;
  padding: 0px;
  font-size: 50px;
  font-weight: 900;
  font-style: italic;
`