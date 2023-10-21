import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
const ContactScreen = () => {
  return (
    <div>
      <Header />
      <section id="page-header" className="about-header">
        <h2>#let_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit our agency location or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="fa-regular fa-map"></i>
              <p>54 Nguyen Luong Bang, Lien Chieu, Da Nang</p>
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              <p>contact@gmail.com</p>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <p>0999.999.999</p>
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-business-time"></i>
              <p>Monday to Saturday: 9.00am to 16.pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            title="headOfficeMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51491.492410697465!2d108.14103341960609!3d16.063229724758315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d68dff9545%3A0x714561e9f3a7292c!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBLaG9hIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1668767739062!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your name"></input>
          <input type="text" placeholder="E-mail"></input>
          <input type="text" placeholder="Subject"></input>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
          ></textarea>
          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src={require("../assets/img/people/avatar2.png")} alt=""></img>
            <p>
              <span>Hung Nguyen</span>
              CREATIVE DIRECTOR<br></br>
              Phone: +000 912 111<br></br>
              Email: hungnguyenx@xample.com
            </p>
          </div>
          <div>
            {" "}
            <img src={require("../assets/img/people/avarta3.png")} alt=""></img>
            <p>
              <span>Hien Tran</span>
              EDITORIAL DIRECTOR<br></br>
              Phone: +000 123 123<br></br>
              Email: HienTran@xample.com
            </p>
          </div>
          <div>
            <img src={require("../assets/img/people/avarta1.png")} alt=""></img>
            <p>
              <span>Truong Nguyen</span>
              COMMERCE DIRECTOR<br></br>
              Phone: +000 123 000<br></br>
              Email: TruongNguyen@xample.com
            </p>
          </div>
          <div>
            <img src={require("../assets/img/people/avatar5.png")} alt=""></img>
            <p>
              <span>Que Tung</span>
              SENIOR FASHION EDITOR<br></br>
              Phone: +000 123 111 <br></br>
              Email: QueTung@xample.com
            </p>
          </div>
          <div>
            <img src={require("../assets/img/people/avarta4.png")} alt=""></img>
            <p>
              <span>Nghia Pham</span>
              GENERAL MANAGER<br></br>
              Phone: +000 123 456<br></br>
              Email: phng01@xample.com
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactScreen;
