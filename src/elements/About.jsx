import React, { Component, lazy, Suspense } from "react";
import { Link } from "react-router-dom";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import PageHelmet from "../component/common/Helmet";

const AboutHeader = lazy(() => import("../component/header/AboutHeader"));
const Breadcrumb = lazy(() => import("../elements/common/Breadcrumb"));
const TeamCore = lazy(() => import("../blocks/team/TeamCore"));
const MainFooter = lazy(() => import("../component/footer/MainFooter"));
const renderLoader = () => <p>Loading</p>;

class About extends Component {
  render() {
    let history =
      "TechGIS founded in 2020, we cater to the technological requirements of the GNSS and geospatial industry. The formation of the company was realized to introduce the latest advancement in geospatial technology in a range of sectors with high standards and economical cost. With an amalgamation of expertise in remote sensing, aerial surveillance, data-management, information & technology, ergonomics and artificial intelligence, we make it happen for you when it comes to geo-spatial services and applications.";

    let story =
      "Witness to the havoc created by the swarms of Locusts in the year 2019 in more than 20 countries, two companies joined hands together to form a merger which resulted in the formation of TechGIS. Our founding directors laid the foundation stone for being the first group to submit a proposal at the national level to fight and manage the locust menace with the help of geo-spatial technology. Amazed by the potential of geo-spatial technology and GIS, our team of technopreneurs soon realized the dream of becoming a true Geo-spatial company with the help of raising our first capital investment in a round born through the support by AZM Group & Bukhari Group. Just inside twelve months, a company with foreign consultants, academia, technopreneurs, research scientists and native talent emerged in the form of TechGIS. TechGIS now serves wide sectors ranging from Civil & Infrastructure, Mining, Oil & Gas, Utilities, Industry and Agriculture. The tale is unfinished as our team aspires to add to creating value in life through application and services of geo-spatial technology.";

    return (
      <React.Fragment>
        <PageHelmet pageTitle="About" />

        <Suspense fallback={renderLoader()}>
          <AboutHeader />
        </Suspense>

        <Suspense fallback={renderLoader()}>
          <Breadcrumb title={"TechGIS - Expert in Geospatial Technology"} />
        </Suspense>

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
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
              <Link to="/teams">
                <Suspense fallback={renderLoader()}>
                  <TeamCore
                    column="col-lg-3 col-md-6 col-sm-6 col-12"
                    teamStyle="team-style--bottom"
                    item="4"
                  />
                </Suspense>
              </Link>
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Suspense fallback={renderLoader()}>
          <MainFooter />
        </Suspense>
      </React.Fragment>
    );
  }
}
export default About;
