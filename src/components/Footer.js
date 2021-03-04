import React from "react";
import "../assets/css/Footer.css";
import facebook from "../assets/images/img-icon-facebook.svg";
import instagram from "../assets/images/img-icon-instagram.svg";
import linkedin from "../assets/images/img-icon-linkedin.svg";
import pinterest from "../assets/images/img-icon-pinteres.svg";
import twitter from "../assets/images/img-icon-twitter.svg";
import youtube from "../assets/images/img-icon-youtube.svg";
import EmailSubscription from "./EmailSubscription";

function Footer() {
  return (
    <>
      <EmailSubscription />
      <div className="footer">
        <div className="footer__container container-fluid">
          <div className="footer__row row">
            {/* Triasse */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-3">
              <div className="footer__about">
                <img
                  className="footer__about__logo"
                  src="https://www.triasse.com/static/v2/assets/img/img-brand-logo-white.png"
                  alt=""
                />
                <div className="footer__about__description">
                  Platform pertama untuk tes laboratorium dan pemeriksaan
                  kesehatan di Indonesia yang memberikan pelanggan kemampuan
                  untuk membuat keputusan yang lebih baik bagi kesehatan mereka.
                </div>
              </div>
            </div>

            {/* Lainnya */}
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 order-2 order-lg-1">
              <div className="footer__links">
                <div className="footer__title">Lainnya</div>
                <ul>
                  <li>Syarat & Ketentuan</li>
                  <li>Karier</li>
                  <li>Kebijakan Privasi</li>
                  <li>Cara Kerja</li>
                  <li>Login</li>
                </ul>
              </div>
            </div>

            {/* Hubungi Kami */}
            <div className="col-6 col-md-6 col-lg-2 order-3 order-lg-2">
              <div className="footer__links">
                <div className="footer__title">Hubungi Kami</div>
                <ul>
                  <li>cs@triasse</li>
                  <li>021-35760497</li>
                  <li>08-1111-22-015</li>
                  <li>Senin - Jumat</li>
                  <li>(09.00 - 18.00 WIB)</li>
                </ul>
              </div>
            </div>

            {/* Alamat */}
            <div className="footer__address col-12 col-md-6 col-lg-3 order-4 order-lg-3">
              <div className="footer__links">
                <div className="footer__title">Alamat</div>
                <p>
                  Gedung Perkantoran Madison Park, Lantai 6 Unit B. No. 02. Jl.
                  Letjen S. Parman Kav 28, Jakarta 11470
                </p>
              </div>
            </div>

            {/* Media Sosial */}
            <div className="col-12 sm-12 col-md-12 col-lg-2 order-1 order-lg-4">
              <div className="footer__links">
                <div className="footer__title">Media Sosial</div>
                <div className="footer__icon__wrapper">
                  {/* Facebook */}
                  <a
                    className="footer__icon__link"
                    href="https://www.facebook.com/TriasseID/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={facebook}
                      title="Triasse Facebook"
                      alt="Triasse Facebook"
                    ></img>
                  </a>

                  {/* Instagram */}
                  <a
                    className="footer__icon__link"
                    href="https://www.instagram.com/triasseid/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={instagram}
                      title="Triasse Instagram"
                      alt="Triasse Instagram"
                    ></img>
                  </a>

                  {/* Linkedin */}
                  <a
                    className="footer__icon__link"
                    href="https://www.linkedin.com/company/triasse/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={linkedin}
                      title="Triasse Linkedin"
                      alt="Triasse Linkedin"
                    ></img>
                  </a>

                  {/* Pinterest */}
                  <a
                    className="footer__icon__link"
                    href="https://id.pinterest.com/TriasseID/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={pinterest}
                      title="Triasse Pinterest"
                      alt="Triasse Pinterest"
                    ></img>
                  </a>

                  {/* Twitter */}
                  <a
                    className="footer__icon__link"
                    href="https://twitter.com/TriasseID"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={twitter}
                      title="Triasse Twitter"
                      alt="Triasse Twitter"
                    ></img>
                  </a>

                  {/* Youtube */}
                  <a
                    className="footer__icon__link"
                    href="https://www.youtube.com/channel/UCcYQJiFpJ2QF-9lFsvHW0QQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={youtube}
                      title="Triasse Youtube"
                      alt="Triasse Youtube"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>
          Copyright © 2021 PT. Digital Medika Informatik. All rights reserved.
        </span>
      </div>
    </>
  );
}

export default Footer;
