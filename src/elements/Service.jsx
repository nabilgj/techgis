import React, { Component } from "react";

import { Link } from "react-router-dom";

import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";

import ServicesHeader from "../component/header/ServicesHeader";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import MainFooter from "../component/footer/MainFooter";

import { ServiceLists } from "../page-demo/script";

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
        <PageHelmet pageTitle="Services" />
        <ServicesHeader />
        <Breadcrumb title={"TechGIS - Services & Solutions"} />

        {/* Start Service Area */}
        <div className="service-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2> The need to improve decision making Capability </h2>
                  <p>
                    TechGIS provides services and solutions for various sectors.
                  </p>
                </div>
              </div>
            </div>
            <div className="row service-one-wrapper">
              {ServiceLists.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <div className="service service__style--2">
                    <Link to={`/service-details/${val.id}`}>
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

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
export default Service;
