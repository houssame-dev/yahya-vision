import React from "react";
import "./Home.css";
import { Col, Row } from "react-bootstrap";
import {
  FaSquareBehance,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

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
            <Col md={3} className="text-start my-auto py-3 px-3">
              <h1>Graphic Designer</h1>
            </Col>
            <Col md={6} className="text-start my-auto py-3 px-3">
              <h5>
                As a <span>graphic designer</span>, I'm here to turn your vision
                into compelling visuals. From custom logos to striking marketing
                materials, I specialize in delivering top-notch design solutions
                that make your brand shine. Let's collaborate and bring your
                creative ideas to life!
              </h5>
            </Col>
            <Col md={3} className="social-media">
              <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaSquareBehance />
                </a>
              </div>
              <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaSquareInstagram />
                </a>
              </div>
              <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaSquareXTwitter />
                </a>
              </div>
              <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
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
