import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import HomeContainer from '../admin/containers/HomeContainer';
import TournamentContainer from '../admin/containers/TournamentContainer';
import MatchContainer from '../admin/containers/MatchContainer';
import TeamsContainer from '../admin/containers/TeamsContainer';
import LoginContainer from '../admin/containers/LoginContainer';


const AdminRoutes = () => {
  const [isAuthenticated] = useState(localStorage.getItem('user'));

  return (
    <>
    <Route path="/_login" element={<LoginContainer />} />,
      <Route
        path="/_admin/teams"
        element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <TeamsContainer />
        </PrivateRoute>
        }
        />
        <Route
        path="/_admin/matches/:id"
        element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <MatchContainer />
        </PrivateRoute>
        }
        />
        <Route
        path="/_admin/tournament/:id"
        element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <TournamentContainer />
        </PrivateRoute>
        }
        />
        <Route
        path="/_admin"
        element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <HomeContainer />
        </PrivateRoute>
        }
        />    
   </>
  )
};
export default AdminRoutes;
