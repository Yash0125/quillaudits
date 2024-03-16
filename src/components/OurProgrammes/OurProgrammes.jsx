import React from "react";
import "./OurProgrammes.css";

const OurProgrammes = () => {
  return (
    <div className="ourprogrammes-container">
      <h3 className="ourprogrammes-title">OurProgrammes</h3>
      <div className="ourprogrammes-btn-container">
        <button className="button ourprogrammes-btn">Refer-Earn-Secure</button>
        <button className="button ourprogrammes-btn">WAGSI Grants</button>
        <button className="button ourprogrammes-btn">Ambassador Program</button>
        <button className="button ourprogrammes-btn">
          Partnership Program
        </button>
      </div>
    </div>
  );
};

export default OurProgrammes;
