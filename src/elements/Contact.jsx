import React, { Component } from "react";

import { Link } from "react-router-dom";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import GoogleMapReact from "google-map-react";

import ContactHeader from "../component/header/ContactHeader";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import MainContact from "./contact/MainContact";
import MainFooter from "../component/footer/MainFooter";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
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
  static defaultProps = {
    center: {
      lat: 24.9178057,
      lng: 67.091417,
      // lat: 59.95,
      // lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Contact" />
        <ContactHeader />
        <Breadcrumb title={"TechGIS - Contact Us"} />

        {/* Start Contact Top Area  */}
        <div className="rn-contact-top-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiHeadphones />
                  </div>
                  <div className="inner">
                    <h4 className="title"> Phone Numbers </h4>
                    <p> Brigadier(Retd) Sajjad Sardar </p>
                    <p>
                      <Link to="tel:+92512829601"> +92 51 2829601 </Link>
                    </p>
                    <br />
                    <p>
                      <p> Syed Wajahat Hussain </p>
                      <Link to="tel:+922134992083"> +92 21 34992083 </Link>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">Email Address</h4>
                    <p>
                      <a href="mailto:ceo@tech-gis.com">ceo@tech-gis.com</a>
                    </p>
                    <p>
                      <a href="mailto:info@tech-gis.com">info@tech-gis.com</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Address</h4> <br />
                    <h5>Islamabad</h5>
                    <p>
                      Office no 6 Mezzanine floor,Muhammadi Plaza, Jinnah
                      Avenue, Blue Area , Islamabad. Pakistan
                    </p>
                    <br />
                    <h5> Karachi </h5>
                    <p>C-20 Block 5 Gulshan-e-Iqbal, Karachi. Pakistan</p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}
            </div>
          </div>
        </div>
        {/* End Contact Top Area  */}

        <div className="rn-contact-page ptb--120 bg_color--1">
          <MainContact />
        </div>

        {/* Start Contact Map  */}
        <div className="rn-contact-map-area position-relative">
          <div style={{ height: "650px", width: "100%" }}>
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={24.9178057}
                lng={67.091417}
                text="TechGIS"
              />
            </GoogleMapReact>
          </div>
        </div>
        {/* End Contact Map  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <MainFooter />
      </React.Fragment>
    );
  }
}
export default Contact;
