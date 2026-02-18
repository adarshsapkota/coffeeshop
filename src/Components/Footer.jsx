import React from "react";
import "./Footer.css";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

import logo from "../assets/logo.png";

const QUICK_LINKS = [
  { id: "Hero", label: "Home" },
  { id: "Training", label: "Training" },
  { id: "Review", label: "Reviews" },
  { id: "Gallery", label: "Gallery" },
  { id: "Location", label: "Location" },
  { id: "Contact", label: "Contact" },
];

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight =
        document.querySelector(".navbar")?.offsetHeight || 70;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="coffee-footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-logo">
                    <img src={logo} alt="Coffee Dhara Logo" className="footer-logo-image" />
          </div>

          <div className="footer-links">
            <div className="footer-cta">
  <h3>Start Your Barista Journey</h3>
  <p>Get certified with hands-on coffee training</p>

  <a
    href="https://wa.me/9779745666634?text=Hello%20I%20want%20to%20book%20barista%20training"
    target="_blank"
    rel="noreferrer"
    className="cta-btn"
  >
    Book Training
  </a>
</div>

          <div className="links-column">
  <h3>Why Choose Us</h3>
  <ul>
    <li><span>Certified Barista Training</span></li>
    <li><span>Hands-on Practice</span></li>
    <li><span>Expert Trainers</span></li>
    <li><span>Job Guidance Support</span></li>
    <li><span>500+ Students Trained</span></li>
  </ul>
</div>
            <div className="links-column">
              <h3>Quick Links</h3>
              <ul>
                {QUICK_LINKS.map((link) => (
                  <li key={link.id}>
                    <span onClick={() => scrollToSection(link.id)}>
                      {link.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="links-column">
              <h3>Visit Us</h3>
              <ul>
                <li>
                  <span>Coffee Dhara Barista School</span>
                </li>
                <li>
                  <span>New Plaza Road, Putalisadak, Kathmandu</span>
                </li>
                <li>
                  <span>Nepal</span>
                </li>
                <li>
                  <span>+977 9745666634 9860583100</span>
                </li>
                <li>
                  <span>coffeedhara2022@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
  <a
    href="https://www.facebook.com/profile.php?id=100090850233563"
    aria-label="Facebook"
    className="social-link facebook"
    target="_blank"
    rel="noreferrer"
  >
    <CiFacebook />
  </a>

  <a
    href="https://www.instagram.com/coffeedhara/"
    aria-label="Instagram"
    className="social-link instagram"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.youtube.com/watch?v=Q9hRPEZK4oo"
    aria-label="YouTube"
    className="social-link youtube"
    target="_blank"
    rel="noreferrer"
  >
    <FaYoutube />
  </a>

  <a
    href="mailto:coffeedhara2022@gmail.com"
    aria-label="Email"
    className="social-link gmail"
  >
    <SiGmail />
  </a>
  <a
  href="https://wa.me/9779745666634"
  aria-label="WhatsApp"
  className="social-link whatsapp"
  target="_blank"
  rel="noreferrer"
>
  <FaWhatsapp />
</a>

</div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Coffee Dhara. Crafted with passion
          and freshly brewed coffee.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

