import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary">Wisata Jawa Timur</h2>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.html" className="nav-item nav-link">Home</a>
                    <div className="nav-item dropdown active">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Wisata</a>
                        <div className="dropdown-menu fade-down m-0">
                            <a href="WisataAlam.html" className="dropdown-item">Wisata Alam</a>
                            <a href="WisataNonAlam.html" className="dropdown-item">Wisata Non Alam</a>
                        </div>
                    </div>
                    <a href="team.html" className="nav-item nav-link">Our Team</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
