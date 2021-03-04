import React from "react";
import "../assets/css/EmailSubscription.css";

function EmailSubscription() {
  return (
    <div className="email__subscription">
      <div className="email__subscription__container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-12">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-7">
                <div className="email__subscription__text">
                  Berlangganan newsletter spesial promo dan penawaran terbaik
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-5">
                <div className="email__subscription__form">
                  <div className="email__subscription__input__wrapper">
                    <input
                      type="text"
                      id="email"
                      className="email__subscription__input"
                      name="email"
                      placeholder="Masukkan Email Anda"
                    />
                    <button
                      className="email__subscription__button"
                      type="submit"
                    >
                      Berlangganan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSubscription;
