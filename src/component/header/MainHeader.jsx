import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

import Scrollspy from "react-scrollspy";

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);

    this.stickyHeader = this.stickyHeader.bind(this);

    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  stickyHeader() {}

  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 50) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    return (
      <header className="header-area formobile-menu header--fixed ">
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <Link to="/">
                <p
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
                </p>
              </Link>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <Scrollspy
                className="mainmenu"
                items={[
                  "home",
                  "about",
                  "services",
                  "projects",
                  "team",
                  "team",
                ]}
                currentClassName="is-current"
                offset={-200}
              >
                <li>
                  <a href="#home"> Home </a>
                </li>

                <li>
                  <a href="#about"> About Us </a>
                </li>

                <li>
                  <a href="#services"> Services </a>
                </li>

                <li>
                  <a href="#projects"> Projects </a>
                </li>

                <li>
                  <a href="#team"> Team </a>
                </li>
              </Scrollspy>
            </nav>

            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>

            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
// into demo
export default MainHeader;
