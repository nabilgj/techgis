import React from "react";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import TeamHeader from "../component/header/TeamHeader";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import TeamCore from "./team/TeamCore";
import TeamAdvisors from "./team/TeamAdvisors";
import MainFooter from "../component/footer/MainFooter";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  render() {
    return (
      <>
        <PageHelmet pageTitle="Team" />
        <TeamHeader />
        <Breadcrumb title={"TechGIS - Team"} />

        {/* Start Page Wrapper  */}
        <main className="page-wrapper">
          {/* Start Team Area  */}
          <div className="rn-team-wrapper ptb--120 bg_color--1">
            <div className="rn-team-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center mb--30">
                      <h2> Advisors & Consultants </h2>
                      <p>
                        Our Advisors, Consultants and Mentors form the backbone
                        of our organisation. The individuals are a part of
                        prestigious international and national organisations,
                        academic institutions and research organizations. Our
                        pool of mentors remain in constant touch for
                        intellectual development of our core technical
                        competence.
                      </p>
                    </div>
                  </div>
                </div>
                <TeamAdvisors
                  column="col-lg-3"
                  teamStyle="team-style--bottom"
                  item="8"
                />
              </div>
            </div>
          </div>
          {/* End Team Area  */}

          {/* Start Team Area  */}
          <div className="rn-team-wrapper ptb--120 bg_color--1">
            <div className="rn-team-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center mb--30">
                      <h2> Core Team </h2>
                      <p>
                        Our core team comprise of highly qualified professionals
                        with strong administrative, management and leadership
                        roles spread across a spectrum of sectors with diverse
                        range of services and applications.
                      </p>
                    </div>
                  </div>
                </div>
                <TeamCore
                  column="col-lg-3"
                  teamStyle="team-style--bottom"
                  item="8"
                />
              </div>
            </div>
          </div>
          {/* End Team Area  */}

          {/* Start Team Structure  */}
          {/* <div className="rn-team-wrapper ptb--120 bg_color--1">
            <div className="rn-team-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center mb--30">
                      <h2> Team Structure </h2>
                      <div className="thumb">
                        <img
                          className="w-100"
                          src={`/assets/images/team/teamstructure.jpeg`}
                          alt="A person operating a drone for techGIS in the middle of the crop field facing backwards to the camera."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* End Team Area  */}
        </main>
        {/* End Page Wrapper  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <MainFooter />
      </>
    );
  }
}

// into index
export default Team;
