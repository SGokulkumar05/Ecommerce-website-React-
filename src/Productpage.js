import React, { useState } from "react";
import $ from "jquery";
import {
  StarFill,
  PlusCircleFill,
  DashCircleFill,
} from "react-bootstrap-icons";
import "./css/Product.css";
function Productpage() {
  const [count, setCount] = useState(0);
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const links = [
    {
      link: "https://media.solostove.com/transform/bda418db-568d-4f67-a259-27e28e427919/SSTITAN_Shadow-2?io=transform:fill,width:85,height:85",
      data: "red",
    },
    {
      link: "https://media.solostove.com/transform/9b6b14c0-559b-4ed7-a8a6-2729a93c7fe4/IMG_7020-Edit?io=transform:fill,width:975,height:975",
      data: "blue",
    },
    {
      link: "https://media.solostove.com/transform/69892c9b-9756-4419-83d6-5345c5b397bd/IMG_6776?io=transform:fill,width:975,height:975",
      data: "black",
    },
    {
      link: "https://media.solostove.com/transform/5331db57-837d-4513-9464-60140609a124/Beach_Titan-Gear-Kit-08?io=transform:fill,width:975,height:975",
      data: "pink",
    },
  ];
  $(".image-cont").on("click", function () {
    var headphonesColor = $(this).attr("data-image");
    $(".active").removeClass("active");
    $(".left-column img[data-image = " + headphonesColor + "]").addClass(
      "active"
    );
    $(this).addClass("active");
  });
  $(this).addClass("active");
  return (
    <div style={{ marginTop: "6rem" }}>
      <section className="containe ">
        <div className="left-column">
          {links.map((ele) => (
            <ProductReturn data={ele.data} link={ele.link} />
          ))}
        </div>
        <div className="right-column">
          <div className="product-description">
            <h5 style={{ fontWeight: "bold" }}>Yukon 2.0</h5>
            <div>
              <span style={{ color: "grey", fontWeight: "bold" }}>
                <StarFill style={{ color: "#e4531b", fontSize: "16px" }} />
                <StarFill style={{ color: "#e4531b", fontSize: "16px" }} />
                <StarFill style={{ color: "#e4531b", fontSize: "16px" }} />
                <StarFill style={{ color: "#e4531b", fontSize: "16px" }} />
                <StarFill style={{ color: "#e4531b", fontSize: "16px" }} />
                &nbsp; 7107 Reviews
              </span>
            </div>
            <div className="d-flex gap-3 mt-2 ">
              <DashCircleFill
                id="minus"
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#e4531b",
                }}
                onClick={handleMinus}
              />
              <h6 id="pcount" style={{ fontSize: "18px", fontWeight: "800" }}>
                {count}
              </h6>
              <PlusCircleFill
                id="plus"
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#e4531b",
                }}
                onClick={(e) => setCount(count + 1)}
              />
            </div>
            <span style={{ fontWeight: "bold" }} id="final">
              ${count * 469.9}
            </span>{" "}
            &nbsp;
            <span
              style={{
                color: "grey",
                textDecoration: "line-through",
                fontWeight: "bolder",
              }}
            >
              ${count * 749.99}
            </span>
            <br />
            <span style={{ color: "#C90C38", fontWeight: "bolder" }} id="save">
              You save ${count * 280}
            </span>
            <br />
            <br />
          </div>
          <div className="product-configuration">
            <div className="product-color">
              <span>Images</span>
              <div className="color-choose">
                {links.map((ele) => (
                  <div>
                    <img
                      className="image-cont"
                      data-image={ele.data}
                      src={ele.link}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="cable-config">
              <span>Select Size</span>

              <div className="cable-choose">
                <button>Bonfire</button>
                <button>Yukon</button>
                <button>Ranger</button>
              </div>
            </div>
          </div>
          <div className="product-price">
            <span style={{ fontSize: "30px", fontWeight: "600" }}>
              ${Math.floor(count * 469.9)}
            </span>
            <button className="cart-btn">Add to cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}
function ProductReturn(props) {
  return (
    <img
      className="image-cont"
      data-image={props.data}
      className="active"
      src={props.link}
      alt=""
    />
  );
}

export default Productpage;
