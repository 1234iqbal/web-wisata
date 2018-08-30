import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
export default class Menu extends Component {
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
        <Navbar color="blue" expand="md">
          <NavbarBrand href="/" className="logo">
            <img
              src="http://eazyholidaytour.com/wp-content/uploads/2017/07/LOGO-EAZY-HOLIDAY.jpg"
              width="200px"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto nav" navbar>
              <NavItem>
                <NavLink href="/">HOME</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  TOURE
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>INDONESIA</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/Tiket">TIKET</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/About">ABOUT US</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
