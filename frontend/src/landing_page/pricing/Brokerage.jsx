import React from "react";

const Brokerage = () => {
  return (
    <div className="container brokerage-container mt-5">
      <div className="row justify-content-center">
        <h3 className="mb-5 text-center px-3">Charges explained</h3>

        {/* Left column */}
        <div className="col-12 col-md-6 px-3">
          <p>Securities/Commodities transaction tax</p>
          <p style={{ fontSize: "0.7rem" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
            <br />
            <br />
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>

          <p>Transaction/Turnover Charges</p>
          <p style={{ fontSize: "0.7rem" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions. <br />
            <br />
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017) <br />
            <br />
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover. <br />
            <br />
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022. <br />
            <br />
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>

          <p>Call & trade</p>
          <p style={{ fontSize: "0.7rem" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>

          <p>Stamp charges</p>
          <p style={{ fontSize: "0.7rem" }}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <p>NRI brokerage charges</p>
          <ul style={{ fontSize: "0.7rem", paddingLeft: "1rem" }}>
            <li>₹100 per order for futures and options.</li>
            <li>
              For a non-PIS account, 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>

          <p>Account with debit balance</p>
          <p style={{ fontSize: "0.7rem" }}>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>

          <p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
          <ul style={{ fontSize: "0.7rem", paddingLeft: "1rem" }}>
            <li>
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
          </ul>

          <p>Margin Trading Facility (MTF)</p>
          <ul style={{ fontSize: "0.7rem", paddingLeft: "1rem" }}>
            <li>
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold.
            </li>
            <li>
              MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
            </li>
            <li>
              MTF pledge charge: ₹15 + GST per pledge and unpledge request per
              ISIN.
            </li>
          </ul>
        </div>

        {/* Right column */}
        <div className="col-12 col-md-6 px-3 mt-5 mt-md-0">
          <p>GST</p>
          <p style={{ fontSize: "0.7rem" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>

          <p>SEBI Charges</p>
          <p style={{ fontSize: "0.7rem" }}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <p>DP (Depository participant) charges</p>
          <p style={{ fontSize: "0.7rem" }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>

          <p style={{ fontSize: "0.7rem" }}>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>

          <p style={{ fontSize: "0.7rem" }}>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>

          <p>Pledging charges</p>
          <p style={{ fontSize: "0.7rem" }}>
            ₹30 + GST per pledge request per ISIN
          </p>

          <p>AMC (Account maintenance charges)</p>
          <p style={{ fontSize: "0.7rem" }}>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA,<a href=""> Click here</a>
            <br />
            <br />
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC,<a href=""> Click here</a>
          </p>

          <p>Corporate action order charges</p>
          <p style={{ fontSize: "0.7rem" }}>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>

          <p>Off-market transfer charges</p>
          <p style={{ fontSize: "0.7rem" }}>₹25 per transaction.</p>

          <p>Physical CMR request</p>
          <p style={{ fontSize: "0.7rem" }}>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>

          <p>Payment gateway charges</p>
          <p style={{ fontSize: "0.7rem" }}>
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>

          <p>Delayed Payment Charges</p>
          <p style={{ fontSize: "0.7rem" }}>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account. <a href="">Learn more</a>
          </p>

          <p>Trading using 3-in-1 account with block functionality</p>
          <ul style={{ fontSize: "0.7rem", paddingLeft: "1rem" }}>
            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li>Intraday Brokerage: 0.05% per executed order.</li>
          </ul>
        </div>

        <div className="col-12 px-3 mt-5">
          <p>Disclaimer</p>
          <p style={{ fontSize: "0.7rem" }}>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>

      <h4 className="mt-5 px-3 text-center text-md-start">
        Charges for optional value added services
      </h4>
      <div className="px-3">
        <div className="table-responsive">
          <table className="table table-bordered table-striped my-5">
            <thead>
              <tr>
                <th>Service</th>
                <th>Billing Frequency</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly </td>
                <td>Connect: 500 | Historical: 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
