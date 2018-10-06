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
    <div>
      <Navbar color="dark" expand="lg" fixed="top" transaprent scrolling toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand href="/">Groot</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
}
