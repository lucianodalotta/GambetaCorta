import styled from 'styled-components';
import background from '../../../commons/resources/rectangle.svg'

import { MOBILE_320, TABLET_768, TABLET_740, TABLET_800 } from '../../../commons/constants/sizes';

export const Body = styled.div`
  z-index: -1;  
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: bottom;
  background-color: #000654;
  @media (max-width: ${MOBILE_320}px) {
    background-repeat: unset;
  };
`