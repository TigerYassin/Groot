import React from 'react';
import { AppNavBar } from './AppNavBar'
import './Home.css';
import { FooterPage } from './default_footer.js';
import { Video } from './Video'

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="Home">
      <AppNavBar />
      <Video />
      <FooterPage />
    </div>
  )
};

export default Home;
