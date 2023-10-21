import React from "react";
import logo from "../assets/img/logo.png";
import imageApp from "../assets/img/pay/app.jpg";
import imagePlay from "../assets/img/pay/play.jpg";
import imagePay from "../assets/img/pay/pay.png";
import "../assets/css/style.css";

const Footer = () => {
  return (
    <div>
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up for Newsletter</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>{" "}
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email"></input>
          <button className="normal">Sign Up</button>
        </div>
      </section>

      <div id="footer" className="section-p1">
        <div className="col">
          <img className="logo" src={logo} alt=""></img>
          <h4>Contact</h4>
          <p>
            {" "}
            <strong>Address:</strong> 54 Nguyen Luong bang, Da Nang
          </p>
          <p>
            {" "}
            <strong>Phone: </strong> 0999.999.999
          </p>
          <p>
            {" "}
            <strong>Hours: </strong>9.00am to 16.pm, Mon-Sat
          </p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="/#">About Us</a>
          <a href="/#">Delivery Information </a>
          <a href="/#">Privacy Policy</a>
          <a href="/#">Term & Conditions</a>
          <a href="/#">Contact us</a>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <a href="/#">Sign In</a>
          <a href="/#">View Cart</a>
          <a href="/#">My Wishlist</a>
          <a href="/#">Track My order</a>
          <a href="/#">Help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src={imageApp} alt=""></img>
            <img src={imagePlay} alt=""></img>
          </div>
          <p>Secured Payment Gateways</p>
          <img src={imagePay} alt=""></img>
        </div>

        <div className="copyright">
          <p> &#169; 2022, PBL6 Web Shop </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
