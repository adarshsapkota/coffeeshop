import React from "react";
import "./Footer.css";

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
            <h2>Coffee Dhara</h2>
            <p>Barista School & Coffee Shop</p>
            <div className="coffee-beans">
              <span className="coffee-bean"></span>
              <span className="coffee-bean"></span>
              <span className="coffee-bean"></span>
            </div>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <span onClick={() => scrollToSection("Hero")}>Home</span>
                </li>
                <li>
                  <span onClick={() => scrollToSection("Training")}>
                    Training
                  </span>
                </li>
                <li>
                  <span onClick={() => scrollToSection("Review")}>Reviews</span>
                </li>
                <li>
                  <span onClick={() => scrollToSection("Location")}>
                    Location
                  </span>
                </li>
                <li>
                  <span onClick={() => scrollToSection("Contact")}>
                    Contact
                  </span>
                </li>
              </ul>
            </div>

            <div className="links-column">
              <h3>Information</h3>
              <ul>
                <li>
                  <span>About Us</span>
                </li>
                <li>
                  <span>Our Story</span>
                </li>
                <li>
                  <span>Barista Courses</span>
                </li>
                <li>
                  <span>Coffee Menu</span>
                </li>
                <li>
                  <span>FAQs</span>
                </li>
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
                  <span>+977 9745666634</span>
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
              className="social-link"
            >
              <span className="social-icon">ⓕ</span>
            </a>
            <a
              href="https://www.instagram.com/coffeedhara/"
              aria-label="Instagram"
              className="social-link"
            >
              <span className="social-icon">🅾</span>
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="social-link"
            >
              <span className="social-icon"></span>
            </a>
            <a
              href="mailto:info@coffeedhara.com"
              aria-label="Email"
              className="social-link"
            >
              <span className="social-icon">✉</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-divider">
          <span className="divider-coffee-cup"></span>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Coffee Dhara. Crafted with passion
          and freshly brewed coffee.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
