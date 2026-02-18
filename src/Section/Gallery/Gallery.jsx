import React from "react";
import "./Gallery.css";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";

const galleryItems = [p1, p2, p3, p4, p5];

function Gallery() {
  return (
    <section id="Gallery" className="gallery-section">
      <h2>Gallery</h2>

      <div className="gallery-slider">
        <div className="gallery-track">
          {[...galleryItems, ...galleryItems].map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </div>
      </div>

    </section>
  );
}


export default Gallery;
