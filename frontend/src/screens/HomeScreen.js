import React, { useState, useEffect } from "react";
import "../assets/css/style.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import { useNavigate } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import ScrollToTop from "react-scroll-to-top";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  const redirectShop = () => {
    navigate("/shop");
  };
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      navigate("/admin/userlist");
    }
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>

        <button onClick={redirectShop}>Shop now</button>
      </section>

      <section id="feature" className="section-p1 widthlength">
        <div className="fe-box">
          <img src={require("../assets/img/features/f1.png")} alt=""></img>
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f2.png")} alt=""></img>
          <h6>Online order</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f3.png")} alt=""></img>
          <h6>Save money</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f4.png")} alt=""></img>
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f5.png")} alt=""></img>
          <h6>Happy sell</h6>
        </div>
        <div className="fe-box">
          <img src={require("../assets/img/features/f6.png")} alt=""></img>
          <h6>F24/7 support</h6>
        </div>
      </section>

      <section id="banner" className="section-m1">
        <h4>Grand Opening </h4>
        <h2>
          Up to <span>70% Off</span> - All Shirt & Blazer
        </h2>
        <button className="normal" onClick={redirectShop}>
          Explore More
        </button>
      </section>

      <section id="product1" className="section-p1 widthlength">
        <h2>New Product</h2>
        <p>Our New Mordern Design</p>
        <div className="pro-container">
          {products.slice(0, 8).map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </div>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>Crazy deal</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale </span>
          <button className="white" onClick={redirectShop}>
            Learn More
          </button>
        </div>
        <div className="banner-box banner-box2">
          <h4>Winter/Spring</h4>
          <h2>Upcoming season</h2>
          <span>The New trendy T-shirt upcoming</span>
          <button className="white" onClick={redirectShop}>
            Collection
          </button>
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Coming soon</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>NEW OUTERWARE COLLECTION</h2>
          <h3>Coming soon</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>DRESS</h2>
          <h3>New Trendy Prints</h3>
        </div>
      </section>
      <Footer />
      <ScrollToTop smooth />
    </div>
  );
}

export default HomeScreen;
