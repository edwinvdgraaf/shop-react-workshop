import { shallow, mount } from 'enzyme';
import React from 'react';
import App from './containers/app';

const ENABLE_EXERCISE_1 = false;
const ENABLE_EXERCISE_2 = false;
const ENABLE_EXERCISE_3 = false;

import mockProducts from './containers/app/products.json';

it('jest wants atleast one test', () => {});

if (ENABLE_EXERCISE_1) {
  it('renders all products', () => {
    mockProducts.forEach(p => {
      const [price, fraction] = p.price.split(',');

      expect(mount(<App />).contains(
        <div className="product">
          <div className="product__image">
            <img src={ p.imageUrl } alt={ p.title } />
          </div>
          <div className="product__party">{ p.subTitle }</div>
          <div className="product__title">{ p.title }</div>
          <div className="product__price"> { price },<sup className="product__price product__price--fraction">{ fraction }</sup></div>
          <button>In winkelwagentje</button>
        </div>
      )).toBe(true);
    });
  });
}

if (ENABLE_EXERCISE_2) {
  describe('add product to basket', () => {
    it('starts with an empty basket', () => {
      expect(mount(<App />).find('.product--shopping-cart').exists()).toBe(false);
    });

    it('disables add to cart button when clicked', () => {
      const firstProductButton = mount(<App />).find('.main').find('.product').find('button').first();
      firstProductButton.simulate('click');
      expect(firstProductButton.getDOMNode().disabled).toBe(true);
    });

    it('adds product to basket when clicked', () => {
      const app = mount(<App />);
      app.find('.main').find('.product').first().find('button').simulate('click');
      expect(app.find('.product--shopping-cart').exists()).toBe(true);
    });
  });
}

if (ENABLE_EXERCISE_3) {
  it('removes product from basket', () => {
    const app = mount(<App basket={[1]} />);

    app.find('.product--shopping-cart button').first().simulate('click');

    expect(app.find('.main .product button').first().getDOMNode().disabled).toBe(false);
    expect(app.find('.product--shopping-cart').exists()).toBe(false);
  });
}
