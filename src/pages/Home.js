import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import General from '../components/General';
import About from '../components/About';
import Team from '../components/Team';
import Footer from '../components/Footer';


function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <General />
            <About />
            <Team />
            <Footer />
        </div>
    );
}

export default Home;
