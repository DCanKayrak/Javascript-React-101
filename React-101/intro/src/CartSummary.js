import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavLink,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class CartSummary extends Component {
    renderSummary() {
        return (<UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Sepet - {this.props.cart.length}
            </DropdownToggle>
            <DropdownMenu right>
                {


                    this.props.cart.map(cartItem => (

                        <DropdownItem key={cartItem.product.id}>
                            <Badge color='danger' onClick={() => this.props.removeFromCart(cartItem.product)}>X</Badge>
                            {cartItem.product.name}
                            <Badge color="success">{cartItem.quantity}</Badge>
                        </DropdownItem>
                    ))
                }
                <DropdownItem divider />
                <DropdownItem>
                    <Link to="cart">Go To Cart</Link>
                </DropdownItem>
                
            </DropdownMenu>
        </UncontrolledDropdown>)
    }

    renderEmptyCart() {
        return (
            <NavLink>
                <NavItem>Empty Cart</NavItem>
            </NavLink>
        );
    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
            </div>
        )
    }
}
