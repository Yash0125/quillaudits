import React from "react";
import "./Newsletter.css";
import NewsletterImg from "./../../assets/NewsletterImg.png";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-main-container">
        <div className="newsletter-left-container">
          <h3 className="newsletter-left-title">NEWSLETTER</h3>
          <h4 className="newsletter-left-subtitle">
            Security First News Letter by QuillAudits
          </h4>
          <p className="newsletter-left-description">
            Subscribe for the most Exclusive Weekly security based newsletter
            and covering all the recent hacks up to date.
          </p>
        </div>
        <div className="newsletter-right-container">
          <img
            className="newsletter-image"
            src={NewsletterImg}
            alt="Newsletter-IMG"
          />

          <div className="input-container">
            <input
              className="subscribe-input"
              type="text"
              placeholder="vitalik@ethereum.org"
            />
            <button className="button subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
