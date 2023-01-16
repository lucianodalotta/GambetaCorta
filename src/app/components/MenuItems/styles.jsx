import styled from 'styled-components';
import { DESKTOP_1920, TABLET_768, TABLET_740, TABLET_800, MOBILE_575 } from '../../../commons/constants/sizes';
import { Link } from 'react-router-dom'

export const Container = styled.ul`
  color: white;
  display: flex;
  justify-content: center;
  padding: 10px 10px 20px 0px;
  width: 190px;
  @media (max-width: ${MOBILE_575}px) {
    border-bottom: 1px solid #fff;
  };
`;



export const LinkTo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  line-height: 38px;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export const Btn = styled.button`
  font-size: 20px;
  color: white;
  border-color: #000654;
  background: transparent;
  border-style: solid; 
`;