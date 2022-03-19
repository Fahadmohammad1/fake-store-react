const Menubar = ({ item }) => {
  return (
    <div className="d-flex justify-content-between">
      <h2>Fake Store</h2>
      <div className="d-flex">
        <a href="_" className="ms-5 text-decoration-none fw-bold">
          Home
        </a>
        <a href="_" className="ms-5 text-decoration-none fw-bold">
          Cart<sup>{item}</sup>
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
