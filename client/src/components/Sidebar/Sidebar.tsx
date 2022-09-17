import React from "react";
import logo from "../../assets/logo.webp";
import profile from "../../assets/profile.jpeg";
import phone from "../../assets/phone.png";
import whatsapp from "../../assets/whatsapp.png";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarBox">
          <div className="sidebarTop">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="sidebarCenter">
            <p className="about">Creating Quality Products</p>
            <p className="about">Available kasaragod Only</p>
          </div>
          <div className="sidebarBottom">
            <a href="https://wa.me/+918156806998">
              <img src={whatsapp} alt="" className="icons" />
            </a>
            <a href="tel:+918714860998">
              <img src={phone} alt="" className="icons" />
            </a>
          </div>
          <img src={profile} alt="" className="profile" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
