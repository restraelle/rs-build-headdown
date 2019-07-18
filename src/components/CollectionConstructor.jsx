/*
=====================================================
OMEGA19 Object
Collection Constructor
=====================================================
*/

import React from 'react';
import ProductItem from './ProductItem';
import ProductImage1 from '../static/img/gun.jpg';

export default class HeroSlider extends React.Component {
  constructor(props) {
    super(props);
  }
  didComponentMount() {

  }
  filterChanged() {
    console.log(Math.random());
  }
  render() {
    return (
        <div className="CollectionConstructor collection page">
            <div className="desktop-quarter left">
                <h1>Collection</h1>
                <label htmlFor="collection-filter">Sort By</label>
                <select id="collection-filter" onchange={this.filterChanged()} className="collection-filter-select">
                    <option>Best selling</option>
                    <option>Best rating</option>
                    <option>A-Z</option>
                    <option>Z-A</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Date: Newest first</option>
                    <option>Date: Oldest first</option>
                </select>
            </div>
            <div className="desktop-three-quarters right product-item-container">
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
                <ProductItem collection title="HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA" price="$75.99" image={ProductImage1} link="/product/test"/>
            </div>
            <div className="clearfix"></div>
        </div>
    );
  }
}