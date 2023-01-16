import React from 'react';
import Banner from '../../components/BannerAboutUs';
import {Body} from './styles'
import DescAboutUs from  '../../components/DescAboutUs'


const AboutUs = () => {
  return (

   <Body>
        <Banner/>
        <DescAboutUs/>
         <br/>
         <br/>
    </Body>
    
  );
};

export default AboutUs;