import React from "react";

const Stats = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h2 className="mb-5">Trust with confidences</h2>
          <h5>Customer-first always</h5>
          <p className="mb-5 text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h5>No spam or gimmicks</h5>
          <p className="mb-5 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <a href="#home">Our philosophies</a>.
          </p>
          <h5>The Zerodha universe</h5>
          <p className="mb-5 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h5>Do better with money</h5>
          <p className="mb-5 text-muted">
            With initiatives like <a href="#home">Nudge</a> and
            <a href="#home"> Kill Switch</a>, we don't just facilitate
            transactions, but actively help you do better with your money.
          </p>
        </div>
        <div className="col-6">
          <a
            href="https://zerodha.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/ecosystem.png"
              alt="Zerodha ecosystem"
              className="img-fluid hover-zoom d-block mx-auto pr-5"
              style={{ maxWidth: "650px" }}
            />
          </a>
          <div className="text-center mt-3">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products ➜
            </a>
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Try Kite demo ➜
            </a>
          </div>
        </div>
      </div>
      <img
        src="/images/pressLogos.png"
        alt="PressLogos"
        className="d-block mx-auto img-fluid"
      />
    </div>
  );
};

export default Stats;
