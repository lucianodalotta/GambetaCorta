import styled from 'styled-components';

import { DESKTOP_1920, TABLET_768, TABLET_740, TABLET_800, MOBILE_320 } from '../../../commons/constants/sizes';

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 100px 0px 0px 0px;
  @media (max-width: ${TABLET_740}px) {
    align-items: center;
  };
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 100px;
  font-size: 20px;
  @media (max-width: ${DESKTOP_1920}px) {
    gap: 100px;
  };
  @media (max-width: ${TABLET_800}px) {
    font-size: 20px;
    gap: 90px;
    width: 700px;
  };
  @media (max-width: ${TABLET_768}px) {
    font-size: 15px;
    gap: 70px;
    width: 500px;
  };
  @media (max-width: ${TABLET_740}px) {
    font-size: 14px;
    gap: 20px;
    flex-direction: column;
    width: 300px;
  };
  @media (max-width: ${MOBILE_320}px) {
    width: 200px;
  };
`

export const Image = styled.img`
  width: 70px;
  height: 90px;
  @media (max-width: ${TABLET_800}px) {
    width: 70px;
    height: 70px;
  };
  @media (max-width: ${TABLET_740}px) {
    width: 70px;
    height: 60px;
  };
`

export const Text = styled.div`
  font-style: normal;
  font-weight: 500;
  line-height: 33px;
  color: #FFFFFF;
  width: 600px;
  @media (max-width: ${TABLET_740}px) {
    width: 300px;
  };
  @media (max-width: ${MOBILE_320}px) {
    width: 200px;
  };
`

export const Title = styled.h2`
  flex: none;
  order: 0;
  flex-grow: 0;
  color: #FFFFFF;
`