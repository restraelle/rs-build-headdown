/*
=====================================================
OMEGA19 Core
Table of Contents
=====================================================
*/

/* COMPONENTS */
import React from 'react';
import { Route } from "react-router-dom";

/* PAGES */
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Collection from './components/pages/Collection';
import Product from './components/pages/Product';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

export default function TOC() {
    return (
        <div>
            <Route path="/" exact component={Home}/>
            <Route path="/collection/:collectionURI" exact component={Collection}/>
            <Route path="/product/:productURI" exact component={Product}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/checkout" exact component={Checkout}/>
        </div>
    );
}