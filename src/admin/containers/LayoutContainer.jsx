import React from 'react';
import TopBar from '../components/TopBar';

const HomeContainer = ({children}) => {
  return (
        <div>
        <TopBar />
          <div>{children}</div>
        </div>
  );
};

export default HomeContainer;
