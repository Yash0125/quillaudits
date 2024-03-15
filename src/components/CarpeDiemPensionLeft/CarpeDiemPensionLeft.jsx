import React from "react";
import "./CarpeDiemPensionLeft.css";
import CDPFlexibleImg from "./../../assets/CDPFlexible.png";
import CDPChallengeImg from "./../../assets/CDPChallenge.png";
import CeoCard from "../CeoCard/CeoCard";

const CarpeDiemPensionLeft = () => {
  const CarpeDiemStrategies=[
    {
      title:"1.Unauthorized Claim/Compound:",
      descrption : "Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time."
    },
    {
      title:"2.Precision Loss in mintCDP():",
      descrption : "Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function."
    },
    {
      title:"3.Multiplication Accuracy:",
      descrption : "Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations."
    },
    {
      title:"4.Incorrect Share Allocation:",
      descrption : "The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources."
    },
    {
      title:"5.Logic Error in Referral Handling:",
      descrption : "A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system"
    },
    {
      title:"6.Referral Exploitation:",
      descrption : "Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity."
    },
  ]
  return (
    <article className="carpediempensionleft-container">
      <p className="carpediempensionleft-description">
        Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
        self-managed, inclusive, globally portable fund. Unique for its token
        burn mechanism, it ensures a sustainable 4.32% inflation payout. With
        $143.11k and 41.06% of CDP already burned, it serves 35 users globally.
      </p>
      <section className="carpediem-flexible-container">
        <h3 className="carpediem-title">
          CarpeDiem Pension's Flexible, Blockchain-Enabled Future
        </h3>
        <p className="carpediempensionleft-description">
          CarpeDiem Pension redefines retirement planning with a unique approach
          that deviates from traditional pension funds. With no minimum age for
          retirement, it offers flexibility and freedom, ensuring all genders
          receive equal treatment. CarpeDiem Pension ensures blockchain
          transparency, anonymity, and global accessibility, safeguarding
          pensions during international relocation. Easily transfer pensions to
          loved ones; share wallet access. Re-deposit payouts for increased
          future benefits. Importantly, CarpeDiem Pension prioritizes deposit
          security by avoiding utilizing client funds for internal investments.
          To become a part of this forward-thinking pension scheme, one simply
          needs to install and configure a blockchain wallet.
        </p>
        <img
          className="carpediem-flexible-img"
          src={CDPFlexibleImg}
          alt="CDPFlexibleImg-description"
        />
      </section>

      <section className="carpediem-challenges">
        <h3 className="carpediem-title">
          CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy,
          Front-Running, and Infinite Minting
        </h3>
        <p className="carpediempensionleft-description">
          CarpeDiem Pension confronts critical security challenges, including
          the risks of reentrancy and front-running exploits.Malicious actors
          may exploit contract vulnerabilities, withdrawing excess funds or
          manipulating transaction timing for unfair advantages. System faces
          infinite minting threats, risking economic stability with endless
          creation of CDP tokens or pension shares.  Addressing these challenges
          is paramount to safeguarding the integrity and security of CarpeDiem
          Pension.
        </p>
        <img
          className="carpediem-challenge-img"
          src={CDPChallengeImg}
          alt="CDPChallengeImg-descripitoin"
        />
      </section>
      <section className="carpediem-journey-container">
        <h3 className="carpediem-title">
          CarpeDiem Pension's Journey Through our Audit Process
        </h3>
        <h4 className="carpediem-journey-subtitle">1.Information Gathering:</h4>
        <ul>
          <li className="carpediem-journey-list">
            Collected and reviewed all relevant documentation, including
            whitepaper, technical specifications, and design documents.
          </li>
          <li className="carpediem-journey-list">
            Obtained a clear understanding of the CDP platform's functionality,
            economic model, and intended user interactions.
          </li>
          <li className="carpediem-journey-list">
            Discussed client concerns and specific areas of focus for the audit.
          </li>
        </ul>
        <h4 className="carpediem-journey-subtitle">2.Manual Code Review:</h4>
        <ul>
          <li className="carpediem-journey-list">
            Conducted a line-by-line review of the smart contract code, focusing
            on:
            <ul>
              <li className="carpediem-journey-sublist">
                <span>Vulnerability identification:</span> Searching for known
                vulnerabilities like reentrancy, front-running, integer
                overflows, and access control issues etc.
              </li>
              <li className="carpediem-journey-sublist">
                <span>Logic flaws:</span> Identifying inconsistencies or
                unintended behaviors in the code logic.
              </li>
              <li className="carpediem-journey-sublist">
                <span>Tokenomics correctness:</span> Verifying if the code
                accurately implements the intended economic model and token
                distribution mechanisms.
              </li>
              <li className="carpediem-journey-sublist">
                <span>Solidity best practices:</span> Compliance with secure
                coding standards and adherence to established guidelines.
              </li>
            </ul>
          </li>
        </ul>
        <h4 className="carpediem-journey-subtitle">3.Functional Testing:</h4>
        <ul>
          <li className="carpediem-journey-list">
            Developed and executed a comprehensive set of test cases covering
            various user interactions and edge cases.
          </li>
          <li className="carpediem-journey-list">
            Simulated different deposit, claim, and referral scenarios to assess
            functionality and uncover potential exploits.
          </li>
          <li className="carpediem-journey-list">
            Focused on scenarios identified during the manual review and client
            concerns (e.g., infinite minting, reward calculation errors).
          </li>
          <li className="carpediem-journey-list">
            Leveraged tools like Hardhat and Ganache to deploy and test the
            smart contract locally.
          </li>
        </ul>
        <h4 className="carpediem-journey-subtitle">4.Automated Testing:</h4>
        <ul>
          <li className="carpediem-journey-list">
            Employed static analysis tools like Slither to identify
            vulnerabilities through automated code scanning.
          </li>
          <li className="carpediem-journey-list">
            Utilized symbolic execution tools like Mythril to explore various
            code execution paths and uncover potential attack vectors.
          </li>
          <li className="carpediem-journey-list">
            Integrated unit tests are written by the CDP team to verify specific
            contract functions and their behaviour.
          </li>
        </ul>
        <h4 className="carpediem-journey-subtitle">
          5.Reporting & Remediation:
        </h4>
        <ul>
          <li className="carpediem-journey-list">
            Prepared a detailed report outlining all identified vulnerabilities,
            categorized by severity and potential impact.
          </li>
          <li className="carpediem-journey-list">
            Provided clear recommendations for fixing each vulnerability,
            including code snippets and best practices.
          </li>
          <li className="carpediem-journey-list">
            Collaborated with the CDP team to prioritize and address the
            identified issues.
          </li>
          <li className="carpediem-journey-list">
            Conducted additional verification testing after vulnerability fixes
            were implemented.
          </li>
        </ul>
      </section>

      <section className="carpediem-audits-container">
        <h3 className="carpediem-title">
          QuillAudits' Strategic Approach to CDP Security Audits
        </h3>
        <p className="carpediempensionleft-description">
          We prioritize threat modeling based on platform-specific risks.
          Security-first, we identify and mitigate vulnerabilities beyond
          functionality testing. Using white-box and black-box tests, we conduct
          thorough vulnerability assessments. Maintaining transparency, we
          communicate openly with the CDP team. Emphasizing clarity, we present
          actionable insights for efficient issue resolution.
        </p>
      </section>
      <section className="carpediem-strategy-container">
        <h3 className="carpediem-title">
          Comprehensive Audit Discoveries and Remediation Strategies
        </h3>
        <p className="carpediempensionleft-description">
          Throughout the audit process, we unearthed a total of 33 issues,
          spanning from minor concerns to critical vulnerabilities. Among these,
          some of the critical issues identified were: Here's how we remediated
          them :
        </p>
        {CarpeDiemStrategies.map((details)=>(
          <div key={details.title}>
          <h4 className="carpediem-strategy-subtitle">
          {details.title}
        </h4>
        <ul>
          <li className="carpediem-strategy-list">
            {details.descrption}
          </li>
        </ul>
          </div>
        ))}
      </section>
      <section className="carpediem-impact-container">
        <h3 className="carpediem-title">Remediation & Impact:</h3>
        <p className="carpediempensionleft-description">All identified vulnerabilities were addressed by the CDP team, significantly enhancing the smart contract's security posture. Key improvements include</p>
        <ul>
          <li className="carpediem-journey-list">Implementation of reentrancy protection mechanisms.</li>
          <li className="carpediem-journey-list">Accurate handling of decimal values using established libraries or best practices.</li>
          <li className="carpediem-journey-list">Revised calculations with proper scaling factors</li>
          <li className="carpediem-journey-list">Fixing logic errors to ensure deposits and waiting periods are enforced.</li>
          <li className="carpediem-journey-list">Addressing referral system vulnerabilities to prevent abuse.</li>
        </ul>

        <span className="carpediem-impact-x-title">Embed this tweet : </span><a className="carpediem-impact-x-link" href=" https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20"> https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20</a>

        <p className="carpediempensionleft-description">CDP smart contract audit revealed and fixed critical vulnerabilities, safeguarding funds and ensuring platform stability. This underscores the need for proactive security in blockchain projects, crucial for financial asset management. Through audits and issue resolution, CDP reinforces platform security, bolstering user trust.</p>

        <CeoCard/>
      </section>
    </article>
  );
};

export default CarpeDiemPensionLeft;
