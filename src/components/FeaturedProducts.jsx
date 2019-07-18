/*
=====================================================
OMEGA19 Object
Featured Products
=====================================================
*/

import React from 'react';
import ProductItem from './ProductItem';
import ProductImage1 from '../static/img/gun.jpg';

export default class FeaturedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productGlobalWidth: "mobile-whole",
      productWidth: "desktop-quarter"
    };
  }

  renderSampleProducts() {
    let count = React.Children.count(this.props.children);
    if(count == 1) {
      this.state.productWidth = "desktop-whole";
    } else if(count == 2) {
      this.state.productWidth = "desktop-half";
    } else if(count == 3) {
      this.state.productWidth = "desktop-third";
    } else if(count > 3) {
      this.state.productWidth = "desktop-quarter";
    }

    let ret = [];
    let classes = this.state.productGlobalWidth + " " + this.state.productWidth;
    let sampleProduct = (
        <ProductItem className={classes} title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test">
        </ProductItem>
    );
    for(var i = 0; i < count; i++) {
      ret.push(sampleProduct);
    }

    return ret;
  }

  renderProducts() {
    if(this.props.sample) {
      return this.renderSampleProducts();
    } else if(this.props.children) {
      return this.props.children;
    }
  }

  didComponentMount() {

  }

  render() {
    return (
        <div className="FeaturedProducts">
          <div className="section product-section">
            <h1 className="product-section-title text-center">{this.props.title ? this.props.title : "Untitled"}</h1>
            <div className={this.props.center ? "product-item-container product-item-container__center" : "product-item-container"}>
              {this.renderProducts()}
            </div>
        </div>
      </div>    
    );
  }
}