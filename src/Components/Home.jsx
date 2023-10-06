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
            <Col md={12} className="graphic-designer">
              <h1>Graphic Designer</h1>
            </Col>
            <Col md={12} className="desc">
              <h5>
                Thats me! a passionate creator living in Morocco. My work spans
                across multiple disciplines from logo design to creative
                direction, branding, and art. Want a peek at my work? Check out
                my gallery. anyway you can contact me. Let's make something
                awesome together!
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
