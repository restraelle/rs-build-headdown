/*
=====================================================
OMEGA19 Page
Product
=====================================================
*/

import React from 'react';
import Template from '../Template';
import Tabs from '../Tabs';
import TabsPage from '../TabsPage';

import ProductImage1 from '../../static/img/gun.jpg';
import FeaturedProducts from '../FeaturedProducts';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Template>
                <div className="Product page product-page">
                    <div className="product-page-breadcrumb">
                        <p>Collection > HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA</p>
                    </div>
                    <div className="desktop-half mobile-whole left product-page-head-half">
                        <img className="full-width" src={ProductImage1}/>
                    </div>
                    <div className="desktop-half mobile-whole right product-page-head-half">
                        <h1>HD15 (OTG Tactical Patrol Package) 14.5 NON-NFA</h1>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <h2>$19.99</h2>

                        <label htmlFor="Quantity">Quantity</label>
                        <input id="Quantity" type="number" min={1} max={100} value={1}/>
                        <div id="AddToCart" className="button">Add to Cart</div>
                    </div>

                    <div className="clearfix"></div>
                    <Tabs>
                        <TabsPage title="Price">
                            <h1>Lorem Ipsum</h1>
                            <p>I really recommend you use odorless thinner or your spouse is gonna run you right out into the yard and you'll be working by yourself. You can do anything your heart can imagine. You don't have to be crazy to do this but it does help.</p>
                            <p>We have no limits to our world. We're only limited by our imagination. We don't really know where this goes - and I'm not sure we really care. We wash our brush with odorless thinner. Just pretend you are a whisper floating across a mountain. Let's have a happy little tree in here. We don't have to be committed. We are just playing here.</p>
                        </TabsPage>
                        <TabsPage title="Specification">
                            <h1>This is the not price price.</h1>
                        </TabsPage>
                        <TabsPage title="Support">
                            <h1>I'm here for you.</h1>
                        </TabsPage>
                        <TabsPage title="Downloads">
                            <h1>Choose a platform</h1>
                            <p>Absolutely no pressure. You are just a whisper floating across a mountain. If what you're doing doesn't make you happy - you're doing the wrong thing. We'll lay all these little funky little things in there. Everybody's different. Trees are different. Let them all be individuals. Everything's not great in life, but we can still find beauty in it. Clouds are free they come and go as they please.</p>
                        </TabsPage>
                    </Tabs>
                    <FeaturedProducts title="Check out our other products!" sample>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </FeaturedProducts>
                </div>
            </Template>
        );
    }
}