import React from "react";

const RightSection = ({ img, title, description, cta1, cta2 }) => {
  return (
    <div className="container my-5 px-5">
      <section>
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1 text-center text-md-start mb-4 mb-md-0">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="mt-3">
              {cta1 && (
                <a href="#" className="me-4">
                  {cta1} ➜
                </a>
              )}
              {cta2 && <a href="#">{cta2} ➜</a>}
            </div>
          </div>

          <div className="col-md-6 order-1 order-md-2 text-center">
            <img
              src={img}
              alt="Image"
              className="img-fluid"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightSection;
