import React, { Component } from 'react';
import { AppNavBar } from './components/AppNavBar'
import './App.css';
import { FooterPage } from './components/default_footer.js';
import { Video } from './components/Video'

import 'bootstrap/dist/css/bootstrap.min.css';
import WhoWeAre from './components/WhoWeAre';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavBar />
      <Video />
      <WhoWeAre />
      <FooterPage />
      </div>
    );
  }
}

export default App;
