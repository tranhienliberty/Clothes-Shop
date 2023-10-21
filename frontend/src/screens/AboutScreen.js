import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutScreen = () => {
  return (
    <div>
      <Header />
      <section id="page-header" className="about-header">
        <br />
        <h2>#KnowUs</h2>
        <p>Information about us</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src={require("../assets/img/about/a6.jpg")} alt=""></img>
        <div>
          <h2
            className="who-we-are"
            style={{ fontFamily: '"Ubuntu", sans-serif', fontWeight: "700" }}
          >
            Who We Are?
          </h2>
          <p style={{ fontFamily: '"Ubuntu", sans-serif', fontWeight: "400" }}>
            We develop our own brands, treating each as an independent label
            with its own creative team and aesthetic. As a group, they have a
            few things in common: an effortless appeal, a focus on fit and an
            of-the-moment point of view. We sweat the small stuff. It's why we
            search out the best mills and factories around the world. It's why
            we consider (and reconsider) every last seam, pleat and button. It's
            why our clothes look and feel so good.
          </p>
          <br />
          <br />
        </div>
      </section>

      <section id="about-app" className="section-p1">
        <h1>
          Download Our <a href="/#">App</a>{" "}
        </h1>
        <div className="video">
          <img className="about-img" src={require("../assets/img/mobile3.png")} alt="" width="20%" style={{marginRight:'40px',borderRadius:'10px',boxShadow:'0 0 10px rgba(0,0,0.1)'}}/>
            <img className="about-img" src={require("../assets/img/mobile2.png")} alt="" width="20%" style={{borderRadius:'10px',boxShadow:'0 0 10px rgba(0,0,0.1)'}} />
        </div>
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

      <Footer />
    </div>
  );
};

export default AboutScreen;
