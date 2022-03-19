import React from "react";

const Menubar = () => {
  return (
    <div className="d-flex justify-content-between">
      <h2>Fake Store</h2>
      <div className="d-flex">
        <a href="_" className="ms-5 text-decoration-none fw-bold">
          Home
        </a>
        <a href="_" className="ms-5 text-decoration-none fw-bold">
          Cart
        </a>
        <a href="_" className="ms-5 text-decoration-none fw-bold">
          Contact
        </a>
        <a href="_" className="ms-5 text-decoration-none fw-bold">
          About
        </a>
      </div>
    </div>
  );
};

export default Menubar;
