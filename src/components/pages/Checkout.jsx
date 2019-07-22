/*
=====================================================
OMEGA19 Page
Checkout
=====================================================
*/

import React from "react";
import Template from "../Template";

export default class Checkout extends React.Component {
  componentDidMount() {
    document.body.classList.add("checkout-page");
  }

  componentWillUnmount() {
    document.body.classList.remove("checkout-page");
  }

  render() {
    return (
      <Template>
        <div className="main-content">
          <div className="grid-x grid-padding-x">
            <div className="small-12 large-6 cell main-wrapper customer-info-wrapper">
              <div className="main-side">
                <h1 className="text-center">Head Down Firearms</h1>

                <form className="grid-x grid-padding-x" id="customer-info">
                  <div className="small-12 large-12 cell">
                    <h2>Billing address</h2>
                  </div>

                  <div className="small-12 large-6 cell">
                    <input type="text" placeholder="First Name" />
                  </div>

                  <div className="small-12 large-6 cell">
                    <input type="text" placeholder="Last Name" />
                  </div>

                  <div className="small-12 large-12 cell">
                    <input type="text" placeholder="Address" />
                  </div>

                  <div className="small-12 large-12 cell">
                    <input
                      type="text"
                      placeholder="Apartment, suite, etc. (optional)"
                    />
                  </div>

                  <div className="small-12 large-12 cell">
                    <input type="text" placeholder="City" />
                  </div>

                  <div className="small-12 large-4 cell">
                    <input type="text" placeholder="Country" />
                  </div>

                  <div className="small-12 large-4 cell">
                    <input type="text" placeholder="State" />
                  </div>

                  <div className="small-12 large-4 cell">
                    <input type="text" placeholder="Zip" />
                  </div>

                  <div className="small-12 large-12 cell">
                    <input type="text" placeholder="Phone (optional)" />
                  </div>

                  <div className="small-12 large-12 cell last-row">
                    <a href="/cart" className="return-to-cart">
                      <i className="fas fa-chevron-left" /> &nbsp; Return to
                      cart
                    </a>

                    <a href="" className="button">
                      Continue to shipping method
                    </a>
                  </div>
                </form>

                <form className="grid-x grid-padding-x" id="shipping-info">
                  <div className="small-12 large-12 cell">
                    <h2>Shipping address</h2>
                  </div>

                  <div className="small-12 large-6 cell">
                    <input type="text" placeholder="First Name" />
                  </div>

                  <div className="small-12 large-6 cell">
                    <input type="text" placeholder="Last Name" />
                  </div>

                  <div className="small-12 large-12 cell">
                    <input type="text" placeholder="Address" />
                  </div>

                  <div className="small-12 large-12 cell">
                    <input
                      type="text"
                      placeholder="Apartment, suite, etc. (optional)"
                    />
                  </div>

                  <div className="small-12 large-12 cell">
                    <input type="text" placeholder="City" />
                  </div>

                  <div className="small-12 large-4 cell">
                    <input type="text" placeholder="Country" />
                  </div>

                  <div className="small-12 large-4 cell">
                    <input type="text" placeholder="State" />
                  </div>

                  <div className="small-12 large-4 cell">
                    <input type="text" placeholder="Zip" />
                  </div>

                  <div className="small-12 large-12 cell">
                    <input type="text" placeholder="Phone (optional)" />
                  </div>

                  <div className="small-12 large-12 cell last-row">
                    <a href="/cart" className="return-to-cart">
                      <i className="fas fa-chevron-left" /> &nbsp; Return to
                      customer information
                    </a>

                    <a href="" className="button">
                      Continue to payment method
                    </a>
                  </div>
                </form>

                <form className="grid-x grid-padding-x" id="payment-info">
                  <div className="small-12 large-12 cell">
                    <h2>Payment</h2>
                    <p>All transactions are secure and encrypted.</p>
                  </div>

                  <div className="small-12 large-12 cell">
                    <input type="text" placeholder="Card number" />
                  </div>

                  <div className="small-12 large-12 cell">
                    <input type="text" placeholder="Name on card" />
                  </div>

                  <div className="small-12 large-6 cell">
                    <input
                      type="text"
                      placeholder="Expiration date (MM / YY)"
                    />
                  </div>

                  <div className="small-12 large-6 cell">
                    <input type="text" placeholder="Security code" />
                  </div>

                  <div className="small-12 large-12 cell last-row">
                    <a href="/cart" className="return-to-cart">
                      <i className="fas fa-chevron-left" /> &nbsp; Return to
                      shipping method
                    </a>

                    <a href="" className="button">
                      Complete order
                    </a>
                  </div>
                </form>
              </div>
            </div>

            {/* <!-- product half --> */}
            <div className="small-12 large-6 cell sidebar main-wrapper">
              <div className="sidebar-wrapper">
                <div className="products">
                  <div className="product-item text-center">
                    <div className="product-thumbnail">
                      <img
                        src="/static/img/product-images/product.jpg"
                        alt="Product"
                      />
                    </div>
                    <div className="product-name">
                      <p>Product</p>
                    </div>
                    <div className="product-price">
                      <p>$ 147.14</p>
                    </div>
                  </div>
                </div>

                <div className="discount-section">
                  <input type="text" placeholder="Gift card or discount code" />
                  <a href="" className="button discount-button disabled">
                    Apply
                  </a>
                </div>

                <div className="subtotal-section">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span>$ 147.14</span>
                  </div>
                  <div className="shipping">
                    <span>Shipping</span>
                    <span>$ 14.14</span>
                  </div>
                </div>

                <div className="total-section">
                  <div className="total-wrapper">
                    <span>Total</span>
                    <span className="total">
                      <span id="currency">USD</span>
                      <span id="total">$ 168.28</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Template>
    );
  }
}
