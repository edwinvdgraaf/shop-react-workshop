import React, { Component } from 'react';
import Header from '../../components/header';
import Basket from '../../components/basket';
import ProductTile from '../../components/product-tile';

import mockedProducts from './products.json';

class App extends Component {

  constructor() {
    super();

    this.state = {
      products: mockedProducts,
      basket: []
    }
  }

  render() {
    const { products, basket } = this.state;

    return (
      <div className="app">
        <Header />
        <div className="container main">
          <ProductTile />
        </div>
        <Basket />
      </div>
    );
  }
}

export default App;
