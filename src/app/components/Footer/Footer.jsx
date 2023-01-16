import React from 'react';
import { Column } from '../DescAboutUs/styles';
import {StyledLink,StyledLi, StyledUl, StyledIframe, StyledFooter, Map} from './styles'




const logo = require('./image/instagramPNG.png')
const tel = require('./image/phone.png')
const pin = require('./image/pin.png')
const email = require('./image/mail.png')
const logoGC= require('./image/logo.png')



const Footer = () => {
return(
   <div className="App">
      <StyledFooter>
      <br />
      <div className='container mt-5 mb-5'>
         <nav className='row'>
         
         <StyledUl className='col-12 col-md-3 list-unstyled'>
               <StyledLi className='font-weight-bold mb-2'  >Seguinos en Instagram</StyledLi>
               <StyledLi className='text-start'>    Enterate de todo lo que se viene   </StyledLi>  
               <br />    
               <StyledLi><img src= {logo} className='mx-2' alt='instagram' width="30" height="30"/> <a href="https://www.instagram.com/torneogambetacorta/" target="_blank" class="text-reset" style={{ textDecoration: 'none' }}>@torneogambetacorta</a></StyledLi>
         </StyledUl>


          <StyledUl className='col-12 col-md-3 list-unstyled'>
              <StyledLi className='font-weight-bold mb-2'>Contacto</StyledLi>
              <StyledLi><img src= {tel} className='mx-2' alt='tel' width="20" height="20"/>11 5555-0120</StyledLi>
              <StyledLi><img src= {email} className='mx-2' alt='tel' width="20" height="20"/>torneogambetacorta@gmail.com</StyledLi>
              <StyledLi><img src= {pin} className='mx-2' alt='tel' width="20" height="20"/>Gallo 241, C1172 CABA</StyledLi> 
           </StyledUl>

            <Map className='col-12 col-md-3 list-unstyled'>
               <StyledLi className='font-weight-bold mb-2' >Ubicacion</StyledLi>
               <StyledLi>
                  <StyledIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13135.767324923736!2d-58.42212256906646!3d-34.6056323873418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8b3c2e64f1%3A0x7e88d6e0f1ae0f7!2sGallo%20241%2C%20C1172%20ABE%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1664378265770!5m2!1ses-419!2sar" ></StyledIframe>
               </StyledLi>
           </Map>
           

           </nav>
         </div>
      </StyledFooter>
    </div>  
)
   

}

export default Footer;
