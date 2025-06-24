import React from "react";

let style = {
  color: "#424242",
  fontSize: "3rem",
  margin: "10px 0 15px",
};

const Hero = () => {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <div className="col">
          <div className="img">
            <img
              src="images/homeHero.png"
              alt="HeroImage"
              className="img-fluid mx-auto d-block"
              style={{ maxWidth: "800px" }}
            />
          </div>
          <div className="heading mt-5">
            <h1 className="mt-4" style={style}>
              Invest in everything
            </h1>
            <p className="lead" style={{ fontSize: "20px" }}>
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>
            <button
              className="btn btn-primary fs-5 mt-3 mb-5"
              style={{
                padding: "10px 15px",
                margin: "25px 0 0",
                background: "#387ED1",
              }}
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
