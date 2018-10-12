import React from 'react';
import { AppNavBar } from './AppNavBar'
import './Home.css';
import { WhoWeAre } from './WhoWeAre';
import { FooterPage } from './default_footer.js';
import { Video } from './Video'

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div href ="http://localhost:3000"className="Home">
      <AppNavBar />
      <Video />
      <WhoWeAre />
      <FooterPage />
    </div>
  )
};

export default Home;
