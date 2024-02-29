import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  let formRef = useRef();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  const validatePassword = () => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special symbol (@$!%*?&)."
      );
    } else {
      setPasswordError("");
    }
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let loginAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      let url = `http://localhost:4000/login-by-get?email=${user.email}&password=${user.password}`;
      let res = await fetch(url);

      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }
      localStorage.setItem("loginStatus", "true");
      navigate("/Home", { replace: true });
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <>
      <div
        className="row justify-content-center align-items-center mb-4"
        style={{ height: "100vh" }}
      >
        <div className="col-sm-12 col-md-6 shadow shadow-lg p-5">
          <div className="row justify-content-center">
            <div
              className="d-flex justify-content-center col-md-6 col-sm-12"
              style={{ height: "20vh" }}
            >
              <img
                src="https://i.ibb.co/7R0YwJT/Color-logo-no-background.png"
                alt="Logo"
                className="img-fluid"
                style={{ paddingLeft: 25, marginBottom: 10, height: "20vh" }}
              />
            </div>
          </div>
          <div className="p-5 shadow shadow-lg">
            <form ref={formRef} className="needs-validation">
              <div style={{ marginBottom: 10 }}>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control mb-1"
                  value={user.email}
                  onChange={handlerEmailAction}
                  required
                />
              </div>
              <div style={{ marginBottom: 10 }}>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control mb-1"
                  value={user.password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handlerPasswordAction(e);
                  }}
                  onBlur={validatePassword}
                  required
                />
                {passwordError && (
                  <p style={{ color: "red" }}>{passwordError}</p>
                )}
              </div>
            </form>
            <div>
              <div id="loginForm" style={{ marginBottom: 10 }}>
                <input type="checkbox" name="Remember Me" id="Remember Me" />
                <label htmlFor="Remember Me">Remember Me</label>
              </div>
              <div style={{ marginTop: 10 }}>
                <input
                  type="button"
                  defaultValue="Log In"
                  className="btn btn-success w-100"
                  onClick={loginAction}
                />
                <div className="d-flex justify-content-between">
                  <a
                    href="#"
                    style={{ marginBottom: 10, textDecoration: "none" }}
                  >
                    Forgotten account ?
                  </a>
                  <Link
                    to={"/RegistrationPage"}
                    style={{ marginBottom: 10, textDecoration: "none" }}
                  >
                    Register as a new user
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
