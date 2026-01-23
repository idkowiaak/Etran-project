import React from "react";

function Section2() {
  const bentoBox = [
    { id: 1, src: "/img/Bento1.png", alt: "" },
    { id: 2, src: "/img/Bento2.png", alt: "" },
    { id: 3, src: "/img/Bento3.png", alt: "" },
    { id: 4, src: "/img/Bento4.png", alt: "" },
  ];

  return (
    <div className="section2-container">
      <h1>Get More Done In A Week</h1>
      <h2>
        Maximize your productivity with smarter tools designed to streamline
        your workflow to automate tasks, stay organized
      </h2>
      <ul className="bento-container">
        {bentoBox.map((box) => (
          <li key={box.id} className="bento-item">
            <img src={box.src} alt={box.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Section2;
