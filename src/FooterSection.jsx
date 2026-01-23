import React from "react";

function FooterSection() {
  const contactLinks = [
    { id: 1, text: "Instagram", path: "" },
    { id: 2, text: "X", path: "" },
    { id: 3, text: "Linkedin", path: "" },
    { id: 4, text: "Github", path: "" },
  ];

  const termsAndConditions = [
    { id: 1, text: "Terms & Conditions", path: "" },
    { id: 2, text: "Privacy", path: "" },
  ];
  return (
    <div className="footer-section-container">
      <div className="footer-content">
        <div className="leftside-footer-container">
          <div className="leftside">
            <img src="/img/Left side footer container.png" alt="" />
          </div>
        </div>
        <div className="rightside-footer-container">
          <p>Contact</p>
          {contactLinks.map((link) => (
            <li key={link.id}>{link.text}</li>
          ))}
          <div className="terms">
            {termsAndConditions.map((terms) => (
              <li key={terms.id}>{terms.text}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
