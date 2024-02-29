import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start text-muted">
                { /* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    { /* Left */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    { /* Left */}

                    { /* Right */}
                    <div>
                        <a href="https://www.facebook.com" target="_blank" className="me-4 text-reset">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://twitter.com/i/flow/login" target="_blank" className="me-4 text-reset">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="https://www.google.com/" target="_blank" className="me-4 text-reset">
                            <i className="fab fa-google" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="me-4 text-reset">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="https://in.linkedin.com" target="_blank" className="me-4 text-reset">
                            <i className="fab fa-linkedin" />
                        </a>
                        <a href="https://github.com/" target="_blank" className="me-4 text-reset">
                            <i className="fab fa-github" />
                        </a>
                    </div>
                    { /* Right */}
                </section>
                { /* Section: Social media */}

                { /* Section: Links  */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        { /* Grid row */}
                        <div className="row mt-3">
                            { /* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                { /* Content */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3" />The Local Meat
                                </h6>
                                <p>
                                    We are here to deliver you a fresh meat directly from our poetry
                                    form and also you will get fresh vegitables directly from our
                                    farm to your door step.
                                </p>
                            </div>
                            { /* Grid column */}

                            { /* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                { /* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Category</h6>
                                <p>
                                    <a href="http://127.0.0.1:5501/Fish.html#" target="_blank1" style={{ textDecoration: "none" }} className="text-reset">Fish</a>
                                </p>
                                <p>
                                    <a href="http://127.0.0.1:5501/Meat.html\n                  " target="_blank2" style={{ textDecoration: "none" }} className="text-reset">Meat, Eggs</a>
                                </p>
                                <p>
                                    <a href="http://127.0.0.1:5501/Vegitables.html\n                  " target="_blank3" style={{ textDecoration: "none" }} className="text-reset">vegitables</a>
                                </p>
                                <p>
                                    <a href="http://127.0.0.1:5501/Fruits.html" target="_blank4" style={{ textDecoration: "none" }} className="text-reset">Fruits</a>
                                </p>
                            </div>
                            { /* Grid column */}

                            { /* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                { /* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                <p>
                                    <a href="http://127.0.0.1:5501/aboutus.html" style={{ textDecoration: "none" }} target="_blank4" className="text-reset">About Us</a>
                                </p>
                                <p>
                                    <a href="http://127.0.0.1:5501/contactus.html\n                  " style={{ textDecoration: "none" }} target="_blank" className="text-reset">Contact Us</a>
                                </p>
                                <p>
                                    <a href="http://127.0.0.1:5501/loginpage.html" style={{ textDecoration: "none" }} target="_blank" className="text-reset">Login</a>
                                </p>
                                <p>
                                    <a href="http://127.0.0.1:5501/registrationform.html" style={{ textDecoration: "none" }} target="_blank" className="text-reset">SignUp</a>
                                </p>
                            </div>
                            { /* Grid column */}

                            { /* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                { /* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <a href="http://127.0.0.1:5501/contactus.html" target="_blank" style={{ textDecoration: "none" }} className="text-body-secondary">Contact</a>
                                </h6>
                                <p>
                                    <i className="fas fa-home me-3" /> CDAC Mumbai, Maharashtra-400614
                                </p>
                                <p>
                                    <i className="fas fa-envelope me-3" />
                                    thelocalmeat@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3" /> +91 7977939530</p>
                                <p><i className="fas fa-phone me-3" /> +91 7507315824</p>
                                <p><i className="fas fa-phone me-3" /> +91 7058959196</p>
                            </div>
                            { /* Grid column */}
                        </div>
                        { /* Grid row */}
                    </div>
                </section>
                { /* Section: Links  */}

                { /* Copyright */}
                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2023 Copyright:
                    <a className="text-reset fw-bold" href="#">thelocalmeat.com</a>
                </div>
                { /* Copyright */}
            </footer>
        </div>
    )
}
