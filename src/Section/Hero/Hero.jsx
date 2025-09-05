import React from "react";
import logo from "../../assets/logo.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="main-container">
      <div className="logo-container">
        <img src={logo} alt="Coffee Dhara Logo" className="logo" />
      </div>
      <div className="about">
        <h1>Welcome to Coffee Dhara</h1>
        <p>
          Founded in 2022, Coffee Dhara was born with a simple dream: to create
          a space where people can enjoy truly great coffee while also learning
          the art behind every cup. We are more than just a coffee shop – we are
          also a barista training school, dedicated to inspiring and educating
          the next generation of coffee professionals.
        </p>
        <p>
          At Coffee Dhara, we believe coffee is not just a drink, but an
          experience that connects people, sparks conversations, and tells
          stories. Every cup we serve is crafted with care, precision, and love
          for the bean. From sourcing quality ingredients to perfecting brewing
          techniques, we aim to deliver consistency and excellence in every sip.
        </p>
      </div>
    </div>
  );
}

export default Hero;
