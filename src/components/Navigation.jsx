/*
=====================================================
OMEGA19 Object
Navigation Bar
=====================================================
*/

import React from 'react';

/* STATIC RESOURCES */
import logo from '../static/img/logo.png';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solidStyling: {
        position: 'relative'
      },
      searchBar: this.props.disableSearchBar ? false : true,
      stylingHeader: (this.props.solid ? "header header-solid" : "header") + (this.props.sticky ? " sticky" : ""),
      showMenu: false
    }
    if(this.props.searchBar == false) {
      this.setState({
        searchBar: false
      });
    }
  }
  componentDidMount() {
    
  }

  handleMenuClick() {
    const currentStatus = this.state.showMenu;
    this.setState({
      showMenu: !currentStatus
    });
  }

  renderSearchBar() {
    if(this.state.searchBar) {
      return (
        <div className="search-bar">
          <input placeholder="Search..." type="text"></input>
          <i class="fas fa-search"></i>
        </div>
      );
    }
  }

  renderMobileMenu() {
    if(this.state.showMenu) {
      return (
        <div className="nav-mobile-menu">
          <ul>
            {this.props.children}
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="Navigation">
        <div className="nav-desktop">
          <div className={this.props.sticky ? "color-bar sticky" : "color-bar"}></div>
          <div className={this.state.stylingHeader}>
              <a href="/">
                  <img id="Logo" src={logo}/>
              </a>
              <div className="nav-bar left">
                  {this.renderSearchBar()}
                  <ul>
                      {this.props.children}
                  </ul>
              </div>  
              <div className="nav-bar right">
                  <ul>
                      <a><li>Sign Up</li></a>
                      <a><li>Login</li></a>
                      <a href="/cart"><li><i className="fas fa-shopping-cart"></i></li></a>
                  </ul>
              </div>  
          </div>
        </div>
        
        <div className={"nav-mobile" + (this.props.solid ? " nav-mobile-solid" : "")}>
          <div className={this.props.sticky ? "color-bar sticky" : "color-bar"}></div>
          <div className="nav-mobile-content">
            <a href="/">
              <img id="Logo" src={logo}/>
            </a>
            <i onClick={() => this.handleMenuClick()} className={"fas fa-bars nav-hamburger" + (this.state.showMenu ? " nav-hamburger-active" : "")}></i>
          </div>
          {this.renderMobileMenu()}
        </div>
      </div>
    );
  } 
}