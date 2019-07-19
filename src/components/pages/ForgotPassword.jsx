/*
=====================================================
OMEGA19 Page
Login
=====================================================
*/

import React from "react";
import Template from "../Template";
import { Link } from "react-router-dom";

/* STATIC RESOURCES */
import logo from "../../static/img/logo.png";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      email: ""
    };
  }

  componentDidMount() {
    document.body.classList.add("signup-page");
  }

  componentWillUnmount() {
    document.body.classList.remove("signup-page");
  }

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

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
                        <h3 className="form-header">Reset Password</h3>
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
                        <Link to={`/`}>
                          <div
                            id="loginBtn"
                            className="button expanded cta-main"
                          >
                            Request Request
                          </div>
                        </Link>
                      </div>
                      <div style={styles} className="large-12 cell">
                        <Link to={`/login`}>
                          <div id="resetBtn">Log In</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </div>
            <div className="large-6 cell content-wrap image-container login-image">
              <img
                src={logo}
                alt="Reset your password for Head Down Firearms"
              />
            </div>
          </div>
        </div>
      </Template>
    );
  }
}

export default ForgotPassword;
