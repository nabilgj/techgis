import React, { Component, lazy, Suspense } from "react";

import PageHelmet from "../component/common/Helmet";

// import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

const AboutHeader = lazy(() => import("../component/header/AboutHeader"));
const Breadcrumb = lazy(() => import("../elements/common/Breadcrumb"));
const MainFooter = lazy(() => import("../component/footer/MainFooter"));

const renderLoader = () => <p>Loading</p>;

class KnowGIS extends Component {
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
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Know GIS" />

        <Suspense fallback={renderLoader()}>
          <AboutHeader />
        </Suspense>

        <Suspense fallback={renderLoader()}>
          <Breadcrumb title={"What is GIS?"} />
        </Suspense>

        {/* Start Blog Details */}
        <div className="rn-blog-details pt--110 pb--70 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-wrapper">
                  <div className="inner">
                    <p>
                      A geographic information system (GIS) is a framework for
                      gathering, managing and analyzing data. Rooted in the
                      science of geography, GIS integrates many types of data.
                      It analyzes spatial location and organizes layers of
                      information into visualizations using maps and 3D scenes.
                      With this unique capability, GIS reveals deeper insights
                      into data, such as patterns, relationships, and
                      situations—helping users make smarter decisions.
                    </p>
                    <div
                      className="thumbnail"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <qoute
                        style={{
                          fontSize: "2.5rem",
                          fontWeight: "bold",
                          color: "#005e70",
                        }}
                      >
                        "GIS Translates problems into Spatial Answers"
                      </qoute>
                    </div>
                    <p className="mt--40">
                      Hundreds of thousands of organizations in virtually every
                      field are using GIS to make maps that communicate, perform
                      analysis, share information, and solve complex problems
                      around the world. This is changing the way the world
                      works.
                    </p>
                    <blockquote
                      className="rn-blog-quote"
                      style={{
                        color: "#005e70",
                      }}
                    >
                      <u> Identify Problems</u>
                    </blockquote>
                    <p>
                      Use GIS to illuminate issues that are driven by geography.
                    </p>

                    <blockquote
                      className="rn-blog-quote"
                      style={{
                        color: "#005e70",
                      }}
                    >
                      <u> Monitor change </u>
                    </blockquote>
                    <p>
                      If a picture tells a thousand words, a map tells a
                      thousand pictures. Change detection of land cover and land
                      use can be performed. Encroachments can be detected.
                    </p>

                    <blockquote
                      className="rn-blog-quote"
                      style={{
                        color: "#005e70",
                      }}
                    >
                      <u> Manage & respond to events </u>
                    </blockquote>
                    <p>
                      GIS delivers real-time situational awareness. A utility
                      company can monitor its network and respond dynamically to
                      leaks and other disruptions affecting the network
                    </p>

                    <blockquote
                      className="rn-blog-quote"
                      style={{
                        color: "#005e70",
                      }}
                    >
                      <u> Perform forecasting </u>
                    </blockquote>
                    <p>
                      Use GIS to forecast traffic, natural hazards, resettlement
                      plans in case of upcoming developments.
                    </p>

                    <blockquote
                      className="rn-blog-quote"
                      style={{
                        color: "#005e70",
                      }}
                    >
                      <u> Set priorities </u>
                    </blockquote>
                    <p>
                      GIS helps to set priorities based on spatial analysis. By
                      analyzing crime patterns, public safety officials can
                      identify target areas and assign officers in those areas.
                    </p>

                    <blockquote
                      className="rn-blog-quote"
                      style={{
                        color: "#005e70",
                      }}
                    >
                      <u> Understand trends </u>
                    </blockquote>
                    <p>
                      GIS helps you gain insight into data that might be missed
                      in a spreadsheet. It helps you understand the disease
                      diffusion and actions to be taken as a result.
                    </p>

                    <div
                      className="thumbnail"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <qoute
                        style={{
                          fontSize: "2.5rem",
                          fontWeight: "bold",
                          color: "#005e70",
                        }}
                      >
                        How GIS works?
                      </qoute>
                    </div>

                    <div className="blog-single-list-wrapper d-flex flex-wrap">
                      <div className="content">
                        <p>
                          GIS technology applies geographic science with tools
                          for understanding and collaboration. It helps people
                          reach a common goal: to gain actionable intelligence
                          from all types of data.
                        </p>

                        <blockquote
                          className="rn-blog-quote"
                          style={{
                            color: "#005e70",
                          }}
                        >
                          <u> Maps </u>
                        </blockquote>
                        <p>
                          Maps are the geographic container for the data layers
                          and analytics you want to work with. The world is full
                          of data, and maps help you make sense of it. There is
                          a growing need to turn geographic data into compelling
                          maps. GIS maps are easily shared and embedded in apps,
                          and accessible by virtually everyone, everywhere.
                        </p>

                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <qoute
                            style={{
                              fontSize: "1rem",
                              color: "#005e70",
                            }}
                          >
                            "Maps and geographic science enable a new kind of
                            conversation"
                            <figcaption
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                color: "black",
                                fontSize: ".8rem",
                              }}
                            >
                              Scott Morehouse
                            </figcaption>
                          </qoute>
                        </div>

                        <blockquote
                          className="rn-blog-quote"
                          style={{
                            color: "#005e70",
                          }}
                        >
                          <u> Data </u>
                        </blockquote>
                        <p>
                          GIS integrates many different kinds of data layers
                          using spatial location. Most data has a geographic
                          component. GIS data includes imagery, features, and
                          basemaps linked to spreadsheets and tables.
                        </p>

                        <blockquote
                          className="rn-blog-quote"
                          style={{
                            color: "#005e70",
                          }}
                        >
                          <u> Analysis </u>
                        </blockquote>
                        <p>
                          Spatial analysis lets you evaluate suitability and
                          capability, estimate and predict, interpret and
                          understand, and much more, lending new perspectives to
                          your insight and decision-making.
                        </p>

                        <blockquote
                          className="rn-blog-quote"
                          style={{
                            color: "#005e70",
                          }}
                        >
                          <u> Apps </u>
                        </blockquote>
                        <p>
                          Apps provide focused user experiences for getting work
                          done and bringing GIS to life for everyone. GIS apps
                          work virtually everywhere: on your mobile phones,
                          tablets, in web browsers, and on desktops.
                        </p>

                        <div
                          className="thumbnail"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <qoute
                            style={{
                              fontSize: "2.5rem",
                              fontWeight: "bold",
                              color: "#005e70",
                            }}
                          >
                            Who Uses GIS?
                          </qoute>
                        </div>

                        <p>
                          GIS technology applies geographic science with tools
                          for understanding and collaboration. It helps people
                          reach a common goal: to gain actionable intelligence
                          from all types of data.
                        </p>

                        <ul className="list-style">
                          <li> Education </li>
                          <li> Health </li>
                          <li> Insurance </li>
                          <li> Manufacturing </li>
                          <li> Petroleum </li>
                          <li> Public Safety </li>
                          <li> Real State </li>
                          <li> Retail </li>
                          <li> Sustainability </li>
                          <li> Telecommunications </li>
                          <li> Transportation </li>
                          <li> Electric and Gas Utilities </li>
                          <li> Natural resources </li>
                          <li> Government </li>
                          <li> Water </li>
                          <li> Defense and National Security </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      className="thumbnail"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <qoute
                        style={{
                          fontSize: "2.5rem",
                          fontWeight: "bold",
                          color: "#005e70",
                        }}
                      >
                        GIS Today:
                      </qoute>
                    </div>

                    <p>
                      GIS gives people the ability to create their own digital
                      map layers to help solve real-world problems. GIS has also
                      evolved into a means for data sharing and collaboration,
                      inspiring a vision that is now rapidly becoming a
                      reality—a continuous, overlapping, and interoperable GIS
                      database of the world, about virtually all subjects.
                      Today, hundreds of thousands of organizations are sharing
                      their work and creating billions of maps every day to tell
                      stories and reveal patterns, trends, and relationships
                      about everything.
                    </p>

                    <div
                      className="thumbnail"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <qoute
                        style={{
                          fontSize: "2.5rem",
                          fontWeight: "bold",
                          color: "#005e70",
                        }}
                      >
                        The Future of GIS
                      </qoute>
                    </div>

                    <p>
                      With its movement to web and cloud computing, and
                      integration with real-time information via the Internet of
                      Things, GIS has become a platform relevant to almost every
                      human endeavor—a nervous system of the planet. As our
                      world faces problems from expanding population, loss of
                      nature, and pollution, GIS will play an increasingly
                      important role in how we understand and address these
                      issues and provide a means for communicating solutions
                      using the common language of mapping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Details */}

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

// into index
export default KnowGIS;
