import React from "react";
import { Link } from "react-router-dom";

import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const SocialShare = [
  {
    social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/sajjad-sardar/",
  },
  { social: <FaInstagram />, link: "https://www.instagram.com/tech_gis/" },
  { social: <FaTwitter />, link: "https://twitter.com/" },
  {
    social: <FaYoutube />,
    link:
      "https://www.youtube.com/channel/UCsgaByDryd_VPhn9eFh80IA?guided_help_flow=5",
  },
  {
    social: <FaFacebookF />,
    link: "https://www.facebook.com/home.php?ref=wizard",
  },
];

const MainFooter = () => {
  return (
    <div
      className="footer-style-2 ptb--30"
      data-black-overlay="6"
      style={{ background: "#000" }}
    >
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20">
                <Link to="/">
                  <img
                    src="/assets/images/logo/logo1.png"
                    alt="tech gis logo"
                    width="150px"
                    height="50px"
                  />
                  {/* <p
                  style={{
                    color: "white",
                  }}
                >
                  Tech
                  <span
                    style={{
                      color: "#2DAAC2",
                    }}
                  >
                    GIS
                  </span>
                </p> */}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a
                      href={`${val.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {val.social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
              <div className="text">
                <p>Copyright © 2021 TechGIS. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// all components
export default MainFooter;
