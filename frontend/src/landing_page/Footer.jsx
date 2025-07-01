import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container-fluid border-top">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 mt-5">
        <div className="col-12 col-md-3 mb-4 d-flex flex-column align-items-start">
          <img src="/images/logo.svg" alt="Logo" style={{ width: "50%" }} />
          <p className="mt-3" style={{ fontSize: "13px" }}>
            &copy;2010 - 2025, Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </p>
        </div>

        <div className="col-9 mb-4">
          <h6 className="footer-heading">Account</h6>
          <Link to="" className="footer-links">
            Open demat account
          </Link>
          <br />
          <Link to="" className="footer-links">
            Minor demat account
          </Link>
          <br />
          <Link to="" className="footer-links">
            NRI demat account
          </Link>
          <br />
          <Link to="" className="footer-links">
            Commodity
          </Link>
          <br />
          <Link to="" className="footer-links">
            Dematerialisation
          </Link>
          <br />
          <Link to="" className="footer-links">
            Fund transfer
          </Link>
          <br />
          <Link to="" className="footer-links">
            MTF
          </Link>
          <br />
          <Link to="" className="footer-links">
            Referral program
          </Link>
          <br />
        </div>
        <div className="col mb-4">
          <h6>Support</h6>
          <Link to="" className="footer-links">
            Contact us
          </Link>
          <br />
          <Link to="" className="footer-links">
            Support portal
          </Link>
          <br />
          <Link to="" className="footer-links">
            How to file a complaint?
          </Link>
          <br />
          <Link to="" className="footer-links">
            Status of your complaints
          </Link>
          <br />
          <Link to="" className="footer-links">
            Bulletin
          </Link>
          <br />
          <Link to="" className="footer-links">
            Circular
          </Link>
          <br />
          <Link to="" className="footer-links">
            Z-Connect blog
          </Link>
          <br />
          <Link to="" className="footer-links">
            Downloads
          </Link>
          <br />
        </div>
        <div className="col mb-4">
          <h6>Company</h6>
          <Link to="" className="footer-links">
            About
          </Link>
          <br />
          <Link to="" className="footer-links">
            Philosophy
          </Link>
          <br />
          <Link to="" className="footer-links">
            Press & media
          </Link>
          <br />
          <Link to="" className="footer-links">
            Careers
          </Link>
          <br />
          <Link to="" className="footer-links">
            Zerodha Cares (CSR)
          </Link>
          <br />
          <Link to="" className="footer-links">
            Zerodha.tech
          </Link>
          <br />
          <Link to="" className="footer-links">
            Open source
          </Link>
          <br />
        </div>
        <div className="col mb-4">
          <h6>Outer-links</h6>
          <Link to="" className="footer-links">
            Upcoming IPOs
          </Link>
          <br />
          <Link to="" className="footer-links">
            Brokerage charges
          </Link>
          <br />
          <Link to="" className="footer-links">
            Market holidays
          </Link>
          <br />
          <Link to="" className="footer-links">
            Economic calendar
          </Link>
          <br />
          <Link to="" className="footer-links">
            Calculators
          </Link>
          <br />
          <Link to="" className="footer-links">
            Markets
          </Link>
          <br />
          <Link to="" className="footer-links">
            Sectors
          </Link>
          <br />
        </div>
      </div>

      <div
        className="footer-text mt-5"
        style={{ fontSize: "10px", color: "#6c757d" }}
      >
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
      </div>
    </div>
  );
};

export default Footer;
