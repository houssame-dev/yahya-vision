import React from "react";
import "./Gallery.css";
import { ProgressBar } from "react-bootstrap";

function Gallery() {
  return (
    <div className="gallery">
      <div className="second-gallery">
        <h1>Gallery Page</h1>
        <h1>
            Under Construction !
          </h1>
          <br />
          <ProgressBar
            className="progressbar"
            striped
            animated
            variant="danger"
            now={40}
            label={`${40}%`}
          />
      </div>
    </div>
  );
}

export default Gallery;
