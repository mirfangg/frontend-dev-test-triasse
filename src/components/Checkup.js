import React from "react";
import "../assets/css/Checkup.css";
import FormGroup from "./FormGroup";
import doctor from "../assets/images/img-doctor.svg";
import pin from "../assets/images/img-icon-pin.svg";
import pinMap from "../assets/images/img-icon-pin-map.svg";
import stetoscop from "../assets/images/img-icon-stetoscop.svg";

function Checkup() {
  return (
    <div className="checkup checkup__search">
      <div className="checkupcard card border-0">
        {/* Checkup header */}
        <div className="checkupcard__header">
          <div className="checkupcard__header__container container-lg">
            <div className="checkupcard__header__title__description__container">
              {/* Title */}
              <h1 className="checkupcard__header__title">
                Pilih Jenis Pemeriksaan
              </h1>
              {/* Description */}
              <div className="checkupcard__header__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            {/* Image */}
            <img
              className="checkupcard__header__image"
              src={doctor}
              alt="doctor"
            />
          </div>
        </div>

        {/* Checkup body */}
        <div className="checkupcard__body card-body">
          <div className="checkupcard__body__container">
            <div className="form-row">
              {/* Provinsi */}
              <FormGroup
                label="Provinsi"
                image={pin}
                location="DKI Jakarta"
                id="selectProvinsi"
              />
              {/* Kota/Kabupaten */}
              <FormGroup
                label="Kota/Kabupaten"
                image={pinMap}
                location="Jakarta Pusat"
                id="selectKotaKabupaten"
              />
              {/* Paket & jenis pemeriksaan */}
              <div className="form-group col">
                <label className="font-sm">Paket & jenis pemeriksaan</label>
                <div className="custom-select-input-group">
                  <span className="custom-select-input-group__icon">
                    <img src={stetoscop} alt="stetoscop" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPaketJenisPemeriksaan"
                    placeholder="Pap Smear"
                  />
                </div>
              </div>
            </div>

            <div className="selected__checkup__container">
              <span className="btn btn-outline-success">
                <span className="align-middle">
                  Paket Skrining Diabetes Melitus
                </span>
                <span className="close ml-3"></span>
              </span>

              <span className="btn btn-outline-success">
                <span className="align-middle">Glukosa Puasa*</span>
                <span className="close ml-3"></span>
              </span>

              <span className="btn btn-outline-success">
                <span className="align-middle">
                  Cholesterol (kolesterol) Total
                </span>
                <span className="close ml-3"></span>
              </span>

              <span className="btn btn-outline-success">
                <span className="align-middle">
                  Cholesterol (kolesterol) HDl*
                </span>
                <span className="close ml-3"></span>
              </span>

              <span className="btn btn-outline-success">
                <span className="align-middle">Insulin</span>
                <span className="close ml-3"></span>
              </span>

              <span className="btn btn-outline-success">
                <span className="align-middle">Pap Smear</span>
                <span className="close ml-3"></span>
              </span>

              <button className="btn btn-secondary mr-3">
                Hapus semua
              </button>
            </div>
            {/* <div class="find__lab__button"> */}
            <button className="btn btn-secondary" id="findLabBtn">
              Cari Lab
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkup;
