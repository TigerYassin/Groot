import React, { Component } from 'react';
import { AppNavBar } from './components/AppNavBar'
import { Jumbo } from './components/Jumbo'
import './App.css';
import { FooterPage } from './components/default_footer.js';
import { Video } from './components/Video'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Video />
      </div>
    );
  }
}

export default App;
