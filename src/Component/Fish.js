import React from 'react'
import { Link } from 'react-router-dom'

export default function Fish() {
    return (
        <div>
            <main>
                <center>
                    <h3 style={{ marginTop: 10, color: "rgb(123, 179, 116)" }}>
                        ... FISH ...
                    </h3>
                </center>

                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-9">
                        <div className="row justify-content-center align-items-center">
                            <div id="cards" className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <Link to={"/Bhola"}>
                                        <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399b2a41c6738333b27be63/78e13605-0f7c-4e47-9097-13d97a8155ea" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></Link>

                                    <div className="card-body">
                                        <h5 className="card-title">Bhola (Powa Bhola) - 160rs./500g</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, fontWeight: "bolder" }}>
                                            ₹160
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
                                    <Link to={"/BhetkiMedium"}><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399b29a1c6738333b27be5c/9b8c59a1-4278-4708-b8c5-74a340648087" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></Link>

                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Bhetki Medium Upto 1Kg Size- 450rs./500g
                                        </h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, fontWeight: "bolder" }}>
                                            ₹450
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
                                    <Link to={"/KatlaLarge"}><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399b2871c6738333b27be50/73b1c1cd-b790-459e-9d7a-d4fe6e970692" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></Link>

                                    <div className="card-body">
                                        <h5 className="card-title">
                                            KATLA LARGE (ABOVE 2 KG SIZE) - 300/K
                                        </h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, fontWeight: "bolder" }}>
                                            ₹300
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

                        <div id="cards" className="row justify-content-center align-items-center">
                            <div className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399aab21c6738333b27bdd0/862b4149-460d-4e9e-b61d-79b7ec00332f-202011231134576247.jpeg" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Rohu/Rui cut (2-3 kg Size) - 350/K</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, fontWeight: "bolder" }}>
                                            ₹350
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
                            <div className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399ab1f1c6738333b27be0f/acc283dd-9000-477f-899a-dba1f2f8ec35" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Chitol Peti (4 Kg Size Above size) - 495rs./500g
                                        </h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, fontWeight: "bolder" }}>
                                            ₹495
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

                            <div className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399b2b41c6738333b27be6d/eeb12e4a-a9b3-4c1e-9749-6dda0aa608a9" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Nona Ilish (salted dried Hilsa) - Rs.240/200g
                                        </h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, fontWeight: "bolder" }}>
                                            ₹240
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
