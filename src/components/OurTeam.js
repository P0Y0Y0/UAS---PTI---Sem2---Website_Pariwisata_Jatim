import React from 'react';

function OurTeam() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">The Team</h6>
                    <h1 className="mb-5">Developer</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="img/team1.jpg" alt="" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square btn-primary mx-1" href="https://github.com/AdliGR"><i className="fab fa-github"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href="https://www.instagram.com/shyeh.rafael/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Shyehan Rafael Adlinugroho</h5>
                                <small>Design & FrontEnd</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="img/team2.jpeg" alt="" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square btn-primary mx-1" href="https://twitter.com/erufumang"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href="https://www.instagram.com/theon.anabel/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Theon Anabel Deadora</h5>
                                <small>FrontEnd</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="img/team3.jpeg" alt="" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Alfin Sanders</h5>
                                <small>Design</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="img/team4.jpeg" alt="" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Juan Farrel</h5>
                                <small>FrontEnd</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
