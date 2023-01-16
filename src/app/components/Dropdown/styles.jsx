import styled from 'styled-components';
import { MOBILE_575, TABLET_768, TABLET_740, TABLET_800 } from '../../../commons/constants/sizes';

export const LinkTo = styled.a`
  height: 100px;
  color: white;
`

export const Container = styled.ul`
  z-index: 10;  
  width: 280px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
  background: #000654;
  @media (max-width: ${MOBILE_575}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0;
    width: 100%;
    margin-top: 180px;
  }
`;

export const SubLink = styled.a`

`;

export const Item = styled.li`
  color: white;
  text-decoration: none;
  :hover {
    background-color: #ddd;
    color: black;
  }

`;

export const Title = styled.button`

`;

