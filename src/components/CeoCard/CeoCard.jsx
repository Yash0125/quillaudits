import React from "react";
import "./CeoCard.css";
import CeoTopVector from "./../../assets/CeoTopVector.png";
import CeoImg from "./../../assets/CeoImg.png";
import Star from "./../../assets/Star.png";
import CeoBottomVector from './../../assets/CeoBottomVector.png'

const CeoCard = () => {
  return (
    <div className="ceocard-container">
      <div className="ceocard-top-container">
        <img
          className="ceocard-top-img"
          src={CeoTopVector}
          alt="CeoTopVector-logo"
        />
        <div className="ceocard-top-details-container">
          <h3 className="ceocard-top-title">Sally Radley</h3>
          <p className="ceocard-top-descrption">WebGFi - CEO</p>
        </div>
        <img className="Ceo-img" src={CeoImg} alt="Ceo-img" />
      </div>
      <div className="ceocard-bottom-container">
        <div className="star-container">
          <img className="star-img" src={Star} alt="star" />
          <img className="star-img" src={Star} alt="star" />
          <img className="star-img" src={Star} alt="star" />
          <img className="star-img" src={Star} alt="star" />
          <img className="star-img" src={Star} alt="star" />
        </div>

        <p className="ceocard-bottom-descrption">“It felt like the auditing team was available within a short timeframe, which was excellent. The auditing process looked thorough, and I really appreciate the fact that you took time to investigate GAS optimizations.”</p>
        <div className="ceobottomvector-img-container">

        <img className="ceobottomvector-img" src={CeoBottomVector} alt="ceobottomvector-img" />
        </div>
      </div>
    </div>
  );
};

export default CeoCard;
