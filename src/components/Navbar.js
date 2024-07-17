import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
               <img className='logo' src='img/logo_jatim_transparan.png' />
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="/" className="nav-item nav-link">Home</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Wisata</a>
                        <div className="dropdown-menu fade-down m-0">
                            <a href="/WisataAlam" className="dropdown-item">Wisata Alam</a>
                            <a href="/WisataNonAlam" className="dropdown-item">Wisata Non Alam</a>
                        </div>
                    </div>
                    <a href="/Team" className="nav-item nav-link">Our Team</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
