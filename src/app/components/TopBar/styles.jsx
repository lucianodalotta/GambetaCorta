import styled from 'styled-components';
import { MOBILE_575 } from '../../../commons/constants/sizes';

export const TopNav = styled.div`
  background-color: #000654;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 0%;
  right: 0%;
  padding: 20px 0px 0px 0px;
  z-index: 4;
`;


export const MenuSection = styled.div`
  display: flex;
  align-items: self-start;
`;

export const Logo = styled.img`
  width: 120px;
  height: 55px;
`;

export const TopNavContent = styled.div`
  max-width: 1080px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  @media (max-width: ${MOBILE_575}px) {
    max-width: 500px;
    margin-right: 10px;
  }
`;

export const ItemsSection = styled.ul`
  justify-content: center;
  display: flex;
  display: grid;
  grid-template-columns: repeat(5, auto);
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
}
`;

export const TopNavLink = styled.li`
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px 10px 10px;
  text-decoration: none;
  font-size: 17px;
  display: flex;
  align-items: center;
  height: 80px;
  :hover {
    color: white;
  }
`;

export const MobileDrop = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  gap: 10px;
  position: absolute;
  width: 100%;
  left: 0px;
  top: 0px;
  background: #000654;
  align-items: center;
  height: 650px;
  padding-top: 90px;
`;