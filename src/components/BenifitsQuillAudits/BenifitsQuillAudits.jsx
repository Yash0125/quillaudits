import React from "react";
import "./BenifitsQuillAudits.css";

const BenifitsQuillAudits = () => {
  return (
    <div className="benifitsquillAudits-container">
      <div className="benifitsquillAudits-details-container">
        <div className="benifitsquillAudits-left-container">
            <h3 className="benifitsquillAudits-left-title">Before QuillAudits</h3>
            <p className="benifitsquillAudits-left-description">Exploits like reentrancy and front-running can let attackers withdraw extra funds and manipulate transaction timing for unfair gains</p>
            <p className="benifitsquillAudits-left-description">Vulnerabilities could allow users to mint CDP tokens or pension shares indefinitely, disrupting the system's economic balance.</p>
        </div>
        <div className="benifitsquillAudits-right-container">
        <h3 className="benifitsquillAudits-right-title">After QuillAudits</h3>
            <p className="benifitsquillAudits-right-description">Implementation of reentrancy protection mechanisms.</p>
            <p className="benifitsquillAudits-right-description">Ensure precision in decimal handling with standard libraries, recalculate accurately, fix logic errors, and secure referral systems against exploitation.</p>
        </div>
      </div>
        <h4 className="benifitsquillAudits-subtitle">See how QuillAudits is a trusted partner in 1000+ Audit stories</h4>
        <button className="button benifitsquillAudits-btn">Request an Audit</button>
    </div>
  );
};

export default BenifitsQuillAudits;
