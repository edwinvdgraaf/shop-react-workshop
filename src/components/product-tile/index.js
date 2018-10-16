import React, { Component } from 'react';

class ProductTile extends Component {
  render() {
      const p = this.props.product
      const [euro,cent] = p.price.split(",")
    return (
      <div className="product">
        <div className="product__image">
          <img src={p.imageUrl} alt={p.title} />
        </div>
        <div className="product__party">{p.party}</div>
        <div className="product__title">{p.title}</div>
        <div className="product__price">{euro},<sup className="product__price product__price--fraction">{cent}</sup></div>
        <button>In winkelwagentje</button>
      </div>
    );
  }
}

export default ProductTile;
