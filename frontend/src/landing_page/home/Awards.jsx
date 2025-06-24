import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-6 p-5 mb-3">
          <img src="/images/largestBroker.svg" alt="Awards" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest Stock Broker in india</h1>
          <p>
            2+ million Zerodh clients contribute to over 15% of all retain order
            volumns in India by trading and investing in:
          </p>
          <div className="row mt-5">
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
            <img
              style={{ width: "90%" }}
              src="/images/pressLogos.png"
              alt="PressLogos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
