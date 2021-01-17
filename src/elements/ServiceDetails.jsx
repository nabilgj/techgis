import React, { Component } from "react";

import PageHelmet from "../component/common/Helmet";
import ServicesHeader from "../component/header/ServicesHeader";
import Breadcrumb from "../elements/common/Breadcrumb";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import MainFooter from "../component/footer/MainFooter";

import {
  ServiceLists1,
  ServiceLists2,
  ServiceLists3,
} from "../page-demo/script";

class ServiceDetails extends Component {
  constructor() {
    super();

    // this.menuTrigger = this.menuTrigger.bind(this);
    // this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    // this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });

    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  menuTrigger = () => {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  };
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const serviceID = this.props.match.params.id;

    const serviceList1 = ServiceLists1.filter(
      (serve) => serve.id === serviceID
    );

    const serviceList2 = ServiceLists2.filter(
      (serve) => serve.id === serviceID
    );

    const serviceList3 = ServiceLists3.filter(
      (serve) => serve.id === serviceID
    );

    let bread1 = serviceID.split("-")[0];
    let bread2 = serviceID.split("-")[1];

    bread1 = bread1.charAt(0).toUpperCase() + bread1.slice(1);
    bread2 = bread2.charAt(0).toUpperCase() + bread2.slice(1);

    const bread = [bread1, bread2].join(" ");

    return (
      <React.Fragment>
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle="Services" />
        <ServicesHeader />
        <Breadcrumb title={`TechGIS - ${bread}`} />

        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="inner">
                    {/* Start Single Area */}

                    {serviceList1 &&
                      serviceList1.map((list) => {
                        return (
                          <div
                            className="row sercice-details-content pb--80 align-items-center"
                            key={list.id}
                          >
                            <div className="col-lg-6 col-12">
                              <div className="thumb">
                                <img
                                  className="w-100"
                                  src={`/assets/images/service/${list.imgUrl}`}
                                  alt={`${list.imgAlt}`}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-12">
                              <div className="details mt_md--30 mt_sm--30">
                                <p>{list.description}</p>

                                <h4
                                  className="title"
                                  style={{ lineHeight: "1.2" }}
                                >
                                  DELIVERABLES
                                </h4>
                                {list.pro.map((process) => {
                                  return (
                                    <ul className="liststyle">
                                      <li key={process.id}> {process.p} </li>
                                    </ul>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    {/* End Single Area */}

                    {serviceList3 &&
                      serviceList3.map((list) => {
                        return (
                          <div
                            className="row sercice-details-content pb--80 align-items-center"
                            key={list.id}
                          >
                            <div className="col-lg-12 col-12">
                              <div className="details mt_md--30 mt_sm--30">
                                {/* <h4
                                  className="title"
                                  style={{
                                    lineHeight: "1.2",
                                  }}
                                >
                                  Workflow
                                </h4> */}
                              </div>
                            </div>
                            <div className="col-lg-6 col-12">
                              <div className="thumb">
                                <img
                                  className="w-100"
                                  src={`/assets/images/service/${list.imgUrl4}`}
                                  alt={`${list.imgAlt}`}
                                />
                              </div>
                            </div>

                            <div className="col-lg-6 col-12">
                              <div className="thumb">
                                <img
                                  className="w-100"
                                  src={`/assets/images/service/${list.imgUrl5}`}
                                  alt={`${list.imgAlt}`}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    {/* End Single Area */}

                    {serviceList2 &&
                      serviceList2.map((list) => {
                        return (
                          <div
                            className="row sercice-details-content pb--80 align-items-center"
                            key={list.id}
                          >
                            <div className="col-lg-12 col-12">
                              <div className="details mt_md--30 mt_sm--30">
                                <h4
                                  className="title"
                                  style={{
                                    lineHeight: "1.2",
                                  }}
                                >
                                  Workflow
                                </h4>
                              </div>
                            </div>
                            <div className="col-lg-6 col-12">
                              <div className="thumb">
                                <img
                                  className="w-100"
                                  src={`/assets/images/service/${list.imgUrl2}`}
                                  alt={`${list.imgAlt12}`}
                                />
                              </div>
                            </div>

                            <div className="col-lg-6 col-12">
                              <div className="thumb">
                                <img
                                  className="w-100"
                                  src={`/assets/images/service/${list.imgUrl3}`}
                                  alt={`${list.imgAlt13}`}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    {/* End Single Area */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Wrapper */}

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
export default ServiceDetails;
