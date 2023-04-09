import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions';
import { connect } from 'react-redux';
import { Button,Table } from 'reactstrap';
import alertify from 'alertifyjs';

class CartDetail extends Component {

    removeFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.error(product.name+" removed from cart!");
    }

  render() {
    return (
      <div>
        <h1>SEPET</h1>

        <Table
        >
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Product Name
              </th>
              <th>
                Unit Price
              </th>
              <th>
                Quantity Per Unit
              </th>
              <th>
                Units In Stock
              </th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.cart.map(cartItem => (
                <tr key={cartItem.product.id}>
                  <th scope="row">
                    {cartItem.product.id}
                  </th>
                  <td>
                    {cartItem.product.name}
                  </td>
                  <td>
                    {cartItem.product.unitPrice}
                  </td>
                  <td>
                    {cartItem.product.quantityPerUnit}
                  </td>
                  <td>
                    {cartItem.product.unitsInStock}
                  </td>
                  <td>{cartItem.quantity}</td>
                  <td><Button onClick={()=>this.removeFromCart(cartItem.product)} color='danger'>Remove From Cart</Button></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
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

export default connect(mapStateToProps,mapDispatchToProps)(CartDetail);