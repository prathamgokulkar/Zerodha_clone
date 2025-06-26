import React from "react";

const Hero = () => {
  return (
    <div className="container px-3 px-md-5">
      <section className="hero-section">
        <div className="text-center">
          <h1 style={{ fontSize: "3rem" }}>Charges</h1>
          <p className="text-muted">List of all charges and taxes</p>
        </div>
      </section>
      <section className="charges-section mt-5">
        <div className="row text-center">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <img
              src="./images/pricing0.svg"
              alt="pricing-img"
              className="pricing-img mb-3"
            />
            <h2>Free equity delivery</h2>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <img
              src="./images/intradayTrades.svg"
              alt="pricing-img"
              className="pricing-img mb-3"
            />
            <h2>Intraday and F&O trades</h2>
            <p className="text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="./images/pricing0.svg"
              alt="pricing-img"
              className="pricing-img mb-3"
            />
            <h2>Free direct MF</h2>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
