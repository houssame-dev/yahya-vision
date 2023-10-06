import React, { useEffect } from "react";
import "./Home.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import AOS from "aos";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="home">
        <div className="second-home">
          <section
            className="container"
            data-aos="flip-up"
            data-aos-duration="3000"
          >
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
          <Row className="row" data-aos="fade-right" data-aos-duration="3000">
            <Col md={12} className="graphic-designer">
              <h2>Graphic Designer</h2>
            </Col>
            <Col md={12} className="desc">
              <h5>
                Greetings from the vibrant heart of Morocco! Passion for design
                flows through my veins – from crafting unique logos to
                comprehensive branding, visionary creative direction, and the
                intricate artistry of every piece I create. Dive deep into my
                curated{" "}
                <Link to="/gallery" className="desc-span">
                  Gallery
                </Link>{" "}
                and let my work whisper stories to you. If any piece resonates
                or you're inspired with a fresh concept, don't hesitate to{" "}
                <Link to="/contact" className="desc-span">
                  Contact
                </Link>{" "}
                me. Let's start this creative adventure together!
              </h5>
            </Col>
            <Col md={12} className="social-media">
              <a
                href="https://www.instagram.com/yahyavision/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/yahyavision"
                target="_blank"
                rel="noopener noreferrer"
                className="x-icon"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/yahyavision-a37a12273/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.behance.net/yahyavison"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehance />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Home;
