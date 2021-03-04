import React from "react";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";
import Topnav from "./Topnav";
import logo from "../assets/images/img-brand-logo@3x.png";

function Header() {
  return (
    <>
      <Topnav />
      <header className="header">
        <div className="header__container container-fluid container-lg">
          <div class="header__row">
            {/* <a href="#" className="header__burger-menu js-menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </a> */}
            <div className="header__logo">
              <Link to="/">
                <img src={logo} alt="Triasse Logo" />
              </Link>
            </div>
            <div className="header__navwrapper">
              {/* 1st */}
              <Link to="/paket" className="header__link">
                <div className="header__item">Paket Test Darah</div>
              </Link>
              {/* 2nd */}
              <Link to="/laboratorium" className="header__link">
                <div className="header__item">Laboratorium</div>
              </Link>
              {/* 3rd */}
              <Link to="/artikel" className="header__link">
                <div className="header__item">Artikel</div>
              </Link>
              {/* 4th */}
              <Link to="/masuk" className="header__link">
                <button className="btn btn__opacity__primary">Masuk</button>
              </Link>
              {/* 5th */}
              <Link to="/daftar" className="header__link">
                <button className="btn btn-primary font-weight-bold">
                  Daftar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
