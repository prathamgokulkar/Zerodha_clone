import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios
      .get("https://import.meta.env.VITE_API_URL/allOrders")
      .then((res) => setAllOrders(res.data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  return (
    <div className="orders container mt-4">
      <div className="no-orders row justify-content-center">
        {allOrders.length === 0 ? (
          <div className="no-orders text-center col-12 col-md-8">
            <p>You haven't placed any orders today</p>
            <p>Get started using the wishlist</p>
            <Link to="/" className="btn btn-primary">
              Get started
            </Link>
          </div>
        ) : (
          <div className="order-table col-12">
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="thead-light">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
