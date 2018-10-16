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

    this.addToBasket = this.addToBasket.bind(this);
  }

  addToBasket(productId) {
    this.setState({
      basket: this.state.basket.concat(productId)
    });
  }

  render() {
    const { products, basket } = this.state;

    return (
      <div className="page-wrapper">
        <Header />
        <div className="main">
          { products.map(product => <ProductTile 
            key={product.globalId} 
            {...product}
            addToBasket={ this.addToBasket } />) }
        </div>
        <Basket basket={ basket } products={ products } />
        <div className="footer">
          <div className="flex-center">Footer</div>
        </div>
      </div>
    );
  }
}

export default App;
