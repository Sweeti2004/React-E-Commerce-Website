import React from "react";

const Home = () => {
  return (
    <>
      <div className="position-relative">
        {/* Background Image */}
        <img
          src="./assets/home.png"
          alt="Ecommerce Banner"
          className="img-fluid w-100"
          style={{ maxHeight: "90vh", objectFit: "cover" }}
        />

        {/* Left-side Fancy Text */}
        <div
          className="position-absolute top-50 start-0 translate-middle-y px-5"
          style={{ maxWidth: "650px" }}
        >
          <h1
            className="fw-bold mb-4"
            style={{
              fontSize: "3.5rem",
              color: "#C0392B", // Deep Tomato Red
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            Style, Sparkle & Smart Tech — All in One Place!
          </h1>

          <p
            className="fs-4 mb-3"
            style={{
              color: "#E74C3C", // Coral Red
              lineHeight: "1.8",
              textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            Explore exclusive collections of <strong>Men's & Women's Fashion</strong>,
            stunning <strong>Jewelry</strong>, and the latest in
            <strong> Electronics</strong> — curated for your lifestyle.
          </p>

          <p
            className="fs-5"
            style={{
              color: "#F1948A", // Light Rose
              fontWeight: "500",
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            Discover deals, fast delivery, and top-rated quality. Your perfect shopping
            experience starts now.
          </p>

          <a
            href="/product"
            className="btn mt-4 px-4 py-2 fs-5 fw-semibold shadow"
            style={{
              background: "linear-gradient(to right, #E74C3C, #F5B7B1)", // Coral to soft rose
              border: "none",
              color: "#fff",
            }}
          >
            Shop Now →
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
