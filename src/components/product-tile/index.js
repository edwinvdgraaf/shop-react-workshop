import React, { Component } from 'react';

function getPriceDecimals(price) {
  return price.split(",")[0];
}

function getPriceCents(price) {
  return price.split(",")[1];
}

class ProductTile extends Component {
  render() {
    const { title, globalId, imageUrl, price, subTitle } = this.props;
    return (
      <div className="product">
        <div className="product__image">
          <img src={ imageUrl } alt={ title } />
        </div>
        <div className="product__party">{ subTitle }</div>
        <div className="product__title">{ title }</div>
        <div className="product__price">{ getPriceDecimals(price) },<sup className="product__price product__price--fraction">{ getPriceCents(price) }</sup></div>
        <button>In winkelwagentje</button>
      </div>
    );
  }
}

export default ProductTile;
