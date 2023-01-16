import styled from 'styled-components';
import { Link} from 'react-router-dom'
import { DESKTOP_1366, MOBILE_380, MOBILE_460, DESKTOP_1024, DESKTOP_1200, TABLET_1023, TABLET_600} from '../../../commons/constants/sizes';



export const    StyledLink = styled(Link)`
color: #ffffff;
text-decoration: none;
justify-content: center;
align-items: center;
`

export const    StyledLi = styled.div`
color: #ffffff;
text-decoration: none;
justify-content: center;
flex-direction: column;
@media (max-width: ${MOBILE_460}px) {
    width: 280px;
}
@media (max-width: ${MOBILE_380}px) {
    width: 270px;
    font-size: 13px;
}
`

export const StyledUl=styled.ul`
justify-content: center;
text-decoration: none;
display:center;
align-items: center;
flex-direction: column;
width: 300px;
border: 4px
gap: 500px;
@media (max-width: ${TABLET_1023}px) {
    flex-direction: column;
    gap: 50px;
    width: 300px;
}
@media (max-width: ${MOBILE_460}px) {
    width: 240px;
    flex-direction: column;
}
@media (max-width: ${MOBILE_380}px) {
    width: 220px;
    gap: 200px;
}
`

export const Map =styled.ul`
margin-left: 90px;
justify-content: center;
text-decoration: none;
display:center;
align-items: center;
flex-direction: column;
width: 300px;
border: 4px
gap: 500px;
@media (max-width: ${DESKTOP_1366}px) {
    width: 300px;
    margin-left: 50px;
}
@media (max-width: ${DESKTOP_1200}px) {
    margin-left: 0px;
}
@media (max-width: ${DESKTOP_1024}px) {
    width: 250px;
}
@media (max-width: ${MOBILE_380}px) {
    width: 200px;
}
`

export const StyledIframe=styled.iframe`
width: 100%;
display: flex;
@media (max-width: ${TABLET_1023}px) {
    flex-direction: column;
    gap: 50px;
}

`
export const StyledFooter=styled.footer`
background-color: #174DB1;
text-decoration: none;
justify-content: center;
align-items: center;
textAlign: 'center';
display: flex;
gap: 200px;
@media (max-width: ${DESKTOP_1366}px) {
    gap: 100px;
}
@media (max-width: ${MOBILE_460}px) {
    gap: 40px;
}

`


