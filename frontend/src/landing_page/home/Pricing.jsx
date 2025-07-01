import React from "react";

const Pricing = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <h2>Unbeatable pricing</h2>
            <p className="text-muted">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a
              href="#"
              className="mt-4 d-inline-block"
              style={{ textDecoration: "none" }}
            >
              See pricing <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="col-md-6 text-center">
            <div className="d-flex flex-wrap justify-content-around gap-3">
              <div>
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
              <div>
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
              <div>
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
      </div>
    </section>
  );
};

export default Pricing;
