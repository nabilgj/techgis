import React from "react";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import ProjectsHeader from "../component/header/ProjectsHeader";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import MainFooter from "../component/footer/MainFooter";

import PortfolioList from "../elements/portfolio/PortfolioList";

class Projects extends React.Component {
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
      <>
        <PageHelmet pageTitle="Projects" />

        <ProjectsHeader />
        <Breadcrumb title={"TechGIS - Projects Application"} />

        {/* Start Page Wrapper  */}
        <main className="page-wrapper">
          {/* Start Portfolio Area */}
          <div className="portfolio-area ptb--120 bg_color--5">
            <div className="portfolio-sacousel-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center service-style--3 mb--30">
                      <h2 className="title"> APPLICATIONS </h2>
                      <p>
                        Some of the various sectors which may benefit from
                        aerial imaging solutions are.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <PortfolioList
                    styevariation="text-left mt--40"
                    column="col-lg-4 col-md-6 col-sm-6 col-12"
                    item="6"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* End Portfolio Area */}
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
export default Projects;
