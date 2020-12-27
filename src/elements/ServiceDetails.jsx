import React, { Component } from "react";

import PageHelmet from "../component/common/Helmet";
import ServicesHeader from "../component/header/ServicesHeader";
import Breadcrumb from "../elements/common/Breadcrumb";

import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import MainFooter from "../component/footer/MainFooter";

import { ServiceLists } from "../page-demo/script";

class ServiceDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const serviceID = this.props.match.params.id;
    const serviceList = ServiceLists.filter((list) => list.id === serviceID);

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
                          <div className="row sercice-details-content pb--80 align-items-center">
                            <div className="col-lg-6 col-12">
                              <div className="thumb">
                                <img
                                  className="w-100"
                                  src="/assets/images/service/service-01.jpg"
                                  alt="A person operating a drone for techGIS in the middle of the crop field facing backwards to the camera."
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-12" key={list.id}>
                              <div className="details mt_md--30 mt_sm--30">
                                <p>{list.description}</p>

                                <h4 className="title">
                                  Proceess of {list.title}
                                </h4>
                                <ul className="liststyle">
                                  <li>
                                    Yet this above sewed flirted opened ouch
                                  </li>
                                  <li>
                                    Goldfinch realistic sporadic ingenuous
                                  </li>
                                  <li>
                                    Abominable this abidin far successfully then
                                    like piquan
                                  </li>
                                  <li>Risus commodo viverra</li>
                                  <li>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <p>
                            but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which
                            don't look even slightly believable. If you are
                            going to use a passage of Lorem Ipsum. You need to
                            be sure there isn't anything embarrassing
                          </p>
                          <p>
                            hidden in the middle of text. All the Lorem Ipsum
                            generators tend toitrrepeat predefined chunks.
                            Necessary, making this the first true generator on
                            the Internet.
                          </p>
                          <h4 className="title">Our Working Process</h4>
                          <ul className="liststyle">
                            <li>Yet this above sewed flirted opened ouch</li>
                            <li>Goldfinch realistic sporadic ingenuous</li>
                            <li>
                              Abominable this abidin far successfully then like
                              piquan
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          {/* <img
                            className="w-100"
                            src="/assets/images/service/service-02.png"
                            alt="Service Images"
                          /> */}
                          <ModalVideo
                            channel="youtube"
                            isOpen={this.state.isOpen}
                            videoId="ZOoVOfieAF8"
                            onClose={() => this.setState({ isOpen: false })}
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
