import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph.jsx";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodha-clone-ivory.vercel.app/allHoldings")
      .then((res) => setAllHoldings(res.data));
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="container-fluid mt-4">
      <h3 className="title mb-4">Holdings ({allHoldings.length})</h3>

      <div className="order-table table-responsive mb-4">
        <table
          className="table table-bordered table-hover w-100 text-center"
          style={{ minWidth: "800px" }}
        >
          <thead className="thead-light">
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-success" : "text-danger";
              const dayClass = stock.isLoss ? "text-danger" : "text-success";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row text-center mb-4">
        <div className="col-12 col-md-4 mb-3">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <h5 className="text-success">1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <div className="mb-4">
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Holdings;
