import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './AppNavBar.css'

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
render() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark"  style={{backgroundColor: '#21d192'}}>
  <span className="navbar-brand text-uppercase font-weight-bold">GROOT</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
    aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav my-lg-0 ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">SignUp</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
    </ul>
    
  </div>
</nav>
  );
}
}
