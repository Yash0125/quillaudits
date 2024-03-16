import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  console.log("close or open menu");
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
        <h1 className="navbar-title">QuillAudits</h1>
      </div>

      <div className="navigation-container">
        <ul className="navigation-details-container">
          <li className="navigation-dropdown">
            <p>Services</p>
            <IoIosArrowDown className="nav-icon" />
          </li>
          <li>Pricing</li>
          <li>Our Audits</li>
          <li className="navigation-dropdown">
            <p>Tools</p>
            <IoIosArrowDown className="nav-icon" />
          </li>
          <li className="navigation-dropdown">
            <p>Resources</p>
            <IoIosArrowDown className="nav-icon" />
          </li>
          <li>Refer-Earn-Secure</li>
        </ul>
      </div>

      <div className="button-container">
        <button className="button">Request An Audit</button>
      </div>

      <div onClick={handleMenu} className="menu-container">
        <IoMenu className="menu-icon" />
      </div>

      {showMenu && (
        <div className="mobilemenu-container">
          <div onClick={handleMenu} className="close-icon-container">
            <RxCross2 className="close-icon" />
          </div>
          <ul className="mobilemenu-details-container">
            <li className="mobilemenu-dropdown">
              <p>Services</p>
              <IoIosArrowDown className="mobilemenu-icon" />
            </li>
            <li>Pricing</li>
            <li>Our Audits</li>
            <li className="mobilemenu-dropdown">
              <p>Tools</p>
              <IoIosArrowDown className="mobilemenu-icon" />
            </li>
            <li className="mobilemenu-dropdown">
              <p>Resources</p>
              <IoIosArrowDown className="mobilemenu-icon" />
            </li>
            <li>Refer-Earn-Secure</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
