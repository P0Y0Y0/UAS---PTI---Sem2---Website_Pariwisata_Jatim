import React from 'react';
import Navbar from '../components/Navbar';
import OurTeam from '../components/OurTeam';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Navbar />
            <PageHeader />
            <OurTeam />
            <Footer />
        </div>
    );
}

export default Home;
