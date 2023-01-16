import styled from 'styled-components';
import contact from '../../../commons/resources/contact.svg'
import { MOBILE_380, TABLET_768, TABLET_740, TABLET_800, MOBILE_460 } from '../../../commons/constants/sizes';


export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0px 50px 0px;
`
export const Box = styled.div`
  background-image: url(${contact});
  background-size: cover;
  background-color: #174db1;
  border-radius: 10px;
  width: 800px;

  /* flex */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 30px 30px 30px;
  justify-content: space-between;
  @media (max-width: ${TABLET_800}px) {
    width: 700px;
  };
  @media (max-width: ${TABLET_768}px) {
    width: 550px;
    flex-direction: column;
    gap: 20px;
  };
  @media (max-width: ${TABLET_740}px) {
    width: 370px;
  };
  @media (max-width: ${MOBILE_380}px) {
    width: 300px;
  };
`
export const Head = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: ${TABLET_768}px) {
    align-items: center;
  };
  @media (max-width: ${TABLET_740}px) {
    flex-direction: column;
    gap: 0px;
  };
  
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: ${TABLET_800}px) {
    flex-direction: column;
  };
`

export const Title = styled.h2`
  display: flex;
  align-items: flex-start;
  line-height: 40px;
  color: #FFFFFF;
  font-size: 25px;
  margin-bottom: 1.0rem;
  @media (max-width: ${TABLET_800}px) {
    color: #FFFFFF;
  },
  @media (max-width: ${TABLET_740}px) {
    line-height: 35px;
    align-items: flex-center;
  };
  @media (max-width: ${MOBILE_380}px) {
    font-size: 20px;
  };
`

export const Subtitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 0px;
  color: #FFFFFF;
  @media (max-width: ${TABLET_800}px) {
    font-size: 23px;
    line-height: 10px;
  };
  @media (max-width: ${MOBILE_380}px) {
    font-size: 19px;
  };
`

export const ButtonIg = styled.button`
  background: #E1306C;
  border-radius: 15px;
  width: 200px;
  height: 55px;
  border: 1px solid #444444;

  /* flex */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;

  /* fonts */
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 34px;
  text-transform: uppercase;
  color: #FFFFFF;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
`

export const ButtonWts = styled.button`
  background: #25D366;
  border-radius: 15px;
  width: 200px;
  height: 55px;
  border: 1px solid #444444;

  /* flex */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  
  /* fonts */
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 34px;
  text-transform: uppercase;
  color: #FFFFFF;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const Image = styled.img`
  width: 30px;
  height: 30px;
  
`