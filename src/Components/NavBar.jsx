import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <span>Coffee Dhara</span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li onClick={() => scrollToSection("Hero")}>Home</li>
          <li onClick={() => scrollToSection("Training")}>Training</li>
          <li onClick={() => scrollToSection("Review")}>Reviews</li>
          <li onClick={() => scrollToSection("Gallery")}>Gallery</li>
          <li onClick={() => scrollToSection("Location")}>Location</li>
          <li onClick={() => scrollToSection("Contact")}>Contact</li>
        </ul>

        <div className="nav-connect" onClick={() => scrollToSection("Contact")}>
          Connect With Us
        </div>

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;
