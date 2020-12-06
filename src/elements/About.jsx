import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import TeamOne from "../blocks/team/TeamOne";

import FooterTwo from "../component/footer/FooterTwo";

import { Link } from "react-router-dom";

import Scrollspy from "react-scrollspy";
import { FiX, FiMenu } from "react-icons/fi";

class About extends Component {
  render() {
    let history =
      "Tech-GIS founded in 2020, we cater to the technological requirements of the GNSS and geospatial industry. The formation of the company was realized to introduce the latest advancement in geospatial technology in a range of sectors with high standards and economical cost. With an amalgamation of expertise in remote sensing, aerial surveillance, data-management, information & technology, ergonomics and artificial intelligence, we make it happen for you when it comes to geo-spatial services and applications.";

    let story =
      "Witness to the havoc created by the swarms of Locusts in the year 2019 in more than 20 countries, two companies joined hands together to form a merger which resulted in the formation of TechnoGIS. Our founding directors laid the foundation stone for being the first group to submit a proposal at the national level to fight and manage the locust menace with the help of geo-spatial technology. Amazed by the potential of geo-spatial technology and GIS, our team of technopreneurs soon realized the dream of becoming a true Geo-spatial company with the help of raising our first capital investment in a round born through the support by AZM Group & Bukhari Group. Just inside twelve months, a company with foreign consultants, academia, technopreneurs, research scientists and native talent emerged in the form of TechnoGIS. TechnoGIS now serves wide sectors ranging from Civil & Infrastructure, Mining, Oil & Gas, Utilities, Industry and Agriculture. The tale is unfinished as our team aspires to add to creating value in life through application and services of geo-spatial technology.";

    return (
      <React.Fragment>
        <PageHelmet pageTitle="About" />

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
                  items={["home", "contact"]}
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

        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Expert in Geospatial Technology"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                {/* <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/about-3.jpg"
                      alt="About Images"
                    />
                  </div>
                </div> */}
                <div className="col-lg-12">
                  <div className="about-inner inner">
                    <div className="section-title text-center service-style--3 mb--30">
                      <h2 className="title"> Our History </h2>
                      <p className="description" style={{ color: "black" }}>
                        {history}
                      </p>
                      <h2 className="title"> Our Story </h2>
                      <p className="description" style={{ color: "black" }}>
                        {story}
                      </p>
                    </div>

                    <div className="row mt--30">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title"> Who we are </h3>
                          <p style={{ color: "black" }}>
                            Our highly qualified executives with profound
                            knowledge of Geo-spatial technology and business
                            processes strive to meet the ever-changing advance
                            system demands of its customers. Our employees have
                            hands-on experience with technology and worked with
                            foreign consultants and vendors.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title"> What we can do </h3>
                          <p style={{ color: "black" }}>
                            Tech GIS provides high quality and excellent
                            services to its customers to enhance their
                            capabilities to meet the emergent requirements of
                            their business endeavors. We have an unbending
                            devotion to provide unparalleled services with
                            integrity and full support to its business partners
                            so that they can achieve their objectives
                            effectively.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start CounterUp Area */}
        {/* <div className="rn-counterup-area pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">Our Fun Facts</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div> */}
        {/* End CounterUp Area */}

        {/* Start Finding Us Area  */}
        {/* <div className="rn-finding-us-area rn-finding-us bg_color--1">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
                <h4 className="theme-gradient"> Get Free Estimation </h4>
                <p>
                  Any text you would like to have here refer to free estimate
                  qoute.
                </p>
                <Link className="rn-btn btn-white" to="#estimate-in-progress">
                  Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Finding Us Area  */}

        {/* Start Team Area  */}
        <div className="rn-team-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title service-style--3 text-center mb--25">
                  <h2 className="title"> Skilled Team </h2>
                  <p style={{ color: "black", width: "100%" }}>
                    Founded in 2020, we cater to the technological requirements
                    of the GNSS and geospatial industry. The formation of the
                    company was realized to introduce the latest advancement in
                    geospatial technology in a range of sectors with high
                    standards and economical cost. With an amalgamation of
                    expertise in remote sensing, aerial surveillance,
                    data-management, information & technology, ergonomics and
                    artificial intelligence, we make it happen for you when it
                    comes to geo-spatial services and applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <TeamOne
                column="col-lg-3 col-md-6 col-sm-6 col-12"
                teamStyle="team-style--bottom"
                item="4"
              />
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Testimonial Area */}
        {/* <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div> */}
        {/* End Testimonial Area */}

        {/* Start Brand Area */}
        {/* <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div> */}
        {/* End Brand Area */}

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
      </React.Fragment>
    );
  }
}
export default About;
