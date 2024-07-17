import React, { useEffect, useState } from "react";

function WisataAlam() {
    const [wisata, setWisata] = useState([]);

    useEffect(() => {
        fetch("/wisataAlam.json")
            .then(response => response.json())
            .then(data => setWisata(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
    <div className="container-xxl py-5">
        <h1 className="section-title bg-white text-start text-primary pe-3">Rekomendasi Tempat Wisata Alam di Jawa Timur</h1>
        <p className="mb-4">Jawa Timur menawarkan banyak destinasi keindahan alam, mulai dari taman nasional, pantai, gunung, hingga pulau eksotis. Orang Indonesia pasti sudah familiar dengan tempat-tempat seperti Taman Nasional Bromo Tengger Semeru, Pantai Tiga Warna, Gunung Ijen, Pulau Bawean, dan Ranu Kumbolo. Banyak destinasi bahkan menjadi terkenal di luar negeri.</p>
        <p className="mb-4">Dari pegunungan yang menenangkan hingga lautan yang menyegarkan, tempat wisata di Jawa Timur menawarkan alam yang beragam. Karena sudah terdapat berbagai rute, Anda dapat dengan mudah mengunjungi lokasi wisata tersebut.</p>
        <p className="mb-4">Berikut 5 Rekomendasi Tempat Wisata yang Wajib Dikunjungi : </p>
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

export default WisataAlam;