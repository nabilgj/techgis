import React from "react";
import { advisors } from "./data";

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TeamAdvisors = (props) => {
  const itemSlice = advisors.slice(0, props.item);
  return (
    <div className="row">
      {itemSlice.map((value, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="team">
            <div className="thumbnail">
              <img
                className="w-100"
                src={`/assets/images/team/team-${value.images}.jpg`}
                alt="Team Member Images"
              />
            </div>
            <div className="content">
              <h4 className="title">{value.name}</h4>
              <p className="designation"> {value.designation}</p>
            </div>
            <ul className="social-icon">
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="http://linkedin.com/">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

// into Team
export default TeamAdvisors;
