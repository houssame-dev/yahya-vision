import React from "react";
import "./Home.css";
import ProgressBar from "react-bootstrap/ProgressBar";

function Home() {
  const now = 15;
  return (
    <>
      <div className="home">
        <div className="second-home">
          <h1>
            This Website is <br /> Under Construction !
          </h1>
          <br />
          <ProgressBar
            className="progressbar"
            striped
            animated
            variant="danger"
            now={now}
            label={`${now}%`}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
