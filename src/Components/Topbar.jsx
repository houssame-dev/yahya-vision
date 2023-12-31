import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/yahyavision.png";
import "./Topbar.css";
import { Outlet, Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa6";
import AOS from "aos";

function Top() {
  const currentYear = new Date().getFullYear();
  const authorName = "Yahyavision";
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar px-5 py-3"
        expanded={expanded}
        fixed="top"
      >
        <Link
          to="/"
          onClick={handleNavItemClick}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src={logo} alt="logo" className="logo" />
        </Link>
        {expanded ? (
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            id="toggler"
            onClick={() => setExpanded(!expanded)}
          >
            <CgClose />
          </Navbar.Toggle>
        ) : (
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            id="toggler"
            onClick={() => setExpanded(!expanded)}
          >
            <TiThMenu />
          </Navbar.Toggle>
        )}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto"
            id="nav-items"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <hr />
            <Link to="/" className="link-item" onClick={handleNavItemClick}>
              Home
            </Link>
            <hr />
            <Link
              to="/work"
              className="link-item"
              onClick={handleNavItemClick}
            >
              Work
            </Link>
            <hr />
            <Link
              to="/contact"
              className="link-item"
              onClick={handleNavItemClick}
            >
              Contact
            </Link>
            <hr />
            <button
              href="#hire-me"
              className="link-button"
              onClick={handleNavItemClick}
            >
              Hire Me
            </button>
          </Nav>
          <hr />
          <Nav>
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
          </Nav>
          <Nav>
            <span className="copyright">
              &copy; {currentYear} {authorName}.
            </span>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Top;
