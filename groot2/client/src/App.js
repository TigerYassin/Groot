import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { AppNavBar } from './components/AppNavBar'
// import './App.css';
// import { FooterPage } from './components/default_footer.js';
// import { Video } from './components/Video'
//
// import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path="/" component={Home} exact/>
        <Route path="/dashboard" component={Dashboard}/>
      </div>
      </BrowserRouter>

      // <div className="App">
      // <AppNavBar />
      // <Video />
      // <FooterPage />
      // </div>
    );
  }
}

export default App;
