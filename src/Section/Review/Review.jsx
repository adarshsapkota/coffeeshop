import React, { useEffect } from "react";
import "./Review.css";

function Review() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="Review" className="review-section">
      <h2>Customer Reviews</h2>
      <div
        className="elfsight-app-6308b90c-d9cc-4e7d-acb8-f7ec4c9de644"
        data-elfsight-app-lazy
      />
    </section>
  );
}

export default Review;
