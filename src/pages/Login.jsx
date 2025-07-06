import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4">
        <h1 className="text-center fw-bold text-primary">Login</h1>
        <hr className="w-25 mx-auto" />
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 col-lg-4 col-sm-10 shadow p-4 rounded-4 bg-light">
            <form>
              <div className="mb-4">
                <label htmlFor="floatingInput" className="form-label fw-semibold">Email address</label>
                <input
                  type="email"
                  className="form-control rounded-3 shadow-sm"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="floatingPassword" className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control rounded-3 shadow-sm"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 text-center">
                <p className="text-secondary">
                  New here? <Link to="/register" className="text-decoration-none text-primary fw-medium">Register</Link>
                </p>
              </div>
              <div className="text-center">
                <button className="btn btn-dark px-4 py-2 rounded-pill" type="submit" disabled>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
