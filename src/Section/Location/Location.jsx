import React from "react";
import "./Location.css";

function Location() {
  return (
    <div className="location-container">
      <div className="location-info">
        <h1>Visit Coffee Dhara</h1>
        <p>
          Come experience the art of coffee at our welcoming location. We're
          conveniently situated in the heart of the city, offering a cozy
          atmosphere where you can enjoy expertly crafted beverages and learn
          the skills to become a barista yourself.
        </p>
        <div className="address">
          <h2>Our Location</h2>
          <p>Coffee Dhara Barista School</p>
          <p>Rudra Bhawan, New plaza road, Putalisadak, Kathmandu </p>
          <p>Nepal</p>
        </div>
        <div className="hours">
          <h2>Opening Hours</h2>
          <p>Sunday - Friday: 6:00 AM - 8:00 PM</p>
          <p>Saturday - Sunday: 7:00 AM - 8:00 PM</p>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.3269392726393!2d85.32030027550933!3d27.70092537618616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f3d27fcfa7%3A0x61c3b62c8010395e!2sCoffee%20Dhara%20Barista%20School!5e1!3m2!1sen!2snp!4v1756375654831!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Coffee Dhara Barista School Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
