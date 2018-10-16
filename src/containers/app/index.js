import React, {Component} from 'react';
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
        const {products, basket} = this.state;

        const productElements = products.map(product => <ProductTile
            key={product.globalId}
            product={product}
            disabledBtn={basket.includes(product)}
            addToBasket={this.addToBasket.bind(this)}
        />)

        return (
            <div className="page-wrapper">
                <Header/>
                <div className="main">
                    {productElements}
                </div>
                <Basket products={basket} removeFromBasket={this.removeFromBasket.bind(this)}/>
                <div className="footer">
                    <div className="flex-center">Footer</div>
                </div>
            </div>
        );
    }

    addToBasket(product) {
        this.setState((state) => {
            const tempBasket = state.basket.slice(0);
            tempBasket.push(product);
            return {basket: tempBasket}
        })
    }

    removeFromBasket(product) {
        this.setState((state) => {
            const tempBasket = state.basket.slice(0);
            delete tempBasket[tempBasket.indexOf(product)]
            return {basket: tempBasket}
        })
    }
}

export default App;
