import React, { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

import Snackbar from "@material-ui/core/Snackbar";
import Loader from "../Loader";

import apiKeys from "../../apikeys";

const MainContact = (props) => {
  const [name, setName] = useState("");
  const [nameHelper, setNameHelper] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isBusy, setIsBusy] = useState(false);
  const [open, setOpen] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "Dialo",
  });

  const onChanged = (e) => {
    let valid;
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;

      case "name":
        setName(e.target.value);
        valid = /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$/.test(
          e.target.value
        );

        if (!valid) {
          setNameHelper("Invalid Name");
        } else {
          setNameHelper("");
        }
        break;

      default:
        break;
    }
  };

  const onFormSubmitted = (e) => {
    e.preventDefault();

    setIsBusy(true);

    emailjs
      .sendForm("gmail", apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          setIsBusy(false);
          setOpen(false);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setAlert({
            open: true,
            message: "Message Sent Successfully",
            backgroundColor: "#4bb543",
          });
        },
        (error) => {
          console.log(error.text);
          setIsBusy(false);
          setOpen(false);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setAlert({
            open: true,
            message: "something went wrong! Please try again",
            backgroundColor: "#ff3232",
          });
        }
      );
  };

  let submitButton;
  let loader;

  if (!isBusy) {
    submitButton = (
      <button
        className="rn-button-style--2 btn-solid submitButton"
        type="submit"
        value="submit"
        name="submit"
        id="mc-embedded-subscribe"
        onClick={() => setOpen(true)}
        disabled={
          name.length === 0 ||
          email.length === 0 ||
          message.length === 0 ||
          subject.length === 0
        }
      >
        Send Message
      </button>
    );
  } else {
    submitButton = "";
  }

  if (isBusy) {
    loader = (
      <div>
        <Loader />
        <p> Sending... </p>
      </div>
    );
  } else {
    loader = "";
  }

  return (
    <div className="contact-form--1">
      <div className="container">
        <div className="row row--35 align-items-start">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title"> Contact Us </h2>
            </div>
            <div className="form-wrapper">
              <form onSubmit={onFormSubmitted}>
                <label htmlFor="name">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={onChanged}
                    placeholder="Your Name"
                  />
                </label>

                <label htmlFor="email">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={onChanged}
                    placeholder="Your Email"
                  />
                </label>

                <label htmlFor="subject">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={subject}
                    // onChange={onChanged}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Write a Subject"
                  />
                </label>
                <label htmlFor="message">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    // onChange={onChanged}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                  />
                </label>

                {submitButton}
                {loader}

                {/* {!isBusy ? (
                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Send Message
                  </button>
                ) : (
                  <Loader />
                )} */}
              </form>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail mb_md--30 mb_sm--30">
              <img
                src="/assets/images/about/about-6.jpg"
                alt="Drone is hovering at the top surface of the wind turbine to detect if any maintenance required."
              />
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={3000}
      />
    </div>
  );
};

// into Contact
export default MainContact;
