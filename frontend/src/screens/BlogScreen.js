import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const BlogScreen = () => {
  return (
    <div>
      <Header />

      <section id="page-header" className="blog-header">
        <br />
        <h2>#ReadMore</h2>
        <p>Read All case studies our products</p>
      </section>
      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src={require("../assets/img/blog/b6.jpg")} alt=""></img>
          </div>
          <div className="blog-details">
            <h4>
              Makeup Artists Love to Use These Inexpensive Foundations on Mature
              Skin
            </h4>
            <p style={{ fontFamily: '"Ubuntu", sans-serif' }}>
              Why the name “Egg Canvas”? Erica was inspired by her Korean
              childhood nickname, which means egg, while “canvas” is the medium
              with which art is created. “Egg Canvas,” therefore, is her
              life—creating beautiful things each day on a blank canvas
            </p>
            <Link
              to="/blogdetail"
              style={{ fontFamily: '"Ubuntu", sans-serif' }}
            >
              CONTINUE READING
            </Link>
          </div>
          <h1>29/11</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={require("../assets/img/blog/b2.jpg")} alt=""></img>
          </div>
          <div className="blog-details">
            <h4>
              Look of the Week: Katie Holmes's Y2K ensemble goes viral for all
              the wrong reasons
            </h4>
            <p style={{ fontFamily: '"Ubuntu", sans-serif' }}>
              But at the iHeartRadio Jingle Bell red carpet in New York last
              Sunday, when Katie Holmes stepped out in true Y2K style in a royal
              blue Tove mini dress styled over raw-hemmed jeans and black New
              Balance trainers, her look went viral for all the wrong reasons.
            </p>
            <Link
              to="/blogbdetail"
              style={{ fontFamily: '"Ubuntu", sans-serif' }}
            >
              CONTINUE READING
            </Link>
          </div>
          <h1>13/12</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={require("../assets/img/blog/b3.jpg")} alt=""></img>
          </div>
          <div className="blog-details">
            <h4>The Cotton-Jersey Zip-up Hoodie</h4>
            <p style={{ fontFamily: '"Ubuntu", sans-serif' }}>
              Atlantic-Pacific creator Blair Eadie has been in the fashion
              industry for several years now. Having worked for companies such
              as Tory Burch and Gap, she has the insider’s experience in how the
              industry has evolved over the years.
            </p>
            <Link
              to="/blogdetail"
              style={{ fontFamily: '"Ubuntu", sans-serif' }}
            >
              CONTINUE READING
            </Link>
          </div>
          <h1>16/12</h1>
        </div>
      </section>
      <section id="pagination" className="section-p1">
        <a href="#/" style={{ margin: "0 4px" }}>
          1
        </a>
        <a href="#/" style={{ margin: "0 4px" }}>
          2
        </a>
        <a href="#/" style={{ margin: "0 4px" }}>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default BlogScreen;
