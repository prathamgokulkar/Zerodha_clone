import React from "react";

const Team = () => {
  return (
    <section className="about-team">
      <div className="container">
        <h2 className="text-center mb-5">People</h2>
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="./images/nithinKamath.jpg"
              alt="founder"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "250px", width: "100%" }}
            />
            <h5 className="pt-3">Nithin Kamath</h5>
            <p className="text-muted">Founder, CEO</p>
          </div>
          <div className="col-12 col-md-8">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
              <a href="#">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
