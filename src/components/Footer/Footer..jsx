import React from "react";
import "./Footer.css";
import QuillAuditsLogo from "./../../assets/QuillAuditsLogo.png";
import { MdMail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const AuditServices = [
    "Ethereum",
    "Polygon",
    "BSC",
    "Solana",
    "NEAR",
    "Algorand",
    "Tezos",
    "Hyperledger Fabric",
    "L1",
    "Polkadot",
    "Wallet",
    "ZkSync",
    "Starknet",
  ];

  const QuillEcosystem = [
    "QuillAI",
    "QuillCheck",
    "QuillShield",
    "QuillAcademy",
    "Web3Suggest",
    "Explore All Tools",
  ];

  const OtherServices = [
    "Red Teaming",
    "dApp Pentesting",
    "DeFi Diligence",
    "NFT Due Diligence",
    "Rug Pull Due Diligence",
    "Security Consultation",
    "Blockchain Forensics",
    "KYC (Know Your Customer)",
  ];
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <img
          className="quillauditslogo"
          src={QuillAuditsLogo}
          alt="QuillAuditsLogo"
        />
        <p className="footer-logo-description">Making Web3 a safer place</p>
      </div>
      <div className="footer-details-container">
        <div className="footer-left-container">
          <div className="footer-left-about-container">
            <h3 className="footer-left-about-title">More About Quill</h3>
            <div className="footer-left-about-details-container">
              <p>About Us</p>
              <p>FAQs</p>
              <p>Blockchains We Audit</p>
            </div>
            <div className="footer-left-about-contactus-container">
              <h4 className="footer-left-about-contactus-title">Contact Us:</h4>
              <div className="footer-left-about-contactus-mail-container">
                <MdMail className="footer-left-about-contactus-mail-icon" />
                <p className="footer-left-about-contactus-mail">
                  audits@quillhash.com
                </p>
              </div>
              <div className="footer-left-about-contactus-mail-container">
                <FaTelegramPlane className="footer-left-about-contactus-mail-icon" />
                <p className="footer-left-about-contactus-mail">
                  t.me/quillaudits
                </p>
              </div>
            </div>
            <div className="footer-left-about-location-container">
              <div className="footer-left-about-location-top-container">
                <FaLocationDot className="footer-left-about-location-icon" />
                <h4 className="footer-left-about-location-top-title">
                  Our Location:
                </h4>
              </div>
              <div className="footer-left-about-location-details-container">
                <p className="footer-left-about-location-description">
                  Office 104/105 Level 1,
                </p>
                <p className="footer-left-about-location-description">
                  Emaar Square, Building 4
                </p>
                <p className="footer-left-about-location-description">
                  Sheikh Mohammed Bin Rashid
                </p>
                <p className="footer-left-about-location-description">
                  Boulevard Downtown Dubai,
                </p>
                <p className="footer-left-about-location-description">
                  United Arab Emirates
                </p>
                <p className="footer-left-about-location-description">
                  P.O box: 416654
                </p>
              </div>
            </div>
          </div>
          <div className="footer-left-audit-services-container">
            <h3 className="footer-left-audit-services-title">Audit Services</h3>
            <div className="footer-left-audit-services-details-container">
              {AuditServices.map((audits) => (
                <p
                  key={audits}
                  className="footer-left-audit-services-description-container"
                >
                  {audits} Audit
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-right-container">
          <div className="footer-right-top-container">
            <div className="footer-right-top-ecosystem-container">
              <h3 className="footer-right-ecosystem-title">Quill Ecosystem</h3>
              <div className="footer-left-audit-services-details-container">
                {QuillEcosystem.map((system) => (
                  <p
                    key={system}
                    className="footer-left-audit-services-description-container"
                  >
                    {system}
                  </p>
                ))}
              </div>
            </div>
            <div className="footer-right-other-services-container">
              <h3 className="footer-other-services-title">Other Services</h3>
              <div className="footer-left-audit-services-details-container">
                {OtherServices.map((Service) => (
                  <p
                    key={Service}
                    className="footer-left-audit-services-description-container"
                  >
                    {Service}
                  </p>
                ))}
              </div>
            </div>
            <div className="footer-right-quick-links-container">
              <h3 className="footer-other-quick-links-title">Other Services</h3>
              <p className="footer-left-audit-services-description-container">
                Pricing
              </p>
              <p className="footer-left-audit-services-description-container">
                Audit Process
              </p>
              <p className="footer-left-audit-services-description-container">
                Our Audits
              </p>
              <p className="footer-left-audit-services-description-container">
                Testimonials
              </p>
              <p className="footer-left-audit-services-description-container">
                Security Synopsis
              </p>
              <p className="footer-left-audit-services-description-container">
                Blog
              </p>
              <p className="footer-left-audit-services-description-container">
                Clients
              </p>
              <p className="footer-left-audit-services-description-container">
                Careers <span className="footer-left-quick-links-span">Hiring</span>
              </p>
            </div>
          </div>
          <div className="footer-right-bottom-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
