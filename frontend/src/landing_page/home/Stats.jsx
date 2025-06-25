import React from "react";

const Stats = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <h2 className="mb-4">Trust with confidence</h2>

            <div className="mb-4">
              <h5>Customer-first always</h5>
              <p className="text-muted">
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments and contribute to 15% of daily
                retail exchange volumes in India.
              </p>
            </div>

            <div className="mb-4">
              <h5>No spam or gimmicks</h5>
              <p className="text-muted">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like. <a href="#home">Our philosophies</a>.
              </p>
            </div>

            <div className="mb-4">
              <h5>The Zerodha universe</h5>
              <p className="text-muted">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>

            <div className="mb-4">
              <h5>Do better with money</h5>
              <p className="text-muted">
                With initiatives like <a href="#home">Nudge</a> and{" "}
                <a href="#home">Kill Switch</a>, we don't just facilitate
                transactions, but actively help you do better with your money.
              </p>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <a
              href="https://zerodha.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="images/ecosystem.png"
                alt="Zerodha ecosystem"
                className="img-fluid mb-4"
                style={{ maxWidth: "100%" }}
              />
            </a>
            <div className="mt-2">
              <a
                href="#"
                className="mx-3 d-inline-block"
                style={{ textDecoration: "none" }}
              >
                Explore our products ➜
              </a>
              <a
                href="#"
                className="mx-3 d-inline-block"
                style={{ textDecoration: "none" }}
              >
                Try Kite demo ➜
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <img
            src="/images/pressLogos.png"
            alt="PressLogos"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
