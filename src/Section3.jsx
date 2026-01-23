import React from "react";

function Section3() {
  const benefitBox = [
    {
      id: 1,
      src: "/img/Benefit1.png",
      alt: "/",
      heading: "Scale Your Team, Not Your Card Expenses",
      paragraph:
        "Issue virtual and physical cards at no additional cost to support teams of any size.",
    },
    {
      id: 2,
      src: "/img/Benefit2.png",
      alt: "/",
      heading: "Effortless Paper Tracking, Mobile Convenience",
      paragraph:
        "Get precise control—at scale—with the ability to lock any card and restrict any type of spend.",
    },
  ];
  return (
    <div className="Reliable-app-section">
      <h2>The Most Reliable App</h2>
      <div className="section3-content">
        <div className="benefit-container">
          {benefitBox.map((benefit) => (
            <div key={benefit.id} className="benefit-item">
              <img src={benefit.src} alt={benefit.alt} />
              <h3>{benefit.heading}</h3>
              <p>{benefit.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section3;
