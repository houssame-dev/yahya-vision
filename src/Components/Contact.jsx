import React from "react";
import "./Contact.css";
import { ProgressBar } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact">
      <div className="second-contact">
        <h1>Contact Page</h1>
        <h1>
            Under Construction !
          </h1>
          <br />
          <ProgressBar
            className="progressbar"
            striped
            animated
            variant="danger"
            now={25}
            label={`${25}%`}
          />
      </div>
    </div>
  );
}

export default Contact;
