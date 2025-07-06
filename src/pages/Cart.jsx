import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const convertToINR = (usd) => Math.round(usd * 80); // basic conversion rate

  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 text-center bg-light rounded shadow-sm">
          <h4 className="p-3 display-5">Your Cart is Empty</h4>
          <Link to="/" className="btn btn-outline-dark px-4 py-2 fs-5">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const addItem = (product) => dispatch(addCart(product));
  const removeItem = (product) => dispatch(delCart(product));

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="h-100">
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow mb-4">
                <div className="card-header py-3 bg-dark text-white">
                  <h5 className="mb-0">Your Items</h5>
                </div>
                <div className="card-body">
                  {state.map((item) => (
                    <div key={item.id}>
                      <div className="row align-items-center mb-4">
                        <div className="col-md-3">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="img-fluid rounded"
                            style={{ maxHeight: "80px", objectFit: "contain" }}
                          />
                        </div>
                        <div className="col-md-5">
                          <h6>{item.title.substring(0, 40)}...</h6>
                          <p className="text-muted">
                            ${item.price} / ₹{convertToINR(item.price)} each
                          </p>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-end">
                          <button
                            className="btn btn-outline-dark btn-sm"
                            onClick={() => removeItem(item)}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <span className="mx-3 fs-5">{item.qty}</span>
                          <button
                            className="btn btn-outline-dark btn-sm"
                            onClick={() => addItem(item)}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div className="card shadow">
                <div className="card-header bg-light py-3">
                  <h5 className="mb-0 text-dark">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      Products ({totalItems})
                      <span>
                        ${Math.round(subtotal)} / ₹{convertToINR(subtotal)}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      Shipping
                      <span>
                        ${shipping} / ₹{convertToINR(shipping)}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between fw-bold">
                      Total
                      <span>
                        ${Math.round(subtotal + shipping)} / ₹
                        {convertToINR(subtotal + shipping)}
                      </span>
                    </li>
                  </ul>
                  <Link
                    to="/checkout"
                    className="btn btn-dark btn-lg w-100 mt-4"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center mb-4">Your Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
