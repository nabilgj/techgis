import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.pageTitle} || TechGIS</title>
          <meta
            name="description"
            content="Expert in Geo-Spatial Technology. We introduced the latest advancement in geospatial technology in a range of sectors with high standards and economical cost."
          />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
