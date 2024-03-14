import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
        <h1 className="navbar-title">QuillAudits</h1>
      </div>

      <div className="navigation-container">
        <ul className="navigation-details-container">
            <li className="navigation-dropdown"><p>Services</p><IoIosArrowDown className="nav-icon" /></li>
            <li>Pricing</li>
            <li>Our Audits</li>
            <li className="navigation-dropdown"><p>Tools</p><IoIosArrowDown className="nav-icon" /></li>
            <li className="navigation-dropdown"><p>Resources</p><IoIosArrowDown className="nav-icon" /></li>
            <li>Refer-Earn-Secure</li>
        </ul>
      </div>

      <div className="button-container">
        <button className="button">Request An Audit</button>
      </div>
    </nav>
  );
};

export default Navbar;
