import React, { useState } from "react";

function ContactUs() {
  let [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    comment: "",
  });

  let handlerNameAction = (e) => {
    let newuser = { ...user, name: e.target.value };
    setUser(newuser);
  };

  let handlerNumberAction = (e) => {
    let newuser = { ...user, number: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerCommentAction = (e) => {
    let newuser = { ...user, comment: e.target.value };
    setUser(newuser);
  };

  let contactusAction = async () => {
    // Perform client-side validation
    const emailInput = document.getElementById("email-input");
    const phoneInput = document.getElementById("phone-input");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    let valid = true;

    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Invalid email address";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    if (!phoneRegex.test(phoneInput.value)) {
      phoneError.textContent = "Invalid phone number";
      valid = false;
    } else {
      phoneError.textContent = "";
    }

    if (!valid) {
      return; // Stop form submission if data is invalid
    }

    // Backend submission
    let url = `http://localhost:4000/contact-us?name=${user.name}&number=${user.number}&email=${user.email}&comment=${user.comment}`;
    try {
      await fetch(url);
      let newuser = {
        name: "",
        number: "",
        email: "",
        comment: "",
      };
      setUser(newuser);
    } catch (error) {
      // Handle error if the fetch request fails
      console.error("Error submitting form:", error);
      // You can display an error message to the user if needed
    }
  };

  return (
    <>
      <div
        className="row d-flex flex-column justify-content-center align-items-center mt-5"
        style={{ height: "100vh" }}
      >
        <div className="shadow p-3 mb-5 bg-body-tertiary rounded col-sm-12 col-md-6">
          <h1 className="text-center">GET IN TOUCH WITH US</h1>
          <input
            className="form-control shadow-sm"
            type="text"
            placeholder="Enter Your Name"
            value={user.name}
            onChange={handlerNameAction}
            required
          />
          <input
            className="form-control mt-4 shadow-sm"
            type="text"
            placeholder="Enter Your Number"
            id="phone-input"
            value={user.number}
            maxLength={10}
            minLength={10}
            onChange={handlerNumberAction}
          />
          <span id="phone-error" className="text-danger"></span>
          <input
            className="form-control mt-4 shadow-sm"
            type="text"
            placeholder="Enter Your Email"
            id="email-input"
            value={user.email}
            onChange={handlerEmailAction}
          />
          <p id="email-error" style={{ color: "red" }}></p>
          <textarea
            placeholder="Comments"
            name="Comments"
            id=""
            cols={90}
            rows={5}
            className="border shadow-sm mt-4 w-100"
            value={user.comment}
            onChange={handlerCommentAction}
          ></textarea>
          <input
            type="button"
            value="Submit"
            onClick={contactusAction}
            className="btn btn-success shadow-sm mt-3"
          />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
