import React from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Slider from "react-slick";
import PortfolioList from "../elements/portfolio/PortfolioList";
import { slickDot, portfolioSlick2 } from "../page-demo/script";

import { Link } from "react-router-dom";

import Scrollspy from "react-scrollspy";
import { FiX, FiMenu } from "react-icons/fi";

class Projects extends React.Component {
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
        <PageHelmet pageTitle="Counters" />

        {/* Start Header Area  */}
        <header className="header-area formobile-menu header--fixed ">
          <div className="header-wrapper" id="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <a href="/">
                  <img
                    className="logo-1"
                    src="/assets/images/logo/logo-light.png"
                    alt="Logo Images"
                  />
                  <img
                    className="logo-2"
                    src="/assets/images/logo/logo-all-dark.png"
                    alt="Logo Images"
                  />
                </a>
              </div>
            </div>
            <div className="header-right">
              <nav className="mainmenunav d-lg-block">
                <Scrollspy
                  className="mainmenu"
                  items={[
                    "home",
                    "about",
                    "service-details",
                    "projects",
                    "team",
                    "team",
                    "blog",
                  ]}
                  currentClassName="is-current"
                  offset={-200}
                >
                  <li>
                    <Link to="/"> Home </Link>
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
        <Breadcrumb title={"Projects"} />
        {/* End Breadcrump Area */}

        {/* Start Page Wrapper  */}
        <main className="page-wrapper">
          {/* Start Portfolio Area */}
          <div className="portfolio-area ptb--120 bg_color--5">
            <div className="portfolio-sacousel-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center service-style--3 mb--30">
                      <h2 className="title"> All Projects </h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <PortfolioList
                    styevariation="text-left mt--40"
                    column="col-lg-4 col-md-6 col-sm-6 col-12"
                    item="6"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* End Portfolio Area */}
        </main>
        {/* End Page Wrapper  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        {/* Start Footer Area  */}
        <Footer />
        {/* End Footer Area  */}
      </>
    );
  }
}

// into index
export default Projects;
