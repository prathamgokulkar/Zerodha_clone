import React from "react";

const CreateTicket = () => {
  return (
    <div className="create-ticket-section py-5">
      <div className="container">
        <h5 className="my-4 text-muted px-3 px-md-5">
          To create a ticket, select a relevant topic
        </h5>

        <div className="row px-3 px-md-5">
          <div className="col-12 col-md-6 col-lg-4">
            <h5>
              <i className="fa-solid fa-circle-plus"></i> Account Opening
            </h5>
            <div className="topic-links text-muted">
              <a href="">Resident individual</a>
              <a href="">Minor</a>
              <a href="">Minor Non Resident Indian (NRI)</a>
              <a href="">Company, Partnership, HUF and LLP</a>
              <a href="">Glossary</a>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h5>
              <i className="fa-regular fa-user"></i> Your Zerodha Account
            </h5>
            <div className="topic-links text-muted">
              <a href="">Your Profile</a>
              <a href="">Account modification</a>
              <a href="">
                Client Master Report (CMR) and Depository Participant (DP)
              </a>
              <a href="">Nomination</a>
              <a href="">Transfer and conversion of securities</a>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h5>
              <i className="fa-solid fa-chart-simple"></i> Kite
            </h5>
            <div className="topic-links text-muted">
              <a href="">IPO</a>
              <a href="">Trading FAQs</a>
              <a href="">Margin Trading Facility (MTF) and Margins</a>
              <a href="">Charts and orders</a>
              <a href="">Alerts and Nudges</a>
              <a href="">General</a>
            </div>
          </div>
        </div>

        <div className="row mt-4 px-3 px-md-5">
          <div className="col-12 col-md-6 col-lg-4">
            <h5>
              <i className="fa-solid fa-wallet mt-5"></i> Funds
            </h5>
            <div className="topic-links text-muted">
              <a href="">Add money</a>
              <a href="">Withdraw money</a>
              <a href="">Add bank accounts</a>
              <a href="">eMandates</a>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h5>
              <i className="fa-solid fa-laptop-code mt-5"></i> Console
            </h5>
            <div className="topic-links text-muted">
              <a href="">Portfolio</a>
              <a href="">Corporate actions</a>
              <a href="">Funds statement</a>
              <a href="">Reports</a>
              <a href="">Profile</a>
              <a href="">Segments</a>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <h5>
              <i className="fa-solid fa-coins mt-5"></i> Coin
            </h5>
            <div className="topic-links text-muted">
              <a href="">Mutual funds</a>
              <a href="">National Pension Scheme (NPS)</a>
              <a href="">Features on Coin</a>
              <a href="">Payments and Orders</a>
              <a href="">General</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
