import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const headingStyle = {
    color: "#424242",
    fontSize: "3rem",
    margin: "10px 0 15px",
  };

  return (
    <section className="py-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="mb-4">
              <img
                src="/images/homeHero.png"
                alt="HeroImage"
                className="img-fluid mx-auto d-block w-100"
              />
            </div>
            <h1 style={headingStyle}>Invest in everything</h1>
            <p className="lead" style={{ fontSize: "20px" }}>
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>
            <Link
              to="/signup"
              className="btn btn-primary fs-5 mt-3"
              style={{
                padding: "10px 15px",
                background: "#387ED1",
                textDecoration: "none",
              }}
            >
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
