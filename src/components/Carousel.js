import React from 'react';

function Carousel() {
    return (
    <div className="container-fluid p-0 mb-5">
      <div className="owl-carousel header-carousel position-relative">
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="img/carousel1.jpg" alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Destinasi Wisata</h5>
                  <h1 className="display-3 text-white animated slideInDown">Gunung Bromo</h1>
                  <p className="fs-5 text-white mb-4 pb-2">Gunung Bromo, keindahan alam yang memukau di Jawa Timur. Dengan kawah berapi aktifnya yang mengeluarkan asap putih, Gunung Bromo menawarkan pengalaman spektakuler. Nikmati pemandangan matahari terbit yang menakjubkan dan petualangan seru di Laut Pasir dan Kawah Batok. Destinasi wajib bagi para pencinta alam dan petualang!</p>
                  {/* <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                  <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="img/carousel2.jpg" alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Destinasi Wisata</h5>
                  <h1 className="display-3 text-white animated slideInDown">Kawah Ijen</h1>
                  <p className="fs-5 text-white mb-4 pb-2">Kawah Ijen, keajaiban alam di Jawa Timur. Dikenal karena warna airnya yang biru dan api biru yang mengagumkan di malam hari, Kawah Ijen menawarkan pengalaman yang memikat. Nikmati panorama indah dan jalan kaki yang menantang untuk melihat danau kawah yang menakjubkan serta pertunjukan api biru yang langka. Destinasi yang wajib dikunjungi untuk pengalaman alam yang tak terlupakan!</p>
                  {/* <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                  <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="img/carousel3.jpg" alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Event dan Festival</h5>
                  <h1 className="display-3 text-white animated slideInDown">Festival Budaya Ponorogo Reog Nasional</h1>
                  <p className="fs-5 text-white mb-4 pb-2">Festival Budaya Ponorogo Reog Nasional adalah perayaan budaya yang menampilkan keindahan tarian Reog dari seluruh Indonesia. Acara ini mempertemukan penari dan musisi Reog untuk bersaing dalam pertunjukan yang penuh warna dan energi. Festival ini mempromosikan warisan budaya Indonesia dan menawarkan pengalaman budaya yang memukau bagi pengunjung.</p>
                  {/* <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                  <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="img/carousel4.jpg" alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Aktivitas Wisata</h5>
                  <h1 className="display-3 text-white animated slideInDown">Snorkeling Taman Nasional Baluran</h1>
                  <p className="fs-5 text-white mb-4 pb-2">Snorkeling di Taman Nasional Baluran menawarkan pengalaman menakjubkan dengan terumbu karang yang indah dan kehidupan laut yang kaya. Destinasi ini cocok bagi para penggemar alam bawah laut yang ingin menikmati keindahan laut Jawa Timur.</p>
                  {/* <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                  <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="img/carousel5.jpg" alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Destinasi Wisata</h5>
                  <h1 className="display-3 text-white animated slideInDown">Museum Angkut</h1>
                  <p className="fs-5 text-white mb-4 pb-2">Museum Angkut, destinasi wisata unik di Kota Batu, Jawa Timur. Menampilkan koleksi transportasi dari zaman dahulu hingga modern, museum ini mengajak pengunjung dalam perjalanan sejarah pergerakan manusia. Dari kereta kuno hingga mobil antik, Museum Angkut memukau dengan pameran interaktif yang memperkaya pengetahuan dan pengalaman wisata.</p>
                  {/* <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                  <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Carousel;
