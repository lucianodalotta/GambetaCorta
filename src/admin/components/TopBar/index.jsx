import React from 'react';
import {Link} from 'react-router-dom'

import {TopNav, TopNavLink} from './styles'

const HomeView = () => {

  return (
    <TopNav class="topnav">
      <TopNavLink class="active" href="#home"><Link to='/_admin'>Torneos</Link></TopNavLink>
      <TopNavLink href="#news"><Link to='/_admin/teams'>Equipos</Link></TopNavLink>
    </TopNav>


  );
};

export default HomeView;