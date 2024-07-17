import React, { useEffect, useState } from "react";

function WisataNonAlam() {
    const [wisata, setWisata] = useState([]);

    useEffect(() => {
        fetch("/wisataNonAlam.json")
            .then(response => response.json())
            .then(data => setWisata(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="container-xxl py-5">
          <h1 className="section-title bg-white text-start text-primary pe-3">Rekomendasi Tempat Wisata Non Alam di Jawa Timur</h1>
          <p className="mb-4">Jawa Timur memiliki banyak tempat menarik untuk dikunjungi. Mulai dari destinasi alam hingga taman rekreasi. Itu benar! Bagi Anda yang ingin menikmati liburan bersama teman atau keluarga.</p>
          <p className="mb-4">Berikut ini kami akan membahas mengenai tempat rekreasi di Jawa Timur yang menarik untuk dikunjungi : </p>
              <div className="container">
                  <div className="row g-5">
                    {wisata.map((item, index) => ( 
                        <React.Fragment key={item.id}>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay={`${index * 0.2}s`} style={{ minHeight: '400px' }}>
                                <div className="position-relative h-100">
                                    <img className="img-fluid position-absolute w-100 h-100" src={item.image} alt="" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay={`${index * 0.2 + 0.2}s`}>
                                <h6 className="section-title bg-white text-start text-primary pe-3">{index + 1}. {item.name}</h6>
                                <p className="mb-4">{item.description}</p>
                                <p className="mb-4">{item.details}</p>                    
                            </div>
                        </React.Fragment>
                    ))}
                  </div>
              </div>
          </div>
      );
}

export default WisataNonAlam;