import React, { useState, Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

export default class Navi extends Component {

  render() {
    return (
      <div>
        <Navbar color='light' light expand="md">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler
          />
          <Collapse
            navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>
                  Component
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
            </Nav>
            <NavbarText><Link to="/form1">Log In</Link></NavbarText>
          </Collapse>
        </Navbar>
      </div>

      
    );
  }
}