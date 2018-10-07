import React from 'react';
import './Dashboard.css';
import { AppNavBar } from './AppNavBar';
import { FooterPage } from './default_footer';
import { DashJumbo } from './DashJumbo';
import { DashList } from './DashList';


import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <AppNavBar />
      <DashJumbo />
        <DashList />
      <FooterPage />
    </div>
  )
};

export default Dashboard;
