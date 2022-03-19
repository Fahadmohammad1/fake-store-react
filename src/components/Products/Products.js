import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div className="row row-cols-3">
          <div>
            <div className="card">
              <img className="w-50" src={product.image} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
