import React, { Component } from "react";
import Header from "../component/header/HeaderFour";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import FooterTwo from "../component/footer/FooterTwo";
import { Link } from "react-router-dom";

import Scrollspy from "react-scrollspy";
import { FiX, FiMenu } from "react-icons/fi";

class error404 extends Component {
  render() {
    return (
      <>
        {/* Start Header Area  */}
        <header className="header-area formobile-menu header--fixed">
          <div className="header-wrapper" id="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <Link to="/">
                  <p
                    style={{
                      color: "white",
                    }}
                  >
                    Tech
                    <span
                      style={{
                        color: "#2DAAC2",
                      }}
                    >
                      GIS
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <div className="header-right">
              <nav className="mainmenunav d-lg-block">
                <Scrollspy
                  className="mainmenu"
                  items={["home", "contact"]}
                  currentClassName="is-current"
                  offset={-200}
                >
                  <li>
                    <Link to="/"> Home </Link>
                  </li>
                  <li>
                    <Link to="/services"> Services </Link>
                  </li>
                  <li>
                    <Link to="/projects"> Projects </Link>
                  </li>
                  <li>
                    <Link to="/contact"> Contact Us </Link>
                  </li>
                </Scrollspy>
              </nav>

              <div className="humberger-menu d-block d-lg-none pl--20">
                <span
                  onClick={this.menuTrigger}
                  className="menutrigger text-white"
                >
                  <FiMenu />
                </span>
              </div>

              <div className="close-menu d-block d-lg-none">
                <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                  <FiX />
                </span>
              </div>
            </div>
          </div>
        </header>
        {/* End Header Area  */}

        {/* Start Page Error  */}
        <div className="error-page-inner bg_color--4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <h1 className="title theme-gradient">404!</h1>
                  <h3 className="sub-title">Page not found</h3>
                  <span>The page you were looking for could not be found.</span>
                  <div className="error-button">
                    <Link className="rn-button-style--2 btn-solid" to="/">
                      Back To Homepage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Error  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        {/* Start Footer */}
        <FooterTwo />
        {/* End Footer */}
      </>
    );
  }
}
export default error404;
