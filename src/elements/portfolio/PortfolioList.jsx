import React, { Component } from "react";

const PortfolioList2 = [
  {
    image: "image-1",
    category: "Utilities",
    title: "Project 1",
  },
  {
    image: "image-2",
    category: "AGRICULTURE",
    title: "Project 2",
  },
  {
    image: "image-3",
    category: "CIVIL & INFRASTRUCTURE",
    title: "Project 3",
  },
  {
    image: "image-4",
    category: "CIVIL & INFRASTRUCTURE",
    title: "Project 4",
  },
  {
    image: "image-5",
    category: "OIL & GAS",
    title: "Project 5",
  },
  {
    image: "image-6",
    category: "MINING & EXPLORATION",
    title: "Project 6",
  },
  {
    image: "image-7",
    category: "ENVIRONMENT MANAGEMENT",
    title: "Project 7",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioList2.slice(0, this.props.item);
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
                    <a href="/portfolio-details">{value.title}</a>
                  </h4>
                  <div className="portfolio-button">
                    <a className="rn-btn" href="/portfolio-details">
                      View Details
                    </a>
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
