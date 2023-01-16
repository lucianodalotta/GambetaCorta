import React, { useState, useEffect } from 'react'
import Topbar from '../components/TopBar'

import {PageContainer} from '../../commons/styles/styles'
import Footer from '../components/Footer/Footer';


import { GetTournaments } from '../../commons/services/tournament.services'

const LayoutContainer = ({children}) => {
  
  const [searchedTournaments, setSearchedTournaments] = useState([]);

  const searchTournaments = async () => {
    const fetchedTournaments = await GetTournaments();
    setSearchedTournaments(fetchedTournaments)
  };

  useEffect(() => {
    searchTournaments();
  }, []);
  
  return (
        <>
          <Topbar/>
          <PageContainer>
            {children}
          </PageContainer>
          <Footer />
        </>
  );
};

export default LayoutContainer;
