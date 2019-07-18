/*
=====================================================
OMEGA19 Page
Checkout
=====================================================
*/

import React from 'react';
import Template from '../Template';

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Template>
                <div className="Checkout page">
                    <form>
                        <label for="fname">First Name</label>
                        <input id="fname" type="text"></input>
                        <br/>

                        <label for="lname">Last Name</label>
                        <input id="lname" type="text"></input>
                        <br/>


                        <label for="lname">Address</label>
                        <input id="address" type="text"></input>
                        <br/>


                        <label for="lname">City</label>
                        <input id="city" type="text"></input>
                        <br/>


                        <label for="lname">State</label>
                        <input id="region" type="text"></input>
                        <br/>


                        <label for="lname">Zip Code</label>
                        <input id="zipcode" type="text"></input>
                        <br/>
                    </form>
                </div>
            </Template>
        );
    }
}