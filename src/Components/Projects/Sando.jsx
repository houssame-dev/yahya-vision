import React, { useEffect } from "react";
import "./Sando.css";
import { Link, useLocation } from "react-router-dom";
import img1 from "./images/sando.png";
import img2 from "./images/sando-id.png";
import { Card } from "react-bootstrap";
import { FaBehance } from "react-icons/fa";  
import { HiArrowRight } from "react-icons/hi2"; 

function Sando() {
  const currentYear = new Date().getFullYear();
  const authorName = "Yahyavision";
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="sando">
      <h1>Sando</h1>
      <p>
        Looking for something alike? Feel free to hit the contact button below!
      </p>
      <div className="info">
        <div className="i-1">
          <li>Client</li>
          <li>Contribution</li>
          <li>Duration</li>
          <li>Year</li>
        </div>
        <div className="i-2">
          <li>Sando</li>
          <li>Branding</li>
          <li>2 months</li>
          <li>2023</li>
        </div>
      </div>
      <Link to="/contact" className="btn" type="button">
        Contact
      </Link>

      <div className="img-div">
        <Card className="card">
          <Card.Img src={img1} alt="img1" />
        </Card>
      </div>
      <div className="img-div">
        <Card className="card">
          <Card.Img src={img2} alt="img2" />
        </Card>
      </div>
      <div className="behance">
        <span>See full project <HiArrowRight/></span>
        <span>
          <a
            href="https://www.behance.net/gallery/171797665/Brand-Identity-Logo-Design-Sando"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>
        </span>
      </div>
      <div className="copyright">
        <span>
          &copy; {currentYear} {authorName}.
        </span>
      </div>
    </div>
  );
}

export default Sando;
