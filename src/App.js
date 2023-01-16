import React from 'react';
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'
import { BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {AdminRoutes()}
        {UserRoutes()}
      </Routes>
    </Router>
  );
}

export default App;
