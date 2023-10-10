import React, { useEffect } from "react";
import "./Inferenced.css";
import { Link, useLocation } from "react-router-dom";
import img1 from "./images/inferenced1.png";
import img2 from "./images/inferenced-id1.png";
import { Image } from "react-bootstrap";

function Inferenced() {
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
    <div className="inferenced">
      <h1>Inferenced</h1>
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
         
            <li>Inferenced</li>
            <li>Branding</li>
            <li>1 month</li>
            <li>2023</li>
         
        </div>
      </div>
      <Link to="/contact" className="btn" type="button">
        Contact
      </Link>
      <div className="img-div">
        <Image src={img1} alt="img1" fluid/>
      </div>
      <div className="img-div">
        <Image src={img2} alt="img2" fluid/>
      </div>
      <div className="copyright">
        <span>
          &copy; {currentYear} {authorName}.
        </span>
      </div>
    </div>
  );
}

export default Inferenced;
