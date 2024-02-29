import React, { useState } from "react";

function Pears() {
  const [quantity, setQuantity] = useState(1);
  const price = 75.0;
  const totalPrice = price * quantity;

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
              {/* image */}
              <img
                src="https://mca2-ap-south-1.s3.ap-south-1.amazonaws.com/f7f649f9-4e85-4000-af10-187129948d7d/productImage/6399ab541c6738333b27be33/426457fa-ba34-4537-bf02-ebc6de467268"
                alt=""
                className="img-fluid shadow"
                style={{ borderRadius: 8 }}
              />
              {/* image */}
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="mb-4">
              <h2 className="text-center">Pears/Nashpati - 75rs./500g</h2>
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
              Sapota or Sobeda is a sweet and juicy fruit with a velvety
              texture. Its flesh is a pale yellow colour and has a unique sweet
              and nutty flavour. It is an excellent source of vitamins and
              minerals, making it a healthy and refreshing snack. Purchase fresh
              Sapota online in Kolkata and enjoy its juicy sweetness all year
              round. Order now for delivery to your doorstep!
            </h3>
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

export default Pears;
