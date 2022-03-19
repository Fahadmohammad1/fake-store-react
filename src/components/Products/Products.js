import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = ({ cartItem }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="row row-cols-3">
        {products.map((product) => (
          <Product
            cartItem={cartItem}
            product={product}
            key={product.id}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
