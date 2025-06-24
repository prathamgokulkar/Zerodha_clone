import React from "react";

const Pricing = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h2>Unbeatable pricing</h2>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="mt-4" style={{ textDecoration: "none" }}>
            See pricing ➜
          </a>
        </div>
        <div className="col-6 d-flex justify-content-between text-center">
          <div className="text-center px-3">
            <img
              src="/images/pricing0.svg"
              alt="Free account"
              className="img-fluid mb-2"
              style={{ width: "80px" }}
            />
            <p className="text-muted small m-0">
              Free account
              <br />
              opening
            </p>
          </div>
          <div className="text-center px-3">
            <img
              src="/images/pricing0.svg"
              alt="Free equity"
              className="img-fluid mb-2"
              style={{ width: "80px" }}
            />
            <p className="text-muted small m-0">
              Free equity delivery
              <br />
              and direct mutual funds
            </p>
          </div>
          <div className="text-center px-3">
            <img
              src="/images/intradayTrades.svg"
              alt="Intraday & F&O"
              className="img-fluid mb-2"
              style={{ width: "80px" }}
            />
            <p className="text-muted small m-0">
              Intraday and
              <br />
              F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
