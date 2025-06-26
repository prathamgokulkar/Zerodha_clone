import React from "react";

const Universe = () => {
  return (
    <div className="container universe-container px-5 my-5">
      <div className="row text-center">
        <h2>The Zerodha Universe</h2>
        <p
          className="text-muted text-center mb-5"
          style={{ fontSize: "0.8rem" }}
        >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4">
          <img
            src="./images/zerodhaFundhouse.png"
            alt="Image"
            className="universe-image"
          />
          <p
            className="text-muted text-center my-5"
            style={{ fontSize: "0.8rem" }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4">
          <img
            src="./images/sensibullLogo.svg"
            alt="Image"
            className="universe-image"
          />
          <p
            className="text-muted text-center my-5"
            style={{ fontSize: "0.8rem" }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4">
          <img
            src="./images/tijori.svg"
            alt="Image"
            className="universe-image"
          />
          <p
            className="text-muted text-center my-5"
            style={{ fontSize: "0.8rem" }}
          >
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4">
          <img
            src="./images/streakLogo.png"
            alt="Image"
            className="universe-image"
          />
          <p
            className="text-muted text-center my-5"
            style={{ fontSize: "0.8rem" }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding
          </p>
        </div>
        <div className="col-4">
          <img
            src="./images/smallcaseLogo.png"
            alt="Image"
            className="universe-image"
          />
          <p
            className="text-muted text-center my-5"
            style={{ fontSize: "0.8rem" }}
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4">
          <img
            src="./images/dittoLogo.png"
            alt="Image"
            className="universe-image"
          />
          <p
            className="text-muted text-center my-5"
            style={{ fontSize: "0.8rem" }}
          >
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <button
          className="btn btn-primary d-block mx-auto fs-5 mt-3"
          style={{
            padding: "10px 15px",
            background: "#387ED1",
            width: "200px",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
