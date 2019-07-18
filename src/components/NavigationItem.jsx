/*
=====================================================
OMEGA19 Component
Navigation Item
=====================================================
*/

import React from 'react';

export default class NavigationItem extends React.Component {
  constructor(props) {
    super(props);
  }
  didComponentMount() {
    
  }
  render() {
    return (
      <a href={this.props.link}>
        <li>{this.props.title}</li>
      </a>
    );
  }
}