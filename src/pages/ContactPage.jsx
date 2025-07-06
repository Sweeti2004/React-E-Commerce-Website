import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4">
        <h1 className="text-center mb-4 fw-bold">Get in Touch</h1>
        <hr className="mb-5 w-25 mx-auto" />

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm border-0 p-4">
              <h4 className="mb-4 text-center">We'd love to hear from you</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="Message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="Message"
                    rows="5"
                    placeholder="Write your message here"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-dark px-4 py-2"
                    disabled
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
