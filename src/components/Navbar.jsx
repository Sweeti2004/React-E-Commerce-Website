import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-3 text-primary" to="/">React Ecommerce</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto text-center gap-3">
                        <li className="nav-item">
                            <NavLink className="nav-link fw-medium text-dark" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-medium text-dark" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-medium text-dark" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-medium text-dark" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mt-3 mt-lg-0">
                        <NavLink to="/login" className="btn btn-outline-primary rounded-pill px-3">
                            <i className="fa fa-sign-in-alt me-1"></i> Login
                        </NavLink>
                        <NavLink to="/register" className="btn btn-outline-success rounded-pill px-3">
                            <i className="fa fa-user-plus me-1"></i> Register
                        </NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark rounded-pill px-3">
                            <i className="fa fa-cart-shopping me-1"></i> Cart ({state.length})
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
