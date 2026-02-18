import React from "react";
import Barista from "../../assets/Barista.png";

import "./Training.css";

function Training() {
  return (
    <section id="Training" className="training-container">
      <div className="about-barista">
        <h1>Barista Classes</h1>
        <p>
          At Coffee Dhara, we offer a one-month intensive barista training
          program designed for anyone who wants to dive deep into the world of
          coffee. This course covers everything from espresso extraction,
          brewing methods, and milk steaming to latte art and customer service.
          With a perfect balance of theory and hands-on practice, you will learn
          the essential skills needed to work confidently in any cafe or start
          your own coffee journey.
        </p>
        <p>
          Throughout the program, our experienced trainers guide you step by
          step, ensuring you build both technical knowledge and practical speed
          behind the counter. By the end of the month, you will not just know
          how to brew coffee; you will know how to craft experiences, connect
          with customers, and carry the confidence of a professional barista.
        </p>
      </div>
      <div className="barista-img">
        <img src={Barista} alt="barista in training" className="photo" />
      </div>
    </section>
  );
}

export default Training;
