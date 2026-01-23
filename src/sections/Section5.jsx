import React from "react";

function Section5() {
  const ctaBox = [
    { id: 1, src: "/img/Iconcontainer1.png", alt: "", title: "Safe Storage" },
    { id: 2, src: "/img/Iconcontainer2.png", alt: "", title: "Secure" },
    { id: 3, src: "/img/Iconcontainer3.png", alt: "", title: "Earn Interest" },
    { id: 4, src: "/img/Iconcontainer4.png", alt: "", title: "Famili Plans" },
  ];
  return (
    <div className="section5-container">
      <div className="header-section">
        <h2>First Class Software</h2>
        <p>
          Get real-time insights, seamless transactions, and advanced
          <br />
          tools to manage your wealth effortlessly.
        </p>
      </div>
      <div className="icon-section-container">
        {ctaBox.map((box) => (
          <li key={box.id}>
            <img src={box.src} alt={box.alt} />
            <p>{box.title}</p>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Section5;
