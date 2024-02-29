import React, { useState } from "react";
import { useRef } from "react";

function RegistrationPage() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    password: "",
    username: "",
    number: "",
    confirmPassword: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    username: "",
    number: "",
    confirmPassword: "",
    gender: "",
  });

  let registerAction = async () => {

    try {
      if (
        !formValues.fullname ||
        !formValues.username ||
        !formValues.password ||
        !formValues.email ||
        !formValues.number ||
        !formValues.gender
      ) {
        return;
      }
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      let url = `http://localhost:4000/adduser?fullname=${formValues.fullname}&username=${formValues.username}&password=${formValues.password}&email=${formValues.email}&number=${formValues.number}&gender=${formValues.gender}`;
      let res = await fetch(url);
      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }
      let newFormValues = {
        fullname: "",
        email: "",
        password: "",
        username: "",
        number: "",
        confirmPassword: "",
        gender: "",
      };

      setFormValues(newFormValues);


      alert("Registration successful!!!");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, proceed with registration logic
      console.log("Registration successful!");
      setFormValues({
        fullname: "",
        email: "",
        password: "",
        username: "",
        number: "",
        confirmPassword: "",
        gender: "",
      });
      setErrors({
        fullname: "",
        email: "",
        password: "",
        username: "",
        number: "",
        confirmPassword: "",
        gender: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate full name
    if (!formValues.fullname.trim()) {
      newErrors.fullname = "Please enter your name";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(formValues.email.trim())) {
      newErrors.email = "Invalid email address";
    }

    // Validate password
    if (!formValues.password.trim()) {
      newErrors.password = "Please enter your password";
    } else if (formValues.password.trim().length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    } else if (
      !/[A-Z]/.test(formValues.password.trim()) ||
      !/[a-z]/.test(formValues.password.trim()) ||
      !/[!@#$%^&*]/.test(formValues.password.trim())
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one special symbol";
    }

    // Validate last name
    if (!formValues.username.trim()) {
      newErrors.username = "Please enter your last name";
    }

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!formValues.number.trim()) {
      newErrors.number = "Please enter your phone number";
    } else if (!phoneRegex.test(formValues.number.trim())) {
      newErrors.number = "Invalid phone number";
    }

    // Validate confirm password
    if (formValues.confirmPassword.trim() !== formValues.password.trim()) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Validate gender
    if (!formValues.gender) {
      newErrors.gender = "Please select a gender";
    }

    return newErrors;
  };

  return (
    <>
      <div>
        <div className="">
          <div
            className="row d-flex flex-column justify-content-center align-items-center mt-4"
            style={{ height: "100vh" }}
          >
            <div className="shadow p-3 mb-5 bg-body-tertiary rounded col-sm-12 col-md-6">
              <h1>Registration</h1>
              <form ref={formRef} onSubmit={handleSubmit} className="needs-validation">
                <div className="d-flex">
                  <div style={{ flex: 1 }}>
                    <div>
                      <h5 className="mt-3">First Name</h5>
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Enter your name"
                        className={`form-control form-control-lg ${errors.fullname ? "is-invalid" : ""
                          }`}
                        value={formValues.fullname}
                        onChange={handleChange}
                      />
                      {errors.fullname && (
                        <p className="text-danger">{errors.fullname}</p>
                      )}
                    </div>
                    <div>
                      <h5 className="mt-3">Email</h5>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className={`form-control form-control-lg ${errors.email ? "is-invalid" : ""
                          }`}
                        value={formValues.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <h5 className="mt-3">Password</h5>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className={`form-control form-control-lg ${errors.password ? "is-invalid" : ""
                          }`}
                        value={formValues.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <p className="text-danger">{errors.password}</p>
                      )}
                    </div>
                  </div>
                  <div className="ms-1" style={{ flex: 1 }}>
                    <div>
                      <h5 className="mt-3">Last Name</h5>
                      <input
                        type="text"
                        name="username"
                        placeholder="Enter your Lastname"
                        className={`form-control form-control-lg ${errors.username ? "is-invalid" : ""
                          }`}
                        value={formValues.username}
                        onChange={handleChange}
                      />
                      {errors.username && (
                        <p className="text-danger">{errors.username}</p>
                      )}
                    </div>
                    <div>
                      <h5 className="mt-3">Phone Number</h5>
                      <input
                        type="tel"
                        name="number"
                        placeholder="Enter your number"
                        className={`form-control form-control-lg ${errors.number ? "is-invalid" : ""
                          }`}
                        value={formValues.number}
                        onChange={handleChange}
                      />
                      {errors.number && (
                        <p className="text-danger">{errors.number}</p>
                      )}
                    </div>
                    <div>
                      <h5 className="mt-3">Confirm Password</h5>
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        className={`form-control form-control-lg ${errors.confirmPassword ? "is-invalid" : ""
                          }`}
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                      />
                      {errors.confirmPassword && (
                        <p className="text-danger">{errors.confirmPassword}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-3 d-flex align-items-center">
                  <div className="fs-5 fw-medium" style={{ flex: 1 }}>
                    Gender
                  </div>
                  <div
                    className="fw-semibold d-flex"
                    style={{
                      justifyContent: "space-evenly",
                      flex: 3,
                    }}
                  >
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        id={1}
                        onChange={handleChange}
                        checked={formValues.gender === "male"}
                      />
                      Male
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        id={2}
                        onChange={handleChange}
                        checked={formValues.gender === "female"}
                      />
                      Female
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        value="nottosay"
                        id={3}
                        onChange={handleChange}
                        checked={formValues.gender === "nottosay"}
                      />
                      Prefer not to say
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    type="submit"
                    value="Register"
                    className="mt-2 btn btn-success w-100"
                    onClick={registerAction}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
