import React from "react";
import "../assets/css/Topnav.css";
import calendar from "../assets/images/img-calendar.svg";
import message from "../assets/images/img-message.svg";
import email from "../assets/images/img-email.svg";

function Topnav() {
  return (
    <nav className="topnav">
      <div className="topnav__container container-fluid">
        {/* Calendar */}
        <div className="topnav__item">
          <span className="topnav__icon">
            <img
              src={calendar}
              alt=""
            />
          </span>
          <span className="topnav__text">Senin - Jum'at (09.00 - 18.00)</span>
        </div>
        {/* Message */}
        <div className="topnav__item">
          <span className="topnav__icon">
            <img
              src={message}
              alt=""
            />
          </span>
          <span className="topnav__text">+62811 1122 015</span>
        </div>
        {/* Email */}
        <div className="topnav__item">
          <span className="topnav__icon">
            <img
              src={email}
              alt=""
            />
          </span>
          <span className="topnav__text">cs@triasse.com</span>
        </div>
      </div>
    </nav>
  );
}

export default Topnav;
