import React from 'react';
import Banner from '../../components/Banner';
import TextBox from '../../components/TextBox'
import ItemList from '../../components/ItemList'
import Contact from '../../components/Contact'
import {Body} from './styles'

const Home = () => {
  return (
    <Body>
      <Banner/>
      <TextBox/>
      <ItemList/>
      <Contact/>
    </Body>
    

  );
};

export default Home;
