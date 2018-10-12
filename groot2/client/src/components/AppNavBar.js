import React from 'react';
import './AppNavBar.css'
import {FormsPage} from './FormsPage';
import {Login} from './Login';

export class AppNavBar extends React.Component {
constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
     isOpen: false
   };
 }
toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

handleLink(){
  window.location.href ="http://localhost:3000/";
}


render() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark"  style={{backgroundColor: '#31ba4b'}}>
  <a  href ="http://localhost:3000/" className="navbar-brand text-uppercase font-weight-bold">GROOT</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
    aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav my-lg-0 ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="http://localhost:3000/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" >{<Login/>}</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#" onClick = {<Login/>}></a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
    </ul>

  </div>
</nav>
  );
}
}
