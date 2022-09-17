import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
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
    </div>
  );
};

export default Footer;
