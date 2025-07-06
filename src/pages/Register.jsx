import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5 py-4">
                <h1 className="text-center fw-bold text-primary">Register</h1>
                <hr className="w-25 mx-auto" />
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 col-lg-4 col-sm-10 shadow p-4 rounded-4 bg-light">
                        <form>
                            <div className="form-group mb-4">
                                <label htmlFor="Name" className="form-label fw-semibold">Full Name</label>
                                <input
                                    type="email"
                                    className="form-control rounded-3 shadow-sm"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="Email" className="form-label fw-semibold">Email address</label>
                                <input
                                    type="email"
                                    className="form-control rounded-3 shadow-sm"
                                    id="Email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="Password" className="form-label fw-semibold">Password</label>
                                <input
                                    type="password"
                                    className="form-control rounded-3 shadow-sm"
                                    id="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-3 text-center">
                                <p className="text-secondary">
                                    Already have an account? <Link to="/login" className="text-decoration-none text-primary fw-medium">Login</Link>
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-dark px-4 py-2 rounded-pill" type="submit" disabled>
                                    Register
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

export default Register;
