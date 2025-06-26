import React from "react";

const Hero = () => {
  return (
    <div className="support-section">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <h5 className="mb-0">Support Portal</h5>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-md-end">
            <a
              href=""
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Track tickets
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h5 className="my-3">
              Search for an answer or browse help topics to create a ticket
            </h5>
            <form action="" className="search-form">
              <div
                className="search-input-wrapper position-relative"
                style={{ width: "100%" }}
              >
                <input
                  type="text"
                  placeholder="Eg: How do I activate F&O, why is my order getting rejected,..."
                  className="search-input w-100 pe-5"
                />
                <i className="fa-solid fa-magnifying-glass search-icon position-absolute"></i>
              </div>
            </form>

            <div className="support-links mt-4">
              <a className="mb-2" href="">
                Track account opening
              </a>
              <a className="mb-2" href="">
                Track segment activation
              </a>
              <a className="mb-2" href="">
                Intraday margins
              </a>
              <a className="mb-2" href="">
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <h5 className="mb-3">Featured</h5>
            <ol>
              <li className="mb-2">
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </li>
              <li>
                Revision in expiry day of Index and Stock derivatives contracts
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
