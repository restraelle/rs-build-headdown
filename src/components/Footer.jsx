/*
=====================================================
OMEGA19 Object
Footer
=====================================================
*/

import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer">
        <div className="footer-chunk desktop-third mobile-whole">
          <img src={this.props.image} className="full-width footer-logo" />
          <b>
            <h4>Contact Us</h4>
          </b>
          <p>
            Phone:{" "}
            <span className="italic">
              <a href="tel:7704857015">770.485.7015</a>
            </span>
          </p>
          <p>
            E-mail:{" "}
            <span className="italic">
              <a href="mailto:HDSales@hdfirearms.com">HDSales@hdfirearms.com</a>
            </span>
          </p>
        </div>
        <div className="footer-chunk desktop-third mobile-whole footer-links">
          <Link to={`/`}>Shop</Link>
          <Link to={`/about`}>About</Link>
          <Link to={`/contact`}>Contact</Link>
          <Link to={`/faq`}>FAQ</Link>
          <Link to={`/warranty`}>Warranty</Link>
          <Link to={`/privacy`}>Privacy</Link>
          <Link to={`/shipping-returns`}>Shipping and Returns</Link>
          <Link to={`/cerakote`}>Cerakote</Link>
        </div>
        <div className="footer-chunk desktop-third mobile-whole">
          <h2>Follow Us</h2>
          <ul className="footer-social-links">
            <li>
              <a
                className="footer-social-facebook"
                href="https://www.facebook.com/headdownarms/"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                className="footer-social-twitter"
                href="https://twitter.com/headdownarms"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                className="footer-social-instagram"
                href="https://www.instagram.com/headdownarms/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                className="footer-social-linkedin"
                href="https://www.linkedin.com/company/headdownarms/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="footer-social-pinterest"
                href="https://www.pinterest.com/headdownarms/"
                target="_blank"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}
