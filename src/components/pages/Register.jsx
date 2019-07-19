/*
=====================================================
OMEGA19 Page
Register
=====================================================
*/

import React from "react";
import Template from "../Template";
import { Link } from "react-router-dom";

/* STATIC RESOURCES */
import logo from "../../static/img/logo.png";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    document.body.classList.add("signup-page");
  }

  componentWillUnmount() {
    document.body.classList.remove("signup-page");
  }

  render() {
    let styles = {
      textAlign: "right"
    };

    return (
      <Template>
        <div className="grid-container page-content signup-wrapper">
          <div className="grid-x">
            <div className="small-12 large-6 cell content-wrap">
              <section className="signup login">
                <form>
                  <div className="grid-container signup-grid">
                    <div className="grid-x grid-padding-x">
                      <div className="large-12 cell">
                        <h3 className="form-header">Create Account</h3>
                      </div>
                      <div className="large-12 cell">
                        <input
                          type="text"
                          id="first_name"
                          name="first_name"
                          placeholder="First Name"
                          required
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="large-12 cell">
                        <input
                          type="text"
                          id="last_name"
                          name="last_name"
                          placeholder="Last Name"
                          required
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="large-12 cell">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email address"
                          required
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="large-12 cell">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Password"
                          required
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="large-12 cell">
                        <Link to={`/`}>
                          <div
                            id="loginBtn"
                            className="button expanded cta-main"
                          >
                            Create
                          </div>
                        </Link>
                      </div>
                      <div style={styles} className="large-12 cell">
                        <Link to={`/`}>
                          <div id="resetBtn">Return to Store</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </div>
            <div className="large-6 cell content-wrap image-container login-image">
              <img src={logo} alt="Log into Head Down Firearms" />
            </div>
          </div>
        </div>
      </Template>
    );
  }
}
