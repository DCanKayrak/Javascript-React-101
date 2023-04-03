import React, { Component } from 'react'
import Navi from './Navi'
import ProductList from './ProductList';
import Category from './CategoryList';
import CategoryList from './CategoryList';
import { Container, Row, Col } from 'reactstrap';


export default class App extends Component {

  state = {
    currentCategory: "",
    products: []
  }

  componentDidMount = () => {
    this.getProducts()
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.name })
    this.getProducts(category.id)
  }

  getProducts = categoryId => {

    let url = "http://localhost:3000/products"

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList products={this.state.products} info={productInfo} currentCategory={this.state.currentCategory} />
            </Col>
          </Row>
        </Container>


      </div>
    );
  }
}
