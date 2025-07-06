import React from 'react'
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4">
        <h1 className="text-center fw-bold text-primary">About Us</h1>
        <hr className="w-25 mx-auto" />

        <p className="lead text-center text-secondary px-3">
          Welcome to <strong>React Ecommerce</strong>, your go-to destination for quality fashion, electronics, and lifestyle products. 
          Our mission is to bring you top-notch items at affordable prices, with seamless online shopping and fast delivery. 
          Whether you're upgrading your wardrobe or tech gear, we’ve got you covered with the latest trends and trusted brands.
        </p>

        <h2 className="text-center py-4 fw-semibold">Our Product Categories</h2>
        <div className="row justify-content-center g-4">
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img className="card-img-top rounded-top-4" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Men's Clothing" height={160} />
              <div className="card-body text-center">
                <h5 className="card-title">Men's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img className="card-img-top rounded-top-4" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Women's Clothing" height={160} />
              <div className="card-body text-center">
                <h5 className="card-title">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img className="card-img-top rounded-top-4" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jewelry" height={160} />
              <div className="card-body text-center">
                <h5 className="card-title">Jewelry</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img className="card-img-top rounded-top-4" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Electronics" height={160} />
              <div className="card-body text-center">
                <h5 className="card-title">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
