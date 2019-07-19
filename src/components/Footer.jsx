/*
=====================================================
OMEGA19 Object
Footer
=====================================================
*/

import React from "react";

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
            Phone: <span className="italic">770.485.7015</span>
          </p>
          <p>
            E-mail: <span className="italic">hello@bitmotive.com</span>
          </p>
        </div>
        <div className="footer-chunk desktop-third mobile-whole footer-links">
          <a href="">Blog</a>
          <a href="">Shop</a>
          <a href="">Support</a>
          <a href="">About</a>
        </div>
        <div className="footer-chunk desktop-third mobile-whole">
          <h2>Follow Us</h2>
          <ul className="footer-social-links">
            <li>
              <a className="footer-social-facebook" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a className="footer-social-twitter" href="">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a className="footer-social-instagram" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a className="footer-social-youtube" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a className="footer-social-snapchat" href="">
                <i className="fab fa-snapchat"></i>
              </a>
            </li>
            <li>
              <a className="footer-social-pinterest" href="">
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
