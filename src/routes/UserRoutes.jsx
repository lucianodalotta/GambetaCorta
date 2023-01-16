import React from 'react';
import { Route, RouteProps, Redirect, useLocation } from 'react-router-dom';

import TournamentContainer from '../app/containers/TournamentContainer';
import HomeContainer from '../app/containers/HomeContainer';
import AboutUs from '../app/pages/AboutUs';
import AboutUsContainer from '../app/containers/AboutUsContainer';


const UserRoutes = () => {
  return [
    <Route path="/" element={<HomeContainer />} />,
    <Route path="/Torneo/:id" element={<TournamentContainer />} />,
    <Route path="/Aboutus" element={<AboutUsContainer />} />,
  ]
};
export default UserRoutes;
