import React from 'react';
import Navbar from '../components/Navbar';
import WisataNonAlam from '../components/WisataNonAlam';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Form from '../components/Form';

function Home() {
    return (
        <div>
            <Navbar />
            <Map />
            <WisataNonAlam />
            <Form />
            <Footer />
        </div>
    );
}

export default Home;
