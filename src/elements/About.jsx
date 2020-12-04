import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import { Link } from "react-router-dom";

import Scrollspy from "react-scrollspy";
import { FiX, FiMenu } from "react-icons/fi";

class About extends Component {
  render() {
    let description =
      "Founded in 2020, we cater to the technological requirements of the GNSS and geospatial industry. The formation of the company was realized to introduce the latest advancement in geospatial technology in a range of sectors with high standards and economical cost. With an amalgamation of expertise in remote sensing, aerial surveillance, data-management, information & technology, ergonomics and artificial intelligence, we make it happen for you when it comes to geo-spatial services and applications.";
    return (
      <React.Fragment>
        <PageHelmet pageTitle="About" />

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
                  items={["home", "contact"]}
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
        <Breadcrumb title={"About"} />
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
                    <div className="section-title">
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">Who we are</h3>
                          <p>
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
                          <h3 className="title">Who we are</h3>
                          <p>
                            TechnoGIS provides high quality and excellent
                            services to their customers to enhance their
                            capabilities and meet the emergent requirements of
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
        <div className="rn-counterup-area pb--120 bg_color--1">
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
        </div>
        {/* End CounterUp Area */}

        {/* Start Finding Us Area  */}
        <div className="rn-finding-us-area rn-finding-us bg_color--1">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
                <h4 className="theme-gradient">Find Your Work Now</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that.
                </p>
                <a className="rn-btn btn-white" href="/about">
                  Get Started
                </a>
              </div>
            </div>
            <div className="thumbnail">
              <div className="image">
                <img
                  src="/assets/images/about/finding-us-01.png"
                  alt="Finding Images"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area  */}

        {/* Start Team Area  */}
        <div className="rn-team-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title service-style--3 text-center mb--25">
                  <h2 className="title">Skilled Team</h2>
                  <p>
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
              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/team-01.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Jone Due</h4>
                    <p className="designation">Sr. Web Developer</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/team-02.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">BM. Alamin</h4>
                    <p className="designation">Sr. Web Developer</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/team-03.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Jone Due</h4>
                    <p className="designation">Sr. Web Developer</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Team  */}
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Testimonial Area */}
        <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start Brand Area */}
        <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default About;
