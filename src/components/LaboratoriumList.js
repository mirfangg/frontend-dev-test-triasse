import React from "react";
import imgSearchPost from "../assets/images/img-search-post-1.png";
import "../assets/css/LaboratoriumList.css";

function LaboratoriumList() {
  return (
    <div className="lab__list">
      <div className="lab__list__item">
        {/* Image */}
        <div className="lab__list__item__image">
          <img src={imgSearchPost} alt="" />
        </div>
        <div className="lab__list__item__description">
          {/* Button */}
          <div className="lab__list__item__description__button">
            <button className="button" id="buttonOne">
              Datang ke lab
            </button>
            <button className="button" id="buttonTwo">
              Home service
            </button>
          </div>
          {/* Address */}
          <div className="lab__list__description__address">
            <span className="addressOne">Parahita Buncit</span>
            <span className="addressTwo">
              Jl. Warung Buncit Raya 150 Jakarta Selatan
            </span>
          </div>
          {/* Rating */}
          <div className="lab__list__description__rating">
            <span className="rating">
              <i className="fas fa-star"></i>
              <span>4.8/5</span>
            </span>
            <span className="info" id="reschedule__info">
              <li>Tidak bisa reschedule</li>
            </span>
            <span className="info" id="refund__info">
              <li>Tidak bisa refund</li>
            </span>
          </div>
        </div>
        <div className="lab__list__item__price">
          <div className="lab__list__item__price__discount">
            <span className="price__discount__item">
              Hemat 20%
            </span>
            <span className="price__discount__item">
              Rp370.500
            </span>
          </div>
          <span className="price">Rp250.578</span>
        </div>
      </div>
    </div>
  );
}

export default LaboratoriumList;
