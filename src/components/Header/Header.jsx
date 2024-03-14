import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import cdPentionLogo from "./../../assets/CDPension.png";
import cdPentionBlackLogo from "./../../assets/CDPensionBlack.png";

const Header = () => {
  return (
    <header className="header-container">
      <Navbar />
      <div className="header-body-container">
        <div className="header-body-details-container">
          <div className="header-left-container">
            <div className="header-left-float-image-container">
              <img src={cdPentionBlackLogo} alt="" />
            </div>
            <div className="header-left-image-container">
              <img src={cdPentionLogo} alt="CDPrntion-Logo" />
            </div>
            <div className="header-left-description-container">
              <p className="header-left-description">
                Carpe Diem Pension, a blockchain-based retirement fund, offers
                permanent payouts through CDP deposits, with a 4.32% annual
                inflation claimable by depositors.
              </p>
            </div>
          </div>
          <div className="header-right-container">
            <div className="header-right-title-container">
              <h2>
                Securing Trust : Boosting Security and Strengthening Trust at
                Carpe Diem Pension
              </h2>
            </div>
            <div className="header-right-description-container">
              <p>
                QuillAudits enhances Carpe Diem Pension by addressing 33
                vulnerabilities on the Pulse blockchain, boosting security and
                user trust in digital pensions.
              </p>
            </div>
          </div>
        </div>
        <div className="header-end-container">
          <span className="header-end-text-first">
            QuillAudits &rarr; Resources &rarr;{" "}
          </span>
          <span className="header-end-text-second">Case Studies</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
