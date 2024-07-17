import React from 'react';

function About() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
                        <div className="position-relative h-100">
                            <img className="img-fluid position-absolute w-100 h-100" src="img/peta_jawa_timur.jpg" alt="" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <h6 className="section-title bg-white text-start text-primary pe-3">About Jawa Timur</h6>
                        <h3 className="mb-4">Sebagai provinsi terluas di Pulau Jawa, banyak wisata menarik yang dimiliki Jawa Timur. Semua jenis objek wisata ada di sini seperti pegunungan, air terjun, taman nasional, perbukitan, hingga pantai.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
