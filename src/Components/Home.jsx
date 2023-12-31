import React, { useState, useEffect } from "react";
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
import AOS from "aos";

function Home() {
  const currentYear = new Date().getFullYear();
  const authorName = "Yahyavision";
  const [showInfiniteLooper, setShowInfiniteLooper] = useState(false);
  const [showInfiniteLooper1, setShowInfiniteLooper1] = useState(false);

  // Use the useEffect hook to show the InfiniteLooper component after 2 seconds.
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInfiniteLooper(true);
    }, 1500);

    // Clear the timer if the component unmounts to prevent memory leaks.
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Use the useEffect hook to show the InfiniteLooper component after 3 seconds.
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInfiniteLooper1(true);
    }, 2000);

    // Clear the timer if the component unmounts to prevent memory leaks.
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="home">
      <div className="second-home">
        {showInfiniteLooper && (
          <InfiniteLooper speed="25" direction="left">
            <div className="contentBlock contentBlock--one">
              HI, IT'S YAHYAVISION
            </div>
            <div className="contentBlock contentBlock--one">
              HI, IT'S YAHYAVISION
            </div>
          </InfiniteLooper>
        )}
        {showInfiniteLooper1 && (
          <Row className="row" data-aos="fade-right" data-aos-duration="1500">
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
                <Link to="/work" className="desc-span">
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
            </Col>
            <div className="copyright">
              <span>
                &copy; {currentYear} {authorName}.
              </span>
            </div>
          </Row>
        )}
      </div>
    </div>
  );
}

export default Home;
