import React from "react";
import teamData from "./data";

const TeamOne = (props) => {
  const itemSlice = teamData.slice(0, props.item);
  return (
    <div className="row">
      {itemSlice.map((value, i) => (
        <div className={`${props.column}`} key={i}>
          <div className={`team ${props.teamStyle}`}>
            <div className="thumbnail">
              <img
                src={`/assets/images/team/team-${value.images}.jpg`}
                alt="Blog Images"
              />
            </div>
            <div className="content">
              <h4 className="title">{value.title}</h4>
              <p className="designation">{value.designation}</p>
            </div>
            {/* <ul className="social-icon">
              {value.socialNetwork.map((social, index) => (
                <li key={index}>
                  <a href={`${social.url}`}>{social.icon}</a>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      ))}
    </div>
  );
};

// into Home
export default TeamOne;
