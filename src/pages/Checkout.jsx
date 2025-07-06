import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const convertToINR = (usd) => Math.round(usd * 80); // basic conversion rate

  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 text-center bg-light rounded shadow-sm">
          <h4 className="display-5">No item in Cart</h4>
          <Link to="/" className="btn btn-outline-dark mt-3">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <div className="container py-5">
        <div className="row g-5">
          {/* Order Summary */}
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="card shadow-sm">
              <div className="card-header bg-light">
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    Products ({totalItems}){" "}
                    <span>
                      ${Math.round(subtotal)} / ₹{convertToINR(subtotal)}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Shipping <span>${shipping} / ₹{convertToINR(shipping)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between fw-bold">
                    Total{" "}
                    <span>
                      ${Math.round(subtotal + shipping)} / ₹
                      {convertToINR(subtotal + shipping)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Billing Form */}
          <div className="col-md-7 col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-dark text-white">
                <h4 className="mb-0">Billing Address</h4>
              </div>
              <div className="card-body">
                <form noValidate>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="form-label">First name</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">Last name</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="1234 Main St"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">
                        Address 2 <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apartment or suite"
                      />
                    </div>
                    <div className="col-md-5">
                      <label className="form-label">Country</label>
                      <select className="form-select" required>
                        <option value="">Choose...</option>
                        <option>India</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">State</label>
                      <select className="form-select" required>
                        <option value="">Choose...</option>
                        <option>Punjab</option>
                        <option>Bihar</option>
                        <option>Delhi</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Zip</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>

                  <hr className="my-4" />
                  <h4 className="mb-3">Payment</h4>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Name on card</label>
                      <input type="text" className="form-control" required />
                      <small className="text-muted">
                        Full name as displayed on card
                      </small>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Card number</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Expiration</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">CVV</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>

                  <hr className="my-4" />
                  <button
                    className="w-100 btn btn-primary btn-lg"
                    type="submit"
                    disabled
                  >
                    Continue to checkout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
