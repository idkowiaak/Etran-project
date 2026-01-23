import React from "react";

function Sidebar() {
  const contactLinks = [
    { id: 1, title: "Contact", path: "/" },
    { id: 2, title: "Social", path: "/" },
    { id: 3, title: "Address", path: "/" },
    { id: 4, title: "Legal Terms", path: "/" },
  ];

  const largeNewBtn = [
    {
      id: 1,
      title: "Instant Productivity",
      path: "/",
      src: "/img/bolt.png",
      alt: "bolt",
    },
    {
      id: 2,
      title: "Expense Management",
      path: "/",
      src: "/img/Globe.png",
      alt: "globe",
    },
    {
      id: 3,
      title: "Advanced Technology",
      path: "/",
      src: "/img/Approve.png",
      alt: "approve sign",
    },
  ];
  return (
    <div className="sidebar-container">
      <nav>
        <div className="logo">
          <img src="/img/Union.png" alt="" />
          Etran
        </div>
        <button className="get-started">Get started</button>
      </nav>
      <header>
        <h1>
          Money Transfers Made <span>Simple</span>
        </h1>
        <h2>No personal credit checks or founder guarantee.</h2>
      </header>
      <div className="our-offerings">
        <h3>Our offerings</h3>
        <div className="modules">
          {largeNewBtn.map((btn) => (
            <button key={btn.id} className="large-new-btn">
              <img src={btn.src} alt="" />
              {btn.title}
            </button>
          ))}
        </div>
      </div>
      <ul>
        {contactLinks.map((link) => (
          <li key={link.id}>
            <a href={link.path}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
