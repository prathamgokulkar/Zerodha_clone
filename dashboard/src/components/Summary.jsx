import React from "react";

const Summary = () => {
  return (
    <div className="container mt-4">
      <div className="mb-4">
        <h6 className="text-muted">Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section mb-4">
        <p className="fw-semibold">Equity</p>
        <div className="row">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h3>3.74k</h3>
            <p className="text-muted">Margin available</p>
          </div>
          <div className="col-12 col-md-6">
            <p>
              Margins used <span className="float-end">0</span>
            </p>
            <p>
              Opening balance <span className="float-end">3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section mb-4">
        <p className="fw-semibold">Holdings (13)</p>
        <div className="row">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h3 className="text-success">
              1.55k <small className="text-success">+5.20%</small>
            </h3>
            <p className="text-muted">P&amp;L</p>
          </div>
          <div className="col-12 col-md-6">
            <p>
              Current Value <span className="float-end">31.43k</span>
            </p>
            <p>
              Investment <span className="float-end">29.88k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
};

export default Summary;
