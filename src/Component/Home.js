import React from 'react'

export default function Home() {
    return (
        <div>
            <main>
                { /* CAROUSEL */}
                <div>
                    <div id="carouselExampleAutoplaying" className="carousel slide mt-4" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/otherImage/Meat.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/otherImage/flower%20final.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/otherImage/vegetables%20final.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                { /* COUPON */}
                <div>
                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/otherImage/couponfinal.jpg" style={{ width: "100%", borderRadius: 15, marginTop: 10 }} alt="USE CUPON" />
                </div>

                { /* CARDS */}
                <div>
                    <center>
                        <h3 style={{ marginTop: 10, color: "rgb(123, 179, 116)" }}>
                            ... NEW ARRIVALS ...
                        </h3>
                    </center>

                    <div className="row justify-content-center align-items-center">
                        <div className="col-sm-12 col-md-9">
                            <div className="row justify-content-center align-items-center">
                                <div id="cards" className="col-sm-12 col-md-3 m-4" data-aos="flip-left">
                                    <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                        <a href="Desi Eggs.html"><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/63d2adb13b7b0424f959c511/362dd1b7-6dfb-4312-941d-ac1568c19f02" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></a>

                                        <div className="card-body">
                                            <h5 className="card-title">Desi Eggs - Brown - 6 pcs</h5>
                                            <p className="card-text" style={{ color: "#2abb42", fontSize: 20, paddingTop: 25, fontWeight: "bolder" }}>
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
                                <div id="cards" className="col-sm-12 col-md-3 m-4" data-aos="flip-left">
                                    <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                        <a href="Bhola (Powa Bhola).html">
                                            <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399b2a41c6738333b27be63/78e13605-0f7c-4e47-9097-13d97a8155ea" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></a>

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

                                <div id="cards" className="col-sm-12 col-md-3 m-4" data-aos="flip-left">
                                    <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                        <a href="Red Grapes.html"><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399ab4b1c6738333b27be2d/945d7d8f-d197-42fe-a1c5-ff13a93bc7e4" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></a>

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
                            </div>

                            <div className="row justify-content-center align-items-center">
                                <div id="cards" className="col-sm-12 col-md-3 m-4" data-aos="flip-left">
                                    <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                        <a href="LettuceIceberg.html"><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399b2d41c6738333b27be84/a09a0cfd-4901-4173-8f5c-044ddb584a67" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></a>

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
                                <div id="cards" className="col-sm-12 col-md-3 m-4" data-aos="flip-left">
                                    <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                        <a href=""><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399aa9d1c6738333b27bdc3/5f874ae8-d9fe-4f56-a9e1-f0ad879698a3" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></a>

                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Chicken Lollipop (Skinless) - 150rs./6pcs
                                            </h5>
                                            <p className="card-text" style={{ color: "#2abb42", fontSize: 20, fontWeight: "bolder" }}>
                                                ₹150
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

                                <div id="cards" className="col-sm-12 col-md-3 m-4" data-aos="flip-left">
                                    <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                        <a href="Pears.html"><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399ab541c6738333b27be33/426457fa-ba34-4537-bf02-ebc6de467268" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></a>

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
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
