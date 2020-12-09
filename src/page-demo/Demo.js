import React, { Component, Fragment } from "react";
import Scrollspy from "react-scrollspy";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";

import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";

import TeamOne from "../blocks/team/TeamOne";
// import Team from "../blocks/Team.jsx";
import Slider from "react-slick";

import { Link } from "react-router-dom";

// internal data
import {
  ContactUs,
  HistoryList,
  ProjectList,
  projectSlick2,
} from "../page-demo/script";

const settings = {
  autoplay: true,
  autoplaySpeed: 500,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  pauseOnHover: true,
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CloseMenuTrigger = this.CloseMenuTrigger.bind(this);
    // this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CloseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 50) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    return (
      <Fragment>
        <Helmet pageTitle="Home" />

        {/* Start Header */}
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
                  items={[
                    "home",
                    "about",
                    "service",
                    "projects",
                    "team",
                    "team",
                  ]}
                  currentClassName="is-current"
                  offset={-200}
                >
                  {/* <li className="has-droupdown">
                    <Link to="#home"> Home </Link>
                    <ul className="submenu">
                      <li>
                        <Link to="/main-demo"> About Us </Link>
                      </li>
                      <li>
                        <Link to="/dark-main-demo"> Our Story </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li>
                    <a href="#home"> Home </a>
                  </li>

                  <li>
                    <a href="#about"> About Us </a>
                  </li>

                  <li>
                    <a href="#services"> Services </a>
                  </li>

                  <li>
                    <a href="#projects"> Projects </a>
                  </li>

                  <li>
                    <a href="#team"> Team </a>
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
        {/* End Header */}

        {/* Start hero */}
        <div className="slider-activation slider-creative-agency" id="home">
          <div className="bg_image bg_image--35" data-black-overlay="4">
            {ContactUs.map((value, index) => (
              <div
                className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ""}
                        {value.title ? (
                          <h1 className="title theme-gradient h1">
                            {value.title}
                          </h1>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <p className="description">{value.description}</p>
                        ) : (
                          ""
                        )}
                        {value.buttonText ? (
                          <div className="slide-btn">
                            <Link
                              className="rn-button-style--2 btn-primary-color"
                              to={`${value.buttonLink}`}
                              // href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End hero  */}

        {/* Start about */}
        <div
          className="service-area creative-service-wrapper ptb--120 bg_color--1"
          id="about"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="content">
                  <h2 className="title"> Our History </h2>
                  <p>
                    Witness to the havoc created by the swarms of Locusts in the
                    year 2019 in more than 20 countries, two companies joined
                    hands together to form a merger which resulted in the
                    formation of TechGIS.
                  </p>
                  <Link
                    className="rn-button-style--2 btn-primary-color-history"
                    to="/about"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="row service-one-wrapper mt--30">
              {HistoryList.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a href="/about">
                    <div className="service service__style--1">
                      <div className="icon">
                        {/* <img
                          src={`/assets/images/icons/${val.icon}`}
                          alt="Service Icon"
                        /> */}
                      </div>
                      <div className="content">
                        <h4 className="title">{val.title}</h4>
                        <p className="subtitle">{val.description}</p>
                        <p className="subtitle">{val.description2}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* start CTA  */}
            <div
              className="call-to-action-wrapper call-to-action bg_image bg_image--30 text-white-wrapper ptb--180 ptb_lg--80 ptb_md--80 ptb_sm--80"
              id="aboutus"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="inner text-left">
                      <h2> Let's get started </h2>
                      <Link
                        className="rn-button-style--2 btn-primary-color-projects"
                        to="/projects"
                      >
                        Our Projects
                      </Link>
                      {/* <Link
                        to="#projects-in-progress"
                        className="rn-button-style--2 mt--70 mt_sm--30 mt_md--30"
                      >
                        Our Projects
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Call To Action */}
          </div>
        </div>
        {/* End about */}

        {/* Start service  */}
        <div
          className="rn-content-box-area rn-content-box-style--1 pb--120 bg_color--1"
          id="services"
        >
          <div className="row row--0 align-items-center">
            <div className="col-lg-12 col-xl-6">
              <div className="thumbnail">
                <img
                  src="/assets/images/featured/Picture1.jpg"
                  alt="Featured Images"
                />
              </div>
            </div>
            <div className="col-lg-12 col-xl-6 mt_lg--50 mt_md--30 mt_sm--30">
              <div className="content">
                <h2 className="title"> Service & Solutions </h2>
                <h4 className="fontWeight500">
                  Provide the most advance and cutting edge solutions for your
                  business.
                </h4>
                <p>
                  The need to improve decision making capability is of prime
                  importance as intelligent data-based decision support system
                  enhances durability, saves money and reduces break-down
                  maintenance.
                </p>
                <Link
                  className="rn-button-style--2 btn-primary-color-history"
                  to="services"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End service  */}

        {/* Start project */}
        <div className="portfolio-area ptb--120 bg_color--1" id="projects">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title text-left service-style--3 mb--30">
                  <h2 className="title"> Our Projects </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper portfolio-sacousel-inner mb--55">
            <div className="portfolio-slick-activation mt--30 mt_sm--30">
              <Slider {...projectSlick2} {...settings}>
                {ProjectList.map((value, index) => (
                  <div
                    className="portfolio portfolio-interior-design"
                    key={index}
                  >
                    <div className="thumbnail-inner">
                      <div
                        className={`thumbnail ${value.image}`}
                        style={{
                          backgroundImage: `url(/assets/images/portfolio/${value.imageUrl}.jpg)`,
                        }}
                      ></div>
                      <div className={`bg-blr-image ${value.image}`}></div>
                    </div>
                    <div className="content">
                      <div className="inner">
                        <p>{value.category}</p>
                        <h4>
                          <a href="#projects-in-progress">{value.title}</a>
                        </h4>
                        <div className="portfolio-button">
                          <Link className="rn-btn" to="/projects">
                            Check
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* End projects */}

        {/* Start Team  */}
        <div className="rn-team-wrapper pb--120 bg_color--1" id="team">
          <div className="rn-team-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="section-title text-left mb--30">
                    <h2> Our Team </h2>
                  </div>
                </div>
              </div>
              <Link to="/teams">
                <TeamOne
                  column="col-lg-3 col-md-6 col-sm-6 col-12"
                  teamStyle="team-style--bottom"
                  item="4"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* End Team  */}

        {/* Start Footer */}
        <FooterTwo />
        {/* End Footer */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}

export default Home;
