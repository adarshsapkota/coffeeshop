import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";


const NAV_ITEMS = [
  { id: "Hero", label: "Home" },
  { id: "Training", label: "Training" },
  { id: "Review", label: "Reviews" },
  { id: "Gallery", label: "Gallery" },
  { id: "Location", label: "Location" },
  { id: "Contact", label: "Contact" },
];

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
        <img src={logo} alt="Coffee Dhara Logo" className="nav-logo-image" />
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="nav-link-btn"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
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

