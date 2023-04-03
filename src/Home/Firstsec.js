import React from "react";
import "./css/Firstsec.css";
import { Link } from "react-router-dom";
function Images(props) {
  return (
    <div className="col ">
      <div className="pb-3">
        <div className="hover1">
          <h2>{props.h2}</h2>
          <p style={{ lineHeight: "1.5rem", fontSize: "1rem" }}>{props.p}</p>
          {props.button}
        </div>
        <img
          className="img-fluid"
          style={{
            borderRadius: "5px",
            width: "100%",
            height: "16.5rem",
            opacity: ".9",
          }}
          src={props.img}
          alt="img-cnt"
        />
      </div>
    </div>
  );
}

function Firstsec() {
  const Image = [
    {
      h2: "Buy More, Save More On Mesa!",
      p: "Save an extra $10 on each additional Mesa added to cart.",
      button: (
        <Link to="/productpage">
          <button className="imgs-btn2" type="submit">
            SHOP MESA
          </button>
        </Link>
      ),
      img: "https://media.solostove.com/transform/50e4dfdf-2f6a-45e8-8e8a-c2bcc0233713/Alaska-Ranger-01?io=transform:fill,width:900,height:540",
    },
    {
      h2: "$185 Off Pi Pizza Oven",
      p: "Fire up pizza night",
      button: (
        <Link to="/productpage">
          <button className="imgs-btn2" type="submit">
            SHOP PI PIZZA OVEN
          </button>
        </Link>
      ),
      img: "https://media.solostove.com/transform/50e4dfdf-2f6a-45e8-8e8a-c2bcc0233713/Alaska-Ranger-01?io=transform:fill,width:900,height:540",
    },
  ];
  return (
    <section className="image-cnt container-fluid">
      <div className="row">
        <div className="col-md-8 mt-3">
          <div className="hover">
            <h1 style={{ fontWeight: "bold" }}>Get A Stand On Us</h1>
            <p>
              Get a free Stand with any fire pit purchase, limited time only
            </p>
            <Link to="/productpage">
              <button className="imgs-btn1" type="submit">
                SHOP NOW
              </button>
            </Link>
          </div>
          <img
            className="img-fluid"
            style={{ borderRadius: "5px", opacity: ".9" }}
            src="https://cdn.pixabay.com/photo/2021/09/10/11/19/camping-6612823_960_720.jpg"
            alt="img-cnt"
          />
        </div>
        <div className="col-lg-4 mt-3 p-0">
          {Image.map((ele) => (
            <Images img={ele.img} h2={ele.h2} p={ele.p} button={ele.button} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Firstsec;
