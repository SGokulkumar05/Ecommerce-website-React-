import React from "react";
import "./css/Footer.css";
import { ChevronDown } from "react-bootstrap-icons";
function Footer() {
  const product = [
    "Fire Pits",
    "New Arrivals",
    "Pizza Oven",
    "Patio Heater",
    "Camper Stove",
    "Bundles",
    "Accessories",
    "Wood",
    "Corporate Sales",
  ];
  const support = [
    "Help Center",
    "Contact Us",
    "Shipping & Returns",
    "Returns Portal",
    "Warranty | Damage",
  ];
  const about = [
    "About Us",
    "Corprate Sales",
    "Patents",
    "Create Good",
    "Careers",
    "Investors",
    "Dealer Enquery",
  ];
  const connect = [
    "Showroom",
    "Dealer Locator",
    "Blog",
    "Photo Contest",
    "Story Submission",
    "Media Inquery",
    "Affiliates",
  ];
  const ourbrands = ["Chubbies", "Our Kayak", "ISLE Paddle Board"];

  return (
    <footer className="container-fluid" style={{ width: "100%" }}>
      <section
        className="row d-flex"
        style={{ marginRight: "0px !important", display: "flex !important" }}
      >
        <section
          className="address col-xl-2"
          style={{ marginRight: "6.5rem", marginBottom: "15px" }}
        >
          <img
            src="https://bertram-capital-production.s3.amazonaws.com/system/v2/SpudMedia/1374/attachment/solostove-white-heroheader_original.png"
            alt=""
          />
          <section className="footer-adrs">
            <p>
              1001 Mustang Dr.
              <br />
              Grapevine, TX 76051
              <br />
              visits by appointment only
            </p>
          </section>
        </section>
        <section className="col-xl-2 media-footer">
          <h2 style={{ alignItems: "center" }}>
            Products
            <div
              style={{
                float: "right",
                marginRight: "1rem",
                fontSize: "20px",
              }}
            >
              <ChevronDown />
            </div>
          </h2>
          <section className="products">
            {product.map((ele) => (
              <a href="#firepits">{ele}</a>
            ))}
          </section>
        </section>
        <section className="col-xl-2 media-footer">
          <h2 style={{ alignItems: "center" }}>
            Support
            <div
              style={{
                float: "right",
                marginRight: "1rem",
                fontSize: "20px",
              }}
            >
              <ChevronDown />
            </div>
          </h2>
          <section className="products">
            {support.map((ele) => (
              <a href="#firepits">{ele}</a>
            ))}
          </section>
        </section>
        <section className="col-xl-2 media-footer">
          <h2 style={{ alignItems: "center" }}>
            About
            <div
              style={{
                float: "right",
                marginRight: "1rem",
                fontSize: "20px",
              }}
            >
              <ChevronDown />
            </div>
          </h2>
          <section className="products">
            {about.map((ele) => (
              <a href="#firepits">{ele}</a>
            ))}
          </section>
        </section>
        <section className="col-xl-2 media-footer">
          <h2 style={{ alignItems: "center" }}>
            Connect
            <div
              style={{
                float: "right",
                marginRight: "1rem",
                fontSize: "20px",
              }}
            >
              <ChevronDown />
            </div>
          </h2>
          <section className="products">
            {connect.map((ele) => (
              <a href="#firepits">{ele}</a>
            ))}
          </section>
        </section>
        <section className="col-xl-2 media-footer">
          <h2 style={{ alignItems: "center" }}>
            Shop Our Brands
            <div
              style={{
                float: "right",
                marginRight: "1rem",
                fontSize: "20px",
              }}
            >
              <ChevronDown />
            </div>
          </h2>
          <section className="products">
            {ourbrands.map((ele) => (
              <a href="#firepits">{ele}</a>
            ))}
          </section>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
