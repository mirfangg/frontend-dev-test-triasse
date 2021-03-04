import React from "react";
import "../assets/css/PackageDetail.css";
import Footer from "./Footer";
import Header from "./Header";
import imgArticle from "../assets/images/img-article-1.jpg";
import imgSearchPost from "../assets/images/img-search-post-1.png";

function PackageDetail() {
  return (
    <>
      <Header />
      <div className="package__detail">
        <div className="container-fluid container-lg">
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className="package__detail__item">
                <div className="card__filter">
                  <img src={imgArticle} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h4 className="card-title">
                      Paket Skrining Diabetes Melitus
                    </h4>
                    <section className="section__one">
                      <p className="title">Informasi detil</p>
                      <p>
                        Diabetes Melitus yang juga dikenal di Indonesia dengan
                        istilah penyakit kencing manis atau penyakit gula. Tubuh
                        pasien yang menderita diabetes melitus tidak dapat
                        merespon hormon insulin yang dihasilkan oleh organ
                        pankreas, sehingga kadar gula darah meningkat dan
                        menyebabkan komplikasi jangka pendek maupun jangka
                        panjang.
                      </p>
                      <p>
                        Diabetes merupakan salah satu penyebab kematian
                        tertinggi di dunia, bahkan di Indonesia.
                      </p>
                      <p>
                        Paket Skrining Diabetes Melitus yang disediakan Triasse
                        terdiri dari tiga jenis tes, yaitu:
                      </p>
                      <p>
                        1. Glukosa Puasa: Pemeriksaan glukosa dalam darah ini
                        baru bisa dilakukan setelah Anda puasa selama 8-10 jam
                        untuk mendapatkan hasil yang akurat. Pengecekan glukosa
                        ini dilakukan untuk mengetahui hipoglemik atau
                        hiperglikemik untuk membantu memastikan diagnosis
                        diabetes atau untuk memantau kadar gula diabetes. Tes
                        glukosa puasa juga dapat membantu mendiagnosis
                        prediabetes.
                      </p>
                      <p>
                        2. HbA1c (A1c): Tes hemoglobin terglikasi (HbA1c) dapat
                        membantu mengecek rata-rata kadar gula darah Anda dalam
                        periode 2-4 bulan. HbA1c adalah gugus heterogen yang
                        terbentuk dari reaksi kimia antara hemoglobin dan
                        glukosa. Pemeriksaan ini perlu dilakukan saat baru
                        terdiagnosis DM, DM berada pada kondisi harus tergantung
                        pada insulin, dan kondisi DM yang tidak tergantung
                        insulin. Tes ini juga diperlukan untuk mengendalikan
                        kondisi DM dan memperkecil risiko komplikasi diabetes.
                      </p>
                      <p>
                        3. Urine Lengkap/Rutin: Tes urine untuk pemeriksaan
                        diabetes adalah untuk mendeteksi glukosa lewat urine.
                      </p>
                    </section>
                    <section className="section__two">
                      <p className="title">Persiapan</p>
                      <p>Perlu puasa 10 - 12 Jam</p>
                    </section>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3">
              <div className="side__information">
                {/* Title */}
                <div className="side__information__title">
                  <p>Paket Skrining Diabetes Melitus</p>
                </div>
                {/* Detail */}
                <div className="side__information__detail">
                  <div className="side__information__detail__image">
                    <img src={imgSearchPost} alt="" />
                  </div>
                  <div className="side__information__detail__address">
                    <span className="address__title">Parahita Buncit</span>
                    <span className="address__rating">
                      <i className="fas fa-star"></i>
                      <span className="rating__number">4.8</span>
                    </span>
                    <span className="address__street">
                      Jl. Warung Buncit Raya 150 Jakarta Selatan
                    </span>
                    <span className="address__map">Lihat peta</span>
                  </div>
                </div>
                {/* Reschedule & Refund */}
                <div className="side__information__reschedule__refund">
                  <span className="info__res">
                    <li>Tidak bisa reschedule</li>
                  </span>
                  <span className="info__ref">
                    <li>Tidak bisa refund</li>
                  </span>
                </div>
                {/* Total Price */}
                <div className="side__information__total__price">
                  <div className="before__disc">
                    <span className="price__disc__item">Hemat 20%</span>
                    <span className="price__disc__item">Rp270.500</span>
                  </div>
                  <div className="after__disc">
                    <span>Rp150.578</span>
                  </div>
                  <button className="order__now" type="submit">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PackageDetail;
