import React from "react";
import "./Home.css";
import { Col, Row } from "react-bootstrap";
import instagram from "../Images/instagram_1_1.png";
import twitter from "../Images/twitter_2_1.png";
import behance from "../Images/social_1.png";
import linkedin from "../Images/linkedin_1.png";

function Home() {
  return (
    <>
      <div className="home">
        <div className="second-home">
          <section className="container">
            <div className="list">
              <div className="item">
                <span className="item-txt">HI, ITS YAHYAVISION. &nbsp;</span>
                <span className="item-txt">HI, ITS YAHYAVISION. &nbsp;</span>
                <span className="item-txt">HI, ITS YAHYAVISION. &nbsp;</span>
              </div>
            </div>
            <div className="list">
              <div className="item">
                <span className="item-txt">HI, ITS YAHYAVISION. &nbsp;</span>
                <span className="item-txt">HI, ITS YAHYAVISION. &nbsp;</span>
                <span className="item-txt">HI, ITS YAHYAVISION. &nbsp;</span>
              </div>
            </div>
          </section>
          <Row className="row">
            <Col md={12} className="text-start my-auto pb-1 px-3">
              <h1>Graphic Designer</h1>
            </Col>
            <Col md={12} className="text-start my-auto pb-5 px-3">
              <h5>
                As a <span>graphic designer</span>, I'm here to turn your vision
                into compelling visuals. From custom logos to striking marketing
                materials, I specialize in delivering top-notch design solutions
                that make your brand shine. Let's collaborate and bring your
                creative ideas to life!
              </h5>
            </Col>
            <Col md={12} className="social-media">
              <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="instagram-logo" />
                </a>
              </div>
              <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="twitter-logo" />
                </a>
              </div>
              <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="linkedin-logo" />
                </a>
              </div>
              <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src={behance} alt="behance-logo" />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Home;
