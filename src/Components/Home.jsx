import React from "react";
import "./Home.css";
import { Col, Row } from "react-bootstrap";
import instagram from "../Images/instagram_1_1.png";
import twitter from "../Images/twitter_2_1.png";
import behance from "../Images/social_1.png";
import linkedin from "../Images/linkedin_1.png";
import { Link } from "react-router-dom";

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
                Hey there! I'm a creative spirit from beautiful Morocco,
                dabbling in everything from logo design to branding and art.
                Fancy a look at what I do? Pop over to my{" "}
                <span>
                  <Link to="/gallery" className="desc-span">
                    Gallery
                  </Link>{" "}
                </span>
                . And if you feel like chatting,{" "}
                <span>
                  <Link to="/contact" className="desc-span">
                    Contact
                  </Link>{" "}
                </span>{" "}
                me and let's create something awesome together!
              </h5>
            </Col>
            <Col md={12} className="social-media">
              <div>
                <a
                  href="https://www.instagram.com/yahyavision/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="instagram-logo" />
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/yahyavision"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="twitter-logo" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/yahyavision-a37a12273/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="linkedin-logo" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.behance.net/yahyavison"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
