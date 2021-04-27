import React from "react";
import RecomCarousel from "./RecomCarousel";

const Recommendation = () => {
  return (
    <div className="testimonials">
      <h1>my happy mentors....</h1>
      <div className="container">
        <div className="testimonials-content">
          <RecomCarousel />
        </div>
      </div>
    </div>
  )
}

export default Recommendation;
