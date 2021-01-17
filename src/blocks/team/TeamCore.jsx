import React from "react";
import teamCore from "./data";
// import { NavLink } from "react-router-dom";

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TeamCore = (props) => {
  const itemSlice = teamCore.slice(0, props.item);
  return (
    <div className="row">
      {itemSlice.map((value, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={value.name}>
          <div className="team">
            <div className="thumbnail">
              <img
                className="w-100"
                src={`/assets/images/team/team-${value.images}.jpg`}
                alt="These are some drone phots that are hovering in the air and 1st one is set on the table."
              />
            </div>
            <div className="content">
              <h4 className="title">{value.name}</h4>
              <p className="designation"> {value.designation}</p>
            </div>
            <ul className="social-icon">
              <li>
                <a
                  href={`${value.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href={`${value.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href={`${value.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
export default TeamCore;
