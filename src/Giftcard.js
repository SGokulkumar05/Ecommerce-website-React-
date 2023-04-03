import React, { useState } from "react";
import "./css/Forms.css";
import $ from "jquery";
function Giftcards() {
  const [amount, setAmount] = useState();
  const [remail, setRemail] = useState("");
  const [rname, setRname] = useState("");
  const [yemail, setYemail] = useState("");
  const [yname, setYname] = useState("");
  const handleAmount = (e) => {
    var val = e.target.value;
    e.preventDefault();
    $(".error").remove();
    if (val <= 25) {
      $("#amount").after(
        '<div class="error">You must enter amount greater than $25</div>'
      );
    }
    if (val === "") {
      $(".error").remove();
    }
    setAmount(val);
    console.log(amount);
  };
  const handleRemail = (e) => {
    e.preventDefault();
    $(".error").remove();
    var regEx1 = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!regEx1.test(remail)) {
      $("#remail").after('<div class="error">*Enter a valid email</div>');
    }
    if (e.target.value === "") {
      $(".error").remove();
    }
    setRemail(e.target.value);
  };
  const handleRname = (e) => {
    e.preventDefault();
    $(".error").remove();
    if (!/^[A-Za-z\s]*$/.test(rname)) {
      $("#rname").after('<div class="error">*Enter the name</div>');
    }
    if (e.target.value === "") {
      $(".error").remove();
    }
    setRname(e.target.value);
  };
  const handleYemail = (e) => {
    e.preventDefault();
    $(".error").remove();
    var regEx1 = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!regEx1.test(yemail)) {
      $("#email").after('<div class="error">*Enter a valid email</div>');
    }
    if (e.target.value === "") {
      $(".error").remove();
    }
    setYemail(e.target.value);
  };
  const handleyname = (e) => {
    e.preventDefault();
    $(".error").remove();
    if (!/^[A-Za-z\s]*$/.test(yname)) {
      $("#yname").after('<div class="error">*Enter the name</div>');
    }
    if (e.target.value === "") {
      $(".error").remove();
    }
    setYname(e.target.value);
  };
  return (
    <section className="container" style={{ marginTop: "9rem" }}>
      <div className="row">
        <div className="col-sm">
          <img
            className="img-fluid"
            src={process.env.PUBLIC_URL + "/giftcard.png"}
            alt=""
            style={{ height: "46rem" }}
          />
        </div>
        <div
          className="col-sm gift-form"
          style={{ width: "30rem", marginLeft: "60px" }}
        >
          <form name="theform">
            <div
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                marginBottom: "6px",
              }}
            >
              Solo Stove Digital Gift Card
            </div>
            <div className="gtext ">
              Select An Amount:
              <br />
              <br />
              <button
                style={{
                  border: "2px solid grey",
                  fontWeight: 700,
                  width: "100px",
                  height: "50px",
                  borderRadius: "5px",
                }}
              >
                $100
              </button>
              &nbsp;
              <button
                style={{
                  border: "2px solid grey",
                  fontWeight: 700,
                  width: "100px",
                  height: "50px",
                  borderRadius: "5px",
                }}
              >
                $250
              </button>
              &nbsp;
              <button
                style={{
                  border: "2px solid grey",
                  fontWeight: 700,
                  width: "100px",
                  height: "50px",
                  borderRadius: "5px",
                }}
              >
                $500
              </button>
            </div>
            <br />
            <div className="gtext">
              Custom Amount:
              <br />
              <br />
              <div className="form-valid">
                <input
                  type="number"
                  placeholder="< $25"
                  value={amount}
                  onChange={(e) => handleAmount(e)}
                />
                <p id="amount"></p>
              </div>
            </div>
            <br />
            <div className="gtext">
              To:
              <br />
              <br />
              <div className="form-valid">
                <input
                  type="text"
                  placeholder="Recipient Name"
                  value={rname}
                  onChange={(e) => handleRname(e)}
                />
                <p id="rname" style={{ display: "none", color: "brown" }}></p>
              </div>
              <br />
              <div className="form-valid">
                <input
                  type="email"
                  onChange={(e) => handleRemail(e)}
                  value={remail}
                  placeholder="Recipient Email Address"
                />
                <p id="remail" style={{ display: "none", color: "brown" }}></p>
              </div>
            </div>
            <br />
            <div className="gtext">
              From:
              <br />
              <br />
              <div className="form-valid">
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) => handleyname(e)}
                  value={yname}
                />
                <p id="yname" style={{ display: "none", color: "brown" }}></p>
              </div>
              <br />
              <div className="form-valid">
                <input
                  type="email"
                  onChange={(e) => handleYemail(e)}
                  value={yemail}
                  placeholder="Your Email Address"
                />
                <p id="email" style={{ display: "none", color: "brown" }}>
                  Invalid Email Format
                </p>
              </div>
            </div>
            <br />
            <div className="gtext">
              Gift Message:
              <br />
              <br />
              <div className="form-valid">
                <input type="text" placeholder="Message (Optional)" />
              </div>
            </div>
            <br />
            <button
              id="submitbutton"
              type="submit"
              className="form-button"
              value="Submit"
            >
              ADD TO CART
            </button>
          </form>
          <div>
            <div
              style={{
                fontSize: "21px",
                fontWeight: "bold",
                marginBottom: "6px",
                marginTop: "2rem",
              }}
            >
              Gift Card Details
            </div>
            <ul style={{ fontSize: "16px", width: "15rem" }}>
              <li>There's no expiration data for gift cards.</li>
              <li>
                Gift cards are nonrefundable and are available in USD only.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Giftcards;
