import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();

  const addToCartHandler = () => {
    navigate(`/cart/${product._id}?qty=1`);
  };
  return (
    <div className="pro">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt=""></img>
      </Link>
      <div className="des">
        <span>{product.brand}</span>
        <Link to={`/product/${product._id}`}>
          <h5>{product.name}</h5>
        </Link>
        <div className="star">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color={"#f8e825"}
          />
        </div>
        <h4>${product.price}</h4>
      </div>
      <a onClick={addToCartHandler}>
        <span className="cart">
          <i className="fa-solid fa-arrow-right fa-cart-shopping"></i>
        </span>
      </a>
    </div>
  );
}

export default Product;
