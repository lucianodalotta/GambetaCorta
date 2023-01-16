import styled from 'styled-components';
import { MOBILE_460, TABLET_768, TABLET_740, TABLET_800 } from '../../../commons/constants/sizes';
import bn_dk from '../../../commons/resources/bn_dk.svg'

export const Div = styled.div`
  width: 100%;
  @media (max-width: ${TABLET_800}px) {
    position: inherit;
  };
`

export const Image = styled.div`
  background-image: url(${bn_dk});
  width: 100%;
  height: 750px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
  @media (max-width: ${TABLET_800}px) {
    height: 600px; 
    background-position: center;
  };
`
export const Header = styled.div`
  position: inherit; 
  top: 200px; 
  width: 100%; 
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  font-size: 100px;
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
  @media (max-width: ${MOBILE_460}px) {
    font-size: 40px;
  };
`

export const Text = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Column = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
`