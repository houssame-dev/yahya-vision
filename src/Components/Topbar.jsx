import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/yahyavision.png";
import menu from "../Images/menu-24.png";
import close from "../Images/close-24.png";
import "./Topbar.css";
import { Outlet, Link } from "react-router-dom";

function Top() {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar"
        fixed="top"
        expanded={expanded}
      >
        <Link href="/" onClick={handleNavItemClick}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        {expanded ? (
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            id="toggler"
            onClick={() => setExpanded(!expanded)}
          >
            <img src={close} alt="close-img" />
          </Navbar.Toggle>
        ) : (
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            id="toggler"
            onClick={() => setExpanded(!expanded)}
          >
            <img src={menu} alt="menu-img" />
          </Navbar.Toggle>
        )}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" id="nav-items">
            <Link to="/" className="link-item" onClick={handleNavItemClick}>
              Home
            </Link>
            <hr />
            <Link
              to="/gallery"
              className="link-item"
              onClick={handleNavItemClick}
            >
              Gallery
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
            <a
              href="#hire-me"
              className="link-button"
              onClick={handleNavItemClick}
            >
              Hire Me
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Top;
