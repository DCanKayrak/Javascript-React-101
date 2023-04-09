import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink, Nav, Badge, Button } from 'reactstrap';
import { connect } from 'react-redux';
import cartReducer from '../../redux/reducers/cartReducer';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions';
import alertify from 'alertifyjs';


class CartSummary extends Component {

    removeFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.error(product.name+" removed from cart!");
    }

    renderEmptyCart() {
        return (
            <Nav>
                <NavLink>Sepetiniz Boştur.</NavLink>
            </Nav>
        )
    }

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                <DropdownMenu end>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.name}>
                                <Button onClick={()=>this.removeFromCart(cartItem.product)} color='danger'>Sil</Button>
                                {cartItem.product.name}
                                <Badge color='success'>{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem>Sepete Git!</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart:bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);