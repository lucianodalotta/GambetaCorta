import React from 'react';
 import AboutUs from '../pages/AboutUs'
import LayoutContainer from './LayoutContainer';


const AboutUsContainer = ({children}) => {
  return (  

        <>
          <LayoutContainer>
            <AboutUs/>
          </LayoutContainer>
        </>
       
  );
};

export default AboutUsContainer;