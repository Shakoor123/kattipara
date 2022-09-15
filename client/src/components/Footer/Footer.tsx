import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="footerLeft">
          <div className="footerItem">
            <span className="footerItemLeft">Name :- </span>
            <span className="footerItemRight"> Aboobacker C E</span>
          </div>
          <div className="footerItem">
            <span className="footerItemLeft">place :- </span>
            <span className="footerItemRight"> Chembarikka</span>
          </div>
          <div className="footerItem">
            <span className="footerItemLeft">Mobile :- </span>
            <span className="footerItemRight"> 8714860998</span>
          </div>
        </div>
        <div className="footerRight">
          <iframe
            src="https://maps.app.goo.gl/aKg6DQPFpXk55iDm7"
            width="150"
            height="150"
            style={{ border: 0, borderRadius: 10 }}
            aria-hidden="false"
          >
            <span>abdul shakoor</span>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
