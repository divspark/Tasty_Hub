import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import "./style.css";
import bgImage from "./bg7.jpg";

function Login() {
  return (
    <div className="row vh-100 g-0">
      {/* Left side */}
      <div className="col-lg-6 position-relative d-none d-lg-block">
        <div
          className="bg-holder"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </div>
      {/* /Left side */}

      {/* Right side */}
      <div className="col-lg-6">
        <div className="row align-items-center justify-content-center h-100 g-0 px-4 ps-sm-0">
          <div className="col col-sm-6 col-lg-7 col-xl-6">
            {/* logo */}
            <a href="a" className="d-flex justify-content-center mb-4">
              {/* <img src="images/logo.png" alt="" width="60" /> */}
            </a>
            {/* /logo */}

            <div className="text-center mb-5">
              <h3 className="fw-bold">Log In</h3>
              <p className="text-secondary">Get access to your account</p>
            </div>
            {/* Social Login */}
            <button className="btn btn-lg btn-outline-secondary btn-outline-custom w-100 mb-3">
              <i className="bx bxl-google text-danger me-1 fs-6"></i>
              Login With Google
            </button>
            <button className="btn btn-lg btn-outline-secondary btn-outline-custom w-100">
              <i className="bx bxl-facebook text-primary me-1 fs-6"></i>
              Login With Facebook
            </button>
            {/* /Social Login */}

            {/* Divider */}
            <div className="position-relative">
              <hr className="text-secondary divider" />
              <div className="divider-content-center">or</div>
            </div>
            {/* /Divider */}

            {/* Form */}
            <form action="/login" method="post">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bx bx-envelope"></i>
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg fs-6"
                  placeholder="Email"
                  name="email"
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bx bx-lock-alt"></i>
                </span>
                <input
                  type="password"
                  className="form-control form-control-lg fs-6"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <a
                href="http://localhost:3000/"
                className="btn btn-primary btn-lg w-100 mb-3"
              >
                Login
              </a>
            </form>
            {/* /Form */}

            <div className="text-center">
              <small>
                Dont have an account?{" "}
                <a href="/signup" className="fw-bold">
                  Sign-up
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* /Right side */}
    </div>
  );
}

export default Login;
