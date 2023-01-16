import styled from 'styled-components';

import { DESKTOP_1920, TABLET_768, TABLET_740, TABLET_800, MOBILE_320, MOBILE_380 } from '../../../commons/constants/sizes';
import bg_dk from '../../../commons/resources/foto.svg'
import bg_mv from '../../../commons/resources/bg_mv.svg'
import bg_tb from '../../../commons/resources/bg_mv.svg'
import { Link } from 'react-router-dom'

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Box = styled.div`
  padding: 20px 20px 40px 30px;
  margin-top: 80px;
  background-image: url(${bg_dk});
  background-size: cover;
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 15px;
  gap: 20px;
  @media (max-width: ${TABLET_800}px) {
    width: 700px;
  };
  @media (max-width: ${TABLET_768}px) {
    width: 520px;
    background-image: url(${bg_tb});
  };
  @media (max-width: ${TABLET_740}px) {
    width: 320px;
    background-image: url(${bg_mv});   
  };
  @media (max-width: ${MOBILE_380}px) {
    width: 300px;
  };
  @media (max-width: ${MOBILE_320}px) {
    width: 250px;
  };
`

export const Title = styled.h2`
  font-style: bold;
  font-weight: 500;
  font-size: 35px;
  line-height: 34px;
  color: #FFFFFF;
`

export const Line = styled.hr`
  width: 35%;
  outline-style: auto;
  margin: 0;
`
export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 34px;
  color: #FFFFFF;
  @media (max-width: ${TABLET_740}px) {
    font-size: 20px;
  };
`
export const LinkTo = styled(Link)`
  background: #819EF8;
  border-radius: 15px;
  font-weight: 500;
  font-size: 20px;
  line-height: 54px;
  color: #010954;
  text-decoration: none;
  padding: 0px 20px 0px 20px;
  &:hover {
    text-decoration: none;
    color: #010954;
  }
`