import React from "react";
import "./Home.css";
// import ProgressBar from "react-bootstrap/ProgressBar";

function Home() {
  return (
    <>
      <div className="home">
        <div className="second-home">
          <section className="container">
            <div className="list">
              <div className="item">
                <span className="item-txt">HI, ITS YAHYAVISION.</span>
                <span className="item-d">
                  <p className="item-dot dot"></p>
                </span>
              </div>
            </div>
            <div className="list">
              <div className="item">
                <span className="item-txt">HI, ITS YAHYAVISION.</span>
                <span className="item-d">
                  <p className="item-dot dot"></p>
                </span>
              </div>
            </div>
          </section>

          {/* <h1>
            This Website is <br /> Under Construction !
          </h1>
          <br />
          <ProgressBar
            className="progressbar"
            striped
            animated
            variant="danger"
            now={15}
            label={`${15}%`}
          /> */}
        </div>
      </div>
    </>
  );
}

export default Home;
