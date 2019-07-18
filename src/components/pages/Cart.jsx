/*
=====================================================
OMEGA19 Page
Cart
=====================================================
*/

import React from 'react';
import Template from '../Template';

import ProductImage1 from '../../static/img/gun.jpg';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Template>
                <div className="cart page">
                    <h1>Cart</h1>
                    <table className="cart-table">
                        <thead>
                            <td></td>
                            <td>Item</td>
                            <td>Quantity</td>
                            <td>Price</td>
                        </thead>
                        <tr>
                            <td className="cart-table-image">
                                <img src={ProductImage1}/>
                            </td>
                            <td className="cart-table-title">HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA</td>
                            <td className="cart-table-quantity">1</td>
                            <td className="cart-table-price">$19.99</td>
                        </tr>
                    </table>
                    <div className="desktop-quarter right text-align-right">
                        <h4>Shipping: $20.00</h4>
                        <h4>Subtotal: $40.00</h4>
                        <h2>Grand Total: $60.00</h2>
                        <div className="button button-contrast">Checkout</div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </Template>
        );
    }
}