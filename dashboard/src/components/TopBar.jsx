import React from "react";
import Menu from "./Menu.jsx";

const TopBar = () => {
  return (
    <div className="topbar-container container-fluid px-3 py-2">
      <div className="row align-items-center justify-content-between">
        <div className="indices-container col-12 col-md-6 d-flex flex-wrap gap-3 mb-2 mb-md-0">
          <div className="nifty">
            <p className="index mb-0">NIFTY 50</p>
            <p className="index-points mb-0">{100.2}</p>
            <p className="percent mb-0"></p>
          </div>
          <div className="sensex">
            <p className="index mb-0">SENSEX</p>
            <p className="index-points mb-0">{100.2}</p>
            <p className="percent mb-0"></p>
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
