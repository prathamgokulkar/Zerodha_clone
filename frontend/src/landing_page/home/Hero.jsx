import React from "react";

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
                className="img-fluid mx-auto d-block"
                style={{ maxWidth: "800px" }}
              />
            </div>
            <h1 style={headingStyle}>Invest in everything</h1>
            <p className="lead" style={{ fontSize: "20px" }}>
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>
            <button
              className="btn btn-primary fs-5 mt-3"
              style={{
                padding: "10px 15px",
                background: "#387ED1",
              }}
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
