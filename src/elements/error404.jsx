import React, { Component } from "react";
import { Link } from "react-router-dom";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import ErrorHeader from "../component/header/ErrorHeader";
import MainFooter from "../component/footer/MainFooter";

class error404 extends Component {
  render() {
    return (
      <>
        <ErrorHeader />
        {/* Start Page Error  */}
        <div className="error-page-inner bg_color--4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <h1 className="title theme-gradient">404!</h1>
                  <h3 className="sub-title">Page not found</h3>
                  <span>The page you are looking does not exist.</span>
                  <div className="error-button">
                    <Link className="rn-button-style--2 btn-solid" to="/">
                      Back To TechGIS
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

        <MainFooter />
      </>
    );
  }
}
// into index
export default error404;
