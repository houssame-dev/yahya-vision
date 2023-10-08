import React from "react";
import "./Gallery.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { GalleryData } from "./GalleryData";

function Gallery() {
  return (
    <div className="gallery">
      <Container>
        <Row>
          {GalleryData.map((imageUrl, index) => (
            <Col key={index} xs={6} sm={6} md={4} lg={2} className="px-2 py-2">
              <Image
                src={imageUrl}
                alt={`Image ${index}`}
                fluid
                className="gallery-image"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Gallery;
