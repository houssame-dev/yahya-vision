import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/yahyavision.png";
import menu from "../Images/menu-24.png";
import close from "../Images/close-24.png";
import "./Topbar.css";

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
        <Container>
          <Nav.Link href="/" onClick={handleNavItemClick}>
            <img src={logo} alt="logo" className="logo" />
          </Nav.Link>
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
              <a
                href="#home"
                className="link-item"
                onClick={handleNavItemClick}
              >
                Home
              </a>
              <hr />
              <a
                href="#about"
                className="link-item"
                onClick={handleNavItemClick}
              >
                About
              </a>
              <hr />
              <a
                href="#services"
                className="link-item"
                onClick={handleNavItemClick}
              >
                Services
              </a>
              <hr />
              <a
                href="#portfolio"
                className="link-item"
                onClick={handleNavItemClick}
              >
                Portfolio
              </a>
              <hr />
              <a
                href="#contact"
                className="link-item"
                onClick={handleNavItemClick}
              >
                Contact
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Top;
