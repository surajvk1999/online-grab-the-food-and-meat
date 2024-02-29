import React from 'react'
import { Link } from 'react-router-dom'

export default function Vegitables() {
    return (
        <div>
            <main>
                <center>
                    <h3 style={{ marginTop: 10, color: "rgb(123, 179, 116)" }}>
                        ... VEGITABLES ...
                    </h3>
                </center>

                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-9">
                        <div className="row justify-content-center align-items-center">
                            <div id="cards" className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <Link to={"/Rosemary"}><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399b2d61c6738333b27be85/05c05ada-2670-4c81-b3b4-7761f3769361" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></Link>

                                    <div className="card-body">
                                        <h5 className="card-title">Rosemary - 50g</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, paddingTop: 25, fontWeight: "bolder" }}>
                                            ₹105
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a href="#" className="btn btn-success" style={{ margin: 5, padding: 5, paddingLeft: 15, paddingRight: 15, borderRadius: 5 }}>
                                                <i className="fa fa-shopping-cart" aria-hidden="true" />
                                                <span>Buy Now</span>
                                            </a>
                                            <a href="#" className="btn btn-success" style={{ margin: 5, padding: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 5 }}><i className="fas fa-paper-plane" aria-hidden="true" />
                                                <span>Enquiry</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="cards" className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <Link to={"/Lettuce"}><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399b2d41c6738333b27be84/a09a0cfd-4901-4173-8f5c-044ddb584a67" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></Link>

                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Lettuce-Iceberg 1 pc (Approx. 250g-400g)
                                        </h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, fontWeight: "bolder" }}>
                                            ₹84
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a href="#" className="btn btn-success" style={{ margin: 5, padding: 5, paddingLeft: 15, paddingRight: 15, borderRadius: 5 }}>
                                                <i className="fa fa-shopping-cart" aria-hidden="true" />
                                                <span>Buy Now</span>
                                            </a>
                                            <a href="#" className="btn btn-success" style={{ margin: 5, padding: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 5 }}><i className="fas fa-paper-plane" aria-hidden="true" />
                                                <span>Enquiry</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="cards" className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <Link to={"/Tomato"}><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399b2d21c6738333b27be82/67a8f0f0-1790-4be7-8a6a-0735881ecad8" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></Link>

                                    <div className="card-body">
                                        <h5 className="card-title">Tomato - Cherry, 250g</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, paddingTop: 25, fontWeight: "bolder" }}>
                                            ₹105
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a href="#" className="btn btn-success" style={{ margin: 5, padding: 5, paddingLeft: 15, paddingRight: 15, borderRadius: 5 }}>
                                                <i className="fa fa-shopping-cart" aria-hidden="true" />
                                                <span>Buy Now</span>
                                            </a>
                                            <a href="#" className="btn btn-success" style={{ margin: 5, padding: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 5 }}><i className="fas fa-paper-plane" aria-hidden="true" />
                                                <span>Enquiry</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center align-items-center">
                            <div id="cards" className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399b2cd1c6738333b27be7f/bcc81a72-4e25-47b3-8ee7-0f2a290a279b" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Garlic Leaves (Rasun Pata) - 1 bundle/150g
                                        </h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, fontWeight: "bolder" }}>
                                            ₹40
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a href="#" className="btn btn-success" style={{ margin: 5, padding: 5, paddingLeft: 15, paddingRight: 15, borderRadius: 5 }}>
                                                <i className="fa fa-shopping-cart" aria-hidden="true" />
                                                <span>Buy Now</span>
                                            </a>
                                            <a href="#" className="btn btn-success" style={{ margin: 5, padding: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 5 }}><i className="fas fa-paper-plane" aria-hidden="true" />
                                                <span>Enquiry</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="cards" className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399b2cb1c6738333b27be7d/3fb98d8a-72ee-4b49-82ba-929a43bf848d" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Kumro Saag - 500g</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, paddingTop: 25, fontWeight: "bolder" }}>
                                            ₹40
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a href="#" className="btn btn-success" style={{ margin: 5, padding: 5, paddingLeft: 15, paddingRight: 15, borderRadius: 5 }}>
                                                <i className="fa fa-shopping-cart" aria-hidden="true" />
                                                <span>Buy Now</span>
                                            </a>
                                            <a href="#" className="btn btn-success" style={{ margin: 5, padding: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 5 }}><i className="fas fa-paper-plane" aria-hidden="true" />
                                                <span>Enquiry</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="cards" className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399ab6f1c6738333b27be47/c4313f97-d012-492b-a6f8-8011b7ccb5f8" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Bullet Chilli - 250g</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, paddingTop: 25, fontWeight: "bolder" }}>
                                            ₹25
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a href="#" className="btn btn-success" style={{ margin: 5, padding: 5, paddingLeft: 15, paddingRight: 15, borderRadius: 5 }}>
                                                <i className="fa fa-shopping-cart" aria-hidden="true" />
                                                <span>Buy Now</span>
                                            </a>
                                            <a href="#" className="btn btn-success" style={{ margin: 5, padding: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 5 }}><i className="fas fa-paper-plane" aria-hidden="true" />
                                                <span>Enquiry</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
