/*
=====================================================
OMEGA19 Page
Collection
=====================================================
*/

import React from 'react';
import Template from '../Template';
import CollectionConstructor from '../CollectionConstructor';

export default class Collection extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { collectionURI } = this.props.match.params;
        console.log(collectionURI);
    }
    render() {
        return (
            <Template>
                <CollectionConstructor/>
            </Template>
        );
    }
}