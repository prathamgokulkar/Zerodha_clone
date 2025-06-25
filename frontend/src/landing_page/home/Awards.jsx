import React from "react";

const Awards = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <img
              src="/images/largestBroker.svg"
              alt="Awards"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 mt-3">
            <h2>Largest Stock Broker in India</h2>
            <p>
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India by trading and investing in:
            </p>
            <div className="row mt-4">
              <div className="col-6 mb-3">
                <ul>
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Govt. Securities</li>
                </ul>
              </div>
              <div className="mt-4">
                <img
                  className="img-fluid"
                  style={{ width: "90%" }}
                  src="/images/pressLogos.png"
                  alt="PressLogos"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
