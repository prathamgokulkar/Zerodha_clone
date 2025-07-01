import { Link } from "react-router-dom";
const OpenAccount = () => {
  return (
    <div className="heading mt-5 text-center">
      <h2 className="mb-4"> Open a Zerodha account</h2>
      <p className="lead" style={{ fontSize: "20px" }}>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <Link
        to="/signup"
        className="btn btn-primary fs-5 mt-3"
        style={{
          padding: "10px 15px",
          background: "#387ED1",
          textDecoration: "none",
        }}
      >
        Sign up for free
      </Link>
    </div>
  );
};

export default OpenAccount;
