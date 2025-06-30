import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/allOrders")
      .then((res) => setAllOrders(res.data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  return (
    <div className="orders">
      <div className="no-orders">
        {allOrders.length === 0 ? (
          <div className="no-orders">
            <p>You haven't placed any orders today</p>
            <p>Get started using the wishlist</p>
            <Link to="/" className="btn">
              Get started
            </Link>
          </div>
        ) : (
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td>{order.mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
