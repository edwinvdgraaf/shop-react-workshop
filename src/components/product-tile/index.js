import React, { Component } from 'react';

class ProductTile extends Component {
  render() {
    return (
      <div className="product">
        <div className="product__image">
          <img src="//s.s-bol.com/imgbase0/imagebase3/regular/FC/5/6/7/6/9200000075776765.jpg" alt="Samsung UE55MU7000 - 4K tv" />
        </div>
        <div className="product__party">Samsung</div>
        <div className="product__title">Samsung UE55MU7000 - 4K tv</div>
        <div className="product__price">95,<sup className="product__price product__price--fraction">99</sup></div>
        <button>In winkelwagentje</button>
      </div>
    );
  }
}

export default ProductTile;
