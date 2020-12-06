import React from "react";
import TeamOne from "./team/TeamOne";
import TeamTwo from "./team/TeamTwo";

import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";

import { Link } from "react-router-dom";

import Scrollspy from "react-scrollspy";
import { FiX, FiMenu } from "react-icons/fi";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    // this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    // this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  render() {
    return (
      <>
        <PageHelmet pageTitle="Team" />
        {/* Start Header Area  */}
        {/* Start Header Area  */}
        <header className="header-area formobile-menu header--fixed ">
          <div className="header-wrapper" id="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <Link to="/">
                  <p
                    style={{
                      color: "white",
                    }}
                  >
                    Tech-
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
                  items={["home", "service", "projects", "team"]}
                  currentClassName="is-current"
                  offset={-200}
                >
                  <li>
                    <Link to="/"> Home </Link>
                  </li>
                  <li>
                    <Link to="/service"> Service </Link>
                  </li>
                  <li>
                    <Link to="/projetcs"> Projects </Link>
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

        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Tech-GIS - Team"} />
        {/* End Breadcrump Area */}

        {/* Start Page Wrapper  */}
        <main className="page-wrapper">
          {/* Start Team Area  */}
          <div className="rn-team-wrapper ptb--120 bg_color--1">
            <div className="rn-team-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center mb--30">
                      <h2> Advisors & Consultants </h2>
                      <p>
                        some text will appear here to define some expertese of
                        the advisors and consultants team
                      </p>
                    </div>
                  </div>
                </div>
                <TeamTwo
                  column="col-lg-3"
                  teamStyle="team-style--bottom"
                  item="8"
                />
              </div>
            </div>
          </div>
          {/* End Team Area  */}

          {/* Start Team Area  */}
          <div className="rn-team-wrapper ptb--120 bg_color--1">
            <div className="rn-team-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center mb--30">
                      <h2> Core Team </h2>
                      <p>
                        some text will appear here to define some expertese of
                        the core team
                      </p>
                    </div>
                  </div>
                </div>
                <TeamOne
                  column="col-lg-3"
                  teamStyle="team-style--bottom"
                  item="8"
                />
              </div>
            </div>
          </div>
          {/* End Team Area  */}
        </main>
        {/* End Page Wrapper  */}

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
export default Team;
