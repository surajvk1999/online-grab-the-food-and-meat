import React, { useState } from "react";

function CountryDuckMeat() {
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 520;
  const totalPrice = pricePerUnit * quantity;

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <main className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{ minHeight: "70vh" }}
        >
          <div className="col-sm-6 col-md-4">
            <div className="zoom-effect">
              <img
                src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399aaab1c6738333b27bdcc/ae7fbc61-0670-4612-9f2a-b365761c703f-202011160310208089_1_1.jpeg"
                alt=""
                className="img-fluid shadow"
                style={{ borderRadius: 8 }}
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="mb-4">
              <h2 className="text-center">
                Country Duck Meat (Curry Cut) - Rs.520/800g-950g
              </h2>
              <h1 className="text-center">
                <span style={{ display: "inline-block", marginRight: 10 }}>
                  ₹{totalPrice.toFixed(2)}
                </span>
              </h1>
            </div>
            <div className="d-flex justify-content-center align-items-center mb-4">
              <div className="me-2">
                <i
                  className="fa-solid fa-circle-plus fa-xl"
                  onClick={increaseQty}
                  style={{ color: "#000000", cursor: "pointer" }}
                />
              </div>
              <div>
                <h4 id="id1" className="text-center">
                  {quantity}
                </h4>
              </div>
              <div className="ms-2">
                <i
                  className="fa-solid fa-circle-minus fa-xl"
                  style={{ color: "#000000", cursor: "pointer" }}
                  onClick={decreaseQty}
                />
              </div>
            </div>
            <div className="mb-4">
              <i
                className="fa-solid fa-location-dot fa-lg me-2"
                style={{ color: "#000000" }}
              />
              <input
                type="text"
                style={{ height: 44 }}
                placeholder="Enter Zip/Postal Code"
              />
              <input
                type="button"
                defaultValue="Check"
                className="btn btn-success ms-1"
              />
            </div>
            <div className="row justify-content-center">
              <div className="col-6">
                <input
                  type="button"
                  defaultValue="BUY NOW"
                  className="btn btn-secondary w-100"
                />
              </div>
              <div className="col-6">
                <input
                  type="button"
                  defaultValue="ADD TO CART"
                  className="btn btn-secondary w-100"
                />
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-6">
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  className="text-reset"
                >
                  <h5 className="text-center text-success">Visit Store</h5>
                </a>
              </div>
              <div className="col-6">
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  className="text-reset"
                >
                  <h5 className="text-center text-success">Product Enquiry</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-8">
            <h1 className="text-center" style={{ color: "rgb(52, 131, 52)" }}>
              Product Details
            </h1>
            <h3 className="text-center">
              Tender and juicy Desi Duck Meat, sourced from local farms in
              Kolkata. Perfect for making delicious curries and biryanis. Order
              now and get fresh, raw duck meat delivered straight to your door.
              Limited stock available, so hurry and place your order today!
            </h3>
            <p style={{ textAlign: "center", fontSize: 25, color: "red" }}>
              Note: Gross wt.1.5g - 1.7g &amp; after cleaning net wt. 800g to
              950g.
            </p>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-4 fs-1 text-center">
            <h3 style={{ color: "rgb(52, 131, 52)" }}>RATINGS &amp; REVIEWS</h3>
            <span style={{ color: "orange" }} className="fa fa-star checked" />
            <span style={{ color: "orange" }} className="fa fa-star checked" />
            <span style={{ color: "orange" }} className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-7">
            <textarea
              placeholder="Write Your Review"
              name="Comments"
              id
              cols={100}
              rows={5}
              className="border shadow-sm mt-4"
              style={{ borderRadius: 10 }}
              defaultValue={""}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default CountryDuckMeat;
