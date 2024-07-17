import React from 'react';

function Footer() {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <h2 className="text-white mb-3">Wisata Lainya</h2>
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Gunungan</h4>
                        <p className="btn btn-link">Gunung Kawi</p>
                        <p className="btn btn-link">Gunung Arjuno-Welirang</p>
                        <p className="btn btn-link">Gunung Argopuro</p>
                        <p className="btn btn-link">Gunung Lawu</p>
                        <p className="btn btn-link">Gunung Raung</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Pantai</h4>
                        <p className="btn btn-link">Pantai Sukamade</p>
                        <p className="btn btn-link">Pantai Pasir Putih</p>
                        <p className="btn btn-link">Pantai Klayar</p>
                        <p className="btn btn-link">Pantai Papuma</p>
                        <p className="btn btn-link">Pantai Pulau Merah</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Taman Hiburan</h4>
                        <p className="btn btn-link">Kampung Coklat</p>
                        <p className="btn btn-link">Malang Night Paradise</p>
                        <p className="btn btn-link">Echo Green Park</p>
                        <p className="btn btn-link">Indonesia Safari Park</p>
                        <p className="btn btn-link">Atlantis Land</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Museum</h4>
                        <p className="btn btn-link">Museum Mpu Tantular</p>
                        <p className="btn btn-link">Museum Satwa</p>
                        <p className="btn btn-link">Museum Musik Indonesia</p>
                        <p className="btn btn-link">Museum Majapahit Trowulan</p>
                        <p className="btn btn-link"> Museum Surabaya Siola</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                           <h4 className="text-white mb-3">Made By Kelompok 10</h4>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="/">Home</a>
                                <a href="/Team">Our Team</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
