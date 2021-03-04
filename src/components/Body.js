import React from "react";
import "../assets/css/Body.css";
import { Link } from "react-router-dom";
import LaboratoriumList from "./LaboratoriumList";

function Body() {
  return (
    <div className="body">
      <div className="container-fluid container-lg">
        <div className="row">
          <p className="filter__text">Filter hasil pencarian</p>
        </div>

        <div className="row">
          <div className="filter__one col-12 col-lg-4">
            <div className="card__filter">
              <div className="card__filter__container">
                {/* Harga */}
                <div className="card__filter__price card-body">
                  <p className="card__filter__title">Harga</p>
                  <div className="form-group">
                    <div className="card__filter__check">
                      <input type="checkbox" />
                      <label htmlFor="">Terendah - tertinggi</label>
                    </div>
                    <div className="card__filter__check">
                      <input type="checkbox" />
                      <label htmlFor="">Tertinggi - terendah</label>
                    </div>
                  </div>
                </div>

                {/* Jenis Layanan */}
                <div className="card__filter__service card-body">
                  <p className="card__filter__title">Jenis Layanan</p>
                  <div className="form-group">
                    <div className="card__filter__check">
                      <input type="checkbox" />
                      <label htmlFor="">Home Service</label>
                    </div>
                    <div className="card__filter__check">
                      <input type="checkbox" />
                      <label htmlFor="">Datang ke lab</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="filter__two col-12 col-lg-8">
            <Link to="/package-detail">
              <LaboratoriumList />
            </Link>
            <Link to="/package-detail">
              <LaboratoriumList />
            </Link>
            <Link to="/package-detail">
              <LaboratoriumList />
            </Link>
            <Link to="/package-detail">
              <LaboratoriumList />
            </Link>
            <LaboratoriumList />
            <LaboratoriumList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
