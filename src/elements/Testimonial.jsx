import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      TECHGIS provides services and solutions for the following
                      sectors.
                    </p>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Telecommunication Towers, Power Transmission and
                      Distribution lines and systems such as towers and
                      sub-stations require periodic maintenance for prevention
                      of break-down, the conventional methods require in-person
                      inspection checks which are time-bound, costly and
                      inefficient.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span> UTILITIES </span>
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Geo-spatial technology has shown promising results in
                      agriculture with data-driven integrated pest management,
                      fertilizer application and crop health analysis. The tools
                      employed by TECHGIS enables farmers to effectively apply
                      inputs thus saving cost and increasing output. Our
                      agricultural drones for data-driven spraying and spreading
                      have bolstered crop yield with decision support mechanism
                      that aids in timely intelligent action.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>AGRICULTURE</span>
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      TECHGIS provides 2D Maps, 3D Maps, Topographical
                      surveillance, Engineering drawings and mapping of civil
                      infrastructure that results in helping the client make a
                      better execution plan. Our team of experts can aid in
                      project progress monitoring, as-built drawings and
                      development of digital elevation models.Conventional
                      methods for inspection of remote infrastructure sites can
                      be easily replaced with TECHGIS UAV surveillance and
                      mapping for effective inspection, checks and repair
                      maintenance works.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span> CIVIL & INFRASTRUCTURE </span>
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Scrutiny for piping infrastructure and metal assembly can
                      be effectively managed through TECHGIS UAV surveillance
                      through data acquisition, data processing, data analysis
                      and data sharing.Traditional methods of inspecting port,
                      oil and gas assets are dangerous and time-intensive. Teams
                      of engineers and EHS professionals move from asset to
                      asset, or walk pipelines, and take notes on a clipboard or
                      mobile device which can be easily replaced with
                      Geo-spatial technology which also has the advantage of
                      securing a digital record.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>PORTS & SHIPPING AND OIL & GAS </span>
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Geo-spatial technology in mining improve the overall
                      efficiency of large mine site and quarry management by
                      providing accurate and comprehensive data, detailing site
                      conditions in a very short time. Drone data provides more
                      precise volumetric measurements than traditional surveying
                      methods and helps in better planning of load management
                      and optimizing traffic supervision. Quarry monitoring
                      becomes safer and easier through UAV surveillance while
                      saving costly and skilled inspection of mining machinery
                      and equipment.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span> MINING & EXPLORATION</span>
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Climate change is a global phenomenon with a high
                      probability to greatly impact many countries. TECHGIS
                      believes in developing technological solutions for a safer
                      and sustainable environment, considering this desire our
                      Geo-spatial technology helps monitor carbon dioxide
                      levels, air quality checks and land parceling with
                      vegetation indices for improved plans for environment
                      conservation.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>ENVIRONMENT MANAGEMENT </span>
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabList className="testimonial-thumb-wrapper">
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/testimonial-1.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>

                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/testimonial-2.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>

                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/testimonial-1.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>

                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/testimonial-2.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>

                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/testimonial-1.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>

                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/testimonial-2.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>

                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/testimonial-1.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
              </TabList>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Testimonial;
