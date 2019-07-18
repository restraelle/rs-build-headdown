/*
=====================================================
OMEGA19 Page
Home
=====================================================
*/

/* COMPONENTS */
import React from 'react';
import Template from '../Template';
import CollectionSpotlight from '../CollectionSpotlight';
import CollectionSpotlightItem from '../CollectionSpotlightItem';
import HeroSlider from '../HeroSlider';
import HeroBasic from '../HeroBasic';
import HeroGoogleMaps from '../HeroGoogleMaps';
import FeaturedProducts from '../FeaturedProducts';
import ProductItem from '../ProductItem';
import Testimonials from '../Testimonials';
import TestimonialsItem from '../TestimonialsItem';


/* STATIC RESOURCES */
import Logo from '../../static/img/logo.png';
import Icon from '../../static/img/rogueshops.png';
import Hero1 from '../../static/img/hero-1.jpg';
import Hero2 from '../../static/img/hero-2.jpg';
import ProductImage1 from '../../static/img/gun.jpg';
import CollectionSpotlightItem1 from '../../static/img/collection-1.jpg';
import CollectionSpotlightItem2 from '../../static/img/collection-2.jpg';
import CollectionSpotlightItem3 from '../../static/img/collection-3.jpg';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  didComponentMount() {
    
  }
  render() {
    return (
      <Template index>
        <HeroBasic image={Hero2} heading="Head Down Firearms" subheading="Est. 2013" buttonText="shop now" buttonLink="http://www.google.com/"/>
        
        <CollectionSpotlight>
          <CollectionSpotlightItem title="Rifle Parts" image={CollectionSpotlightItem2} center/>
          <CollectionSpotlightItem title="Skins" image={CollectionSpotlightItem3}/>
          <CollectionSpotlightItem title="Sights" image={CollectionSpotlightItem1}/>
        </CollectionSpotlight>

        <FeaturedProducts title="Best Sellers" center sample>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </FeaturedProducts>

        <HeroBasic short image={Hero1} heading="Built with React" subheading="Super customizable, yet lightweight."/>
      </Template>
    );
  }
}