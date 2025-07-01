import React from "react";

const Education = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 text-center">
            <img
              src="/images/education.svg"
              alt="Education"
              className="img-fluid"
              style={{ maxWidth: "65%" }}
            />
          </div>
          <div className="col-md-6">
            <h2>Free and open market education</h2>
            <p className="mt-3">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              href="#"
              className="mt-3 d-inline-block"
              style={{ textDecoration: "none" }}
            >
              Varsity <i class="fa-solid fa-arrow-right"></i>
            </a>
            <p className="mt-5">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a
              href="#"
              className="mt-3 d-inline-block"
              style={{ textDecoration: "none" }}
            >
              TradingQ&A <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
