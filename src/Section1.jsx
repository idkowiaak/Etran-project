import React from "react";

function Section1() {
  const LogoWall = [
    { id: 1, title: "Blooming", src: "/img/logo.png", alt: "" },
    { id: 2, title: "BuildRight", src: "/img/logo1.png", alt: "" },
    { id: 3, title: "Flowbot", src: "/img/logo2.png", alt: "" },
    { id: 4, title: "Expor", src: "/img/logo3.png", alt: "" },
    { id: 5, title: "Redo", src: "/img/logo4.png", alt: "" },
  ];
  return (
    <main className="content-area">
      <img src="public\img\Header image.png" alt="" />
      <h2>
        We escalate transfer efficiency
        <br />
        and productivity
      </h2>
      <ul className="logo-wall">
        {LogoWall.map((logo) => (
          <li key={logo.id} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
            {logo.title}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Section1;
