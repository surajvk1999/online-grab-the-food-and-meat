import React from 'react'
import { Link } from 'react-router-dom'

export default function Meat() {
    return (
        <div>
            <main>
                <center>
                    <h3 style={{ marginTop: 10, color: "rgb(123, 179, 116)" }}>
                        ... MEAT & EGGS ...
                    </h3>
                </center>

                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-9">
                        <div className="row justify-content-center align-items-center">
                            <div id="cards" className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <Link to={"/DesiEggs"}><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/63d2adb13b7b0424f959c511/362dd1b7-6dfb-4312-941d-ac1568c19f02" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></Link>

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
                            <div id="cards" className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <Link to={"/CountryDuckMeat"}><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399aaab1c6738333b27bdcc/ae7fbc61-0670-4612-9f2a-b365761c703f-202011160310208089_1_1.jpeg" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></Link>

                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Country Duck Meat (Curry Cut) - Rs.520/800g-950g
                                        </h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, fontWeight: "bolder" }}>
                                            ₹520
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
                                    <Link to={"/DesiChikenWhole"}><img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399aaac1c6738333b27bdcd/dd4ebf27-4b21-45ef-933b-86203f5e4fff-202011160315351696.jpeg" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} /></Link>

                                    <div className="card-body">
                                        <h5 className="card-title">Desi Chicken Whole - 750rs/1 kg</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, fontWeight: "bolder" }}>
                                            ₹750
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
                                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399b2d91c6738333b27be87/d6e9088c-ae39-4138-bd5c-889ed2f765fb-202211031335416102.jpeg" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Quail live meat 2pcs (170g - 210g)</h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, fontWeight: "bolder" }}>
                                            ₹200
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
                                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399aa9d1c6738333b27bdc3/5f874ae8-d9fe-4f56-a9e1-f0ad879698a3" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} />
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

                            <div id="cards" className="col-sm-12 col-md-3 m-4">
                                <div className="card" style={{ width: "18rem", height: "28rem", alignItems: "center", boxShadow: "10px 10px 10px rgb(75, 110, 66)" }}>
                                    <img src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399aa9b1c6738333b27bdc2/50bca8c2-f2ee-4340-98c5-5655a3e22448" className="card-img-top" alt="..." style={{ width: 250, height: 250, marginTop: 10 }} />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Chicken Drumstick (without Skin) - Rs.145/4ps
                                        </h5>
                                        <p className="card-text" style={{ color: "#2abb42", fontSize: 20, fontWeight: "bolder" }}>
                                            ₹435
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
