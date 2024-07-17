import React from 'react';
import Navbar from '../components/Navbar';
import WisataAlam from '../components/WisataAlam';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Form from '../components/Form';


function Home() {
    return (
        <div>
            <Navbar />
            <Map />
            <WisataAlam />
            <Form />
            <Footer />
        </div>
    );
}

export default Home;
