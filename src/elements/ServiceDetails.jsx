import React, { Component } from "react";

import PageHelmet from "../component/common/Helmet";
import ServicesHeader from "../component/header/ServicesHeader";
import Breadcrumb from "../elements/common/Breadcrumb";

import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import MainFooter from "../component/footer/MainFooter";

import { ServiceLists, ServiceListVideos } from "../page-demo/script";

class ServiceDetails extends Component {
  constructor() {
    super();

    this.menuTrigger = this.menuTrigger.bind(this);
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
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const serviceID = this.props.match.params.id;
    const serviceList = ServiceLists.filter((serve) => serve.id === serviceID);

    const serviceListVideos = ServiceListVideos.filter(
      (video) => video.id === serviceID
    );

    let bread1 = serviceID.split("-")[0];
    let bread2 = serviceID.split("-")[1];

    bread1 = bread1.charAt(0).toUpperCase() + bread1.slice(1);
    bread2 = bread2.charAt(0).toUpperCase() + bread2.slice(1);

    const bread = [bread1, bread2].join(" & ");

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

                    {serviceList &&
                      serviceList.map((list) => {
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
                                  // src="/assets/images/service/service-02.png"
                                  alt="A person operating a drone for techGIS in the middle of the crop field facing backwards to the camera."
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
                                  Proceess of {list.title}
                                </h4>
                                <ul className="liststyle">
                                  <li>1st process</li>
                                  <li>2nd process</li>
                                  <li>3rd process</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    {serviceListVideos &&
                      serviceListVideos.map((video) => {
                        return (
                          <div
                            className="row sercice-details-content align-items-center"
                            key={video.id}
                          >
                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                              <div className="details mt_md--30 mt_sm--30">
                                <p>
                                  You can explain anything about the the video
                                  that will educate user.
                                </p>
                                <h4 className="title">Our Working Process</h4>
                                <ul className="liststyle">
                                  <li>Working process 1</li>
                                  <li>Working process 2</li>
                                  <li>Working process 3</li>
                                </ul>
                              </div>
                            </div>

                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                              <div className="thumb position-relative">
                                <img
                                  className="w-100"
                                  src={`/assets/images/service/${video.videoImgUrl}`}
                                  alt="A person operating a drone for techGIS in the middle of the crop field facing backwards to the camera."
                                />
                                <ModalVideo
                                  isOpen={this.state.isOpen}
                                  channel="custom"
                                  allowFullScreen
                                  url={`/assets/images/service/${video.video}`}
                                  onClose={() =>
                                    this.setState({ isOpen: false })
                                  }
                                />
                                <button
                                  className="video-popup"
                                  onClick={this.openModal}
                                >
                                  <span className="play-icon"></span>
                                </button>
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
