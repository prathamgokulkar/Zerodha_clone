import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://zerodha-clone-2-lc9e.onrender.com/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.data.success) {
        setAlertMsg("Login successful!");
        setTimeout(() => {
          window.location.href = "https://zerodha-clone-gbbk.vercel.app";
        }, 1000);
      } else {
        setAlertMsg(res.data.message || "Login failed.");
      }
    } catch (err) {
      console.error(err);
      setAlertMsg("An error occurred during login.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "450px", width: "100%", margin: "50px" }}
      >
        <h2 className="text-center mb-4">Login</h2>

        {alertMsg && (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            {alertMsg}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
