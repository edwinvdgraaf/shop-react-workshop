import React, { Component } from 'react';
import Header from '../../components/header';
import Basket from '../../components/basket';
import ProductTile from '../../components/product-tile';

import mockedProducts from './products.json';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      products: mockedProducts,
      basket: [],
    };
  }

  render() {
    const { products, basket } = this.state;

    return (
      <div className="page-wrapper">
        <Header />
        <div className="main">
          <ProductTile />
        </div>
        <Basket />
        <div className="footer">
          <div className="flex-center">Footer</div>
        </div>
      </div>
    );
  }
}

export default App;
