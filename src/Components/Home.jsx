import React from "react";
import "./Home.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import InfiniteLooper from "./InfiniteLooper";

function Home() {
  const currentYear = new Date().getFullYear();
  const authorName = "Yahyavision";
  return (
    <>
      <div className="home">
        <div className="second-home">
          <InfiniteLooper speed="15" direction="left">
            <div className="contentBlock contentBlock--one">
              HI, IT'S YAHYAVISION
            </div>
            <div className="contentBlock contentBlock--one">
              HI, IT'S YAHYAVISION
            </div>
          </InfiniteLooper>
          <Row className="row">
            <Col md={12} className="graphic-designer">
              <div className="wrapper">
                <div>
                  <span>Your</span>
                  <div className="scroller">
                    <div>
                      <span>Designer.</span>
                      <span>Vision.</span>
                      <span>Designer.</span>
                      <span>Idea.</span>
                      <span>Designer.</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} className="desc">
              <span>
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
              </span>
            </Col>
            <Col md={12} className="icons-fotter">
              <div className="social-media">
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
              </div>
              <div className="copyright">
                <span>
                  &copy; {currentYear} {authorName}.
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Home;
