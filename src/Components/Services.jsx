import React from "react";
import "./Services.css";
import { ProgressBar } from "react-bootstrap";

function Services() {
  return (
    <div className="services">
      <div className="second-services">
        <h1>Services Page</h1>
        <h1>
            Under Construction !
          </h1>
          <br />
          <ProgressBar
            className="progressbar"
            striped
            animated
            variant="danger"
            now={15}
            label={`${15}%`}
          />
      </div>
    </div>
  );
}

export default Services;
