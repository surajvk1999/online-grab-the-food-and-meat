import React from 'react'
import { Link } from 'react-router-dom'

export default function Fruits() {
    return (
        <div>
            <main>
                <center>
                    <h3 style={{ marginTop: 10, color: "rgb(123, 179, 116)" }}>
                        ... FRUITS ...
                    </h3>
                </center>

                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-9">
                        <div className="row justify-content-center align-items-center">
                            <div id="cards" className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <Link to={"/RedGrapes"}><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399ab4b1c6738333b27be2d/945d7d8f-d197-42fe-a1c5-ff13a93bc7e4" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></Link>

                                    <div className="card-body">
                                        <h5 className="card-title">Red Grapes - 500g</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, paddingTop: 25, fontWeight: "bolder" }}>
                                            ₹210
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
                                    <Link to={"/SingapuriBanana"}><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399ab561c6738333b27be35/642c3cec-bbb3-498c-b45c-703560872d6a" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></Link>

                                    <div className="card-body">
                                        <h5 className="card-title">Singapuri Banana - 8rs./Pc</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, paddingTop: 25, fontWeight: "bolder" }}>
                                            ₹29
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
                                    <Link to={"/Pears"}><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399ab541c6738333b27be33/426457fa-ba34-4537-bf02-ebc6de467268" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></Link>

                                    <div className="card-body">
                                        <h5 className="card-title">Pears/Nashpati - 75rs./500g</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, paddingTop: 25, fontWeight: "bolder" }}>
                                            ₹75
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
                                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399ab451c6738333b27be29/0e8118be-5951-4fb9-b092-aebb46a2889f" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Orange Malta - 2 Pcs</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, paddingTop: 25, fontWeight: "bolder" }}>
                                            ₹60
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
                                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399ab341c6738333b27be1c/909a88e9-4135-49b2-85c6-3693c0766718" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Apple - 130rs./500g</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, paddingTop: 25, fontWeight: "bolder" }}>
                                            ₹130
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
                                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399ab321c6738333b27be1b/100fa805-40b7-4485-b202-cd10769826e9" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Green Apple - 160rs./500g</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, paddingTop: 25, fontWeight: "bolder" }}>
                                            ₹128
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
