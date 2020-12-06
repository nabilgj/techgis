import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiMonitor,
  FiChevronUp,
} from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Testimonial from "../elements/Testimonial";

import FooterTwo from "../component/footer/FooterTwo";

import { Link } from "react-router-dom";

import Scrollspy from "react-scrollspy";
import { FiX, FiMenu } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiCast />,
    title: "Utilities",
    description:
      "Telecommunication Towers, Power Transmission and Distribution lines and systems such as towers and sub-stations require periodic maintenance for prevention of break-down.",
  },
  {
    icon: <FiLayers />,
    title: "AGRICULTURE",
    description:
      "Geo-spatial technology has shown promising results in agriculture with data-driven integrated pest management, fertilizer application and crop health analysis.",
  },
  {
    icon: <FiUsers />,
    title: "CIVIL & INFRASTRUCTURE",
    description:
      "TECHGIS provides 2D Maps, 3D Maps, Topographical surveillance, Engineering drawings and mapping of civil infrastructure that results in helping the client make a better execution plan.",
  },
  {
    icon: <FiMonitor />,
    title: "PORTS & SHIPPING AND OIL & GAS",
    description:
      "Scrutiny for piping infrastructure and metal assembly can be effectively managed through TECHGIS UAV surveillance through data acquisition, data processing, data analysis and data sharing.",
  },
  {
    icon: <FiMonitor />,
    title: "MINING & EXPLORATION",
    description:
      "Geo-spatial technology in mining improve the overall efficiency of large mine site and quarry management by providing accurate and comprehensive data, detailing site conditions in a very short time.",
  },
  {
    icon: <FiMonitor />,
    title: "ENVIRONMENT MANAGEMENT",
    description:
      "Climate change is a global phenomenon with a high probability to greatly impact many countries. TECHGIS believes in developing technological solutions for a safer and sustainable environment.",
  },
];
class Service extends Component {
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
      <React.Fragment>
        <PageHelmet pageTitle="Service" />

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
                  items={["home", "about", "projects"]}
                  currentClassName="is-current"
                  offset={-200}
                >
                  <li>
                    <Link to="/"> Home </Link>
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
        <Breadcrumb title={"Tech-GIS Service & Solutions"} />
        {/* End Breadcrump Area */}

        {/* Start Service Area */}
        <div className="service-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2> The need to improve decision making capability </h2>
                  <p>
                    TECHGIS provides services and solutions for various sectors
                    across Pakistan
                  </p>
                </div>
              </div>
            </div>
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <div className="service service__style--2">
                    <div className="icon">{val.icon}</div>
                    <div className="content">
                      <h3 className="title">{val.title}</h3>
                      <p>{val.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

        {/* Start Testimonial Area */}
        {/* <div className="rn-testimonial-area bg_color--5 ptb--120" id="team">
          <div className="container">
            <Testimonial />
          </div>
        </div> */}
        {/* End Testimonial Area */}

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
export default Service;
