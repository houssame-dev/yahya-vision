import React, { useEffect } from "react";
import "./Gallery.css";
import { Col, Image, Row } from "react-bootstrap";
import { GalleryData } from "./GalleryData";
import { Link, useLocation } from "react-router-dom";
import { FaEye } from "react-icons/fa6";

function Gallery() {
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
    <div className="gallery">
      <div className="second-gallery">
        <Row>
          {GalleryData.map((imageUrl, index) => (
            <Col
              key={index}
              xs={6}
              sm={6}
              md={4}
              lg={2}
              className="px-2 py-2">
              {index === 0 ? (
                <div className="container">
                  <Image
                    src={imageUrl}
                    alt={`Image ${index}`}
                    fluid
                    className="gallery-image-clicked"
                  />
                  <div
                    className="overlay"
                    style={{ backgroundColor: "#141414" }}
                  >
                    <div className="inside">
                      <Link
                        to="/inferenced"
                        className="link"
                        style={{ backgroundColor: "white", color: "#141414" }}
                      >
                        <FaEye /> View
                      </Link>
                    </div>
                  </div>
                </div>
              ) : index === 1 ? (
                <div className="container">
                  <Image
                    src={imageUrl}
                    alt={`Image ${index}`}
                    fluid
                    className="gallery-image-clicked"
                  />
                  <div
                    className="overlay"
                    style={{ backgroundColor: "#f2d557" }}
                  >
                    <div className="inside">
                      <Link
                        to="/sando"
                        className="link"
                        style={{ backgroundColor: "black", color: "#f2d557" }}
                      >
                        <FaEye /> View
                      </Link>
                    </div>
                  </div>
                </div>
              ) : index === 2 ? (
                <div className="container">
                  <Image
                    src={imageUrl}
                    alt={`Image ${index}`}
                    fluid
                    className="gallery-image-clicked"
                  />
                  <div
                    className="overlay"
                    style={{ backgroundColor: "#CCC5B9" }}
                  >
                    <div className="inside">
                      <Link
                        to="/zero"
                        className="link"
                        style={{ backgroundColor: "black", color: "#CCC5B9" }}
                      >
                        <FaEye /> View
                      </Link>
                    </div>
                  </div>
                </div>
              ):(
                <Image
                  src={imageUrl}
                  alt={`Image ${index}`}
                  fluid
                  className="gallery-image"
                />
              )}
            </Col>
          ))}
        </Row>
        <div className="copyright">
          <span>
            &copy; {currentYear} {authorName}.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
