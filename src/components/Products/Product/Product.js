import React from "react";
import { Card } from "react-bootstrap";
import Details from "../../Details/Details";

const Product = ({ product }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="w-50 mx-auto" variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <h3>Price: {product.price}</h3>
          <Details product={product}></Details>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
