import React, {Component} from 'react';

class Basket extends Component {
    render() {
        const itemsInBasket = this.props.products.map(product =>
            <BTile product={product} removeFromBasket={this.props.removeFromBasket}/>)

        return <div className="shopping-cart">
            {itemsInBasket}
        </div>
    }
}

export default Basket;

class BTile extends Component {
    render() {
        const p = this.props.product;
        const [euro, cent] = p.price.split(",");
        return (
            <div>
                <div className="shopping-cart__title">Winkelmandje:</div>
                < div className="product product--shopping-cart">
                    < div className="product__party"> {p.subTitle}</div>
                    <div className="product__title"> {p.title}</div>
                    <div className="product__price"> {euro}, <sup
                        className="product__price product__price--fraction">{cent}</sup></div>
                    <button onClick={this.removeFromShoppingCart.bind(this)}>Verwijderen</button>
                </div>
            </div>
        );
    }

    removeFromShoppingCart() {
        this.props.removeFromBasket(this.props.product);
    }
}
