import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
  Container,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useNavigate } from "react-router-dom";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { listProducts } from "../actions/productActions";

function ProductScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [check, setCheck] = useState(0);
  const ref = useRef([]);

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingProductReview,
    error: errorProductReview,
    success: successProductReview,
  } = productReviewCreate;

  const productList = useSelector((state) => state.productList);
  const { errorListProduct, loadingListProduct, products } = productList;

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(id));
    dispatch(listProducts(" "));
  }, [dispatch, successProductReview]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(id, {
        rating,
        comment,
      })
    );
  };


  if (product.name && products && check == 0 && products.length > 0) {
    let count = 0;
    let containerRandom = [];
    let result = []

    const temp = products.filter((item) => {
      return item.category === product.category && product.name !== item.name;
    });

    const number = temp.length > 5 ? 5 : temp.length


    for(let i = 0;i<1000;i++){
      const random = Math.floor(Math.random() * (temp.length + 1));
      if(!containerRandom.includes(random) && temp[random]){
        containerRandom.push(random);
        result.push(temp[random])
        count++;
        if(count >= number){
          break;
        }
      }
    }
    ref.current = result;
  }

  const handleDateTime = (str) => {
    let date = new Date(str);
    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
  };



  return (
    <div>
      <Header></Header>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="main-product-details">
          <div className="header-product-details">
            <div className="container-img-product-details">
              <img src={product.image} alt={product.name}></img>
            </div>
            <div className="container-information-product-details">
              <h2>{product.name}</h2>
              <Rating
                value={product.rating}
                text={`${product.numReviews} ratings`}
                color="#f8e825"
              />
              <div className="price-product-details">
                <p>${product.price}</p>
              </div>

              <select>
                <option selected disabled>
                  Size
                </option>
                <option value="">Size S</option>
                <option value="">Size M</option>
                <option value="">Size L</option>
                <option value="">Size XL</option>
              </select>

              <input
                type="number"
                placeholder="Quantity"
                min={1}
                max={Number(product.countInStock)}
                value={Number(qty)}
                onChange={(e) => setQty(e.target.value)}
                style={{ textAlign: "center" }}
              />

              {product.countInStock > 0 && (
                <div
                  className="btn-cart-product-details"
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </div>
              )}

              <div className="description-product-details">
                <h2>Description</h2>
                <p style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                  {" "}
                  {product.description}
                </p>
              </div>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>

          <div className="related-product-details my-clear">
            <p>Related Products</p>

            {ref.current.length > 0 &&
              ref.current.map((item) => {
                return (
                  <div className="list-product-details">
                    <div className="item-product-details">
                      <div className="item-product-details-img">
                      <a href={`/product/${item._id}`} >
                        <img src={item.image} alt="" /></a>
                      </div>
                      <div className="item-product-details-description">
                        <h2>Premium Brushed Shirt</h2>
                        <Rating
                          value={item.rating}
                          text={`${item.numReviews} reviews`}
                          color={"#f8e825"}
                        />
                        <p   style={{
                      fontFamily: "'Ubuntu', sans-serif",
                    }}>${item.price}</p>
                        <div className="btn-add-cart-product-details">
                        <a href={`/product/${item._id}`} style={{
                      fontFamily: "'Ubuntu', sans-serif",color:'#fff',fontWeight: '400'
                    }}>
                          View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="comment-product-details">
            <h2>Review</h2>
            {product.reviews.length === 0 && (
              <Message variant="info">No Reviews</Message>
            )}
            <Rating
              value={product.rating}
              text={`${product.numReviews} ratings`}
              color="#f8e825"
            />
            <div className="list-review-product-details">
              {product.reviews.map((review) => (
                <div className="item-review-product-details">
                  <h2
                    className="user-review"
                    style={{
                      fontFamily: "'Ubuntu', sans-serif",
                      marginBottom: "0px",
                    }}
                  >
                    {review.name}
                  </h2>
                  <Rating value={review.rating} color="#f8e825" />
                  <p
                    style={{
                      fontFamily: "'Ubuntu', sans-serif",
                      marginTop: "10px",
                    }}
                  >
                    {handleDateTime(review.createdAt.substring(0, 10))}
                  </p>
                  <p claclassName="user-comment">{review.comment}</p>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: "30px" }}>Write review</h2>

            {loadingProductReview && <Loader />}
            {successProductReview && (
              <Message variant="success">Review Submitted</Message>
            )}
            {errorProductReview && (
              <Message variant="danger">{errorProductReview}</Message>
            )}
            {userInfo ? (
              <div className="write-review-product-details my-clear">
                <select
                  as="select"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="1">⭐</option>
                  <option value="2">⭐⭐</option>
                  <option value="3">⭐⭐⭐</option>
                  <option value="4">⭐⭐⭐⭐</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
                <textarea
                  rows="5"
                  cols="120"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button disabled={loadingProductReview} onClick={submitHandler}>
                  Comment
                </button>
              </div>
            ) : (
              <Message variant="info">
                Please <Link to="/login">login</Link> to write a review
              </Message>
            )}
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
}

export default ProductScreen;
