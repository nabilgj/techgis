import React, { Component } from "react";

import { Link } from "react-router-dom";

import { singleProjectList } from "../../../src/page-demo/script";

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = singleProjectList.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <Link>{value.title}</Link>
                  </h4>
                  <div className="portfolio-button">
                    <Link
                      className="rn-button-style--3"
                      to="#projects-in-progress"
                    >
                      See Inside
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

// into Projects
export default PortfolioList;
