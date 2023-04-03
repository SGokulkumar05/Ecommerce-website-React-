import React from "react";
import { Link } from "react-router-dom";
import "./css/Forms.css";
function Rewards() {
  return (
    <div>
      <section style={{ marginTop: "9rem" }}>
        <div class="containers">
          <img
            src="https://cdn.pixabay.com/photo/2021/09/10/11/19/camping-6612823_960_720.jpg"
            alt="Snow"
            style={{ width: "98.7vw", height: "30rem", objectFit: "cover" }}
          />
          <div class="rtext">
            <h3 style={{ fontWeight: "bolder" }}>Firestarter Rewards</h3>
            <div>
              With more ways to unlock rewards, this is your all-access pass to
              exclusive benefits.
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <Link to="/Signup">
              <button class="bt">Join Us</button>
            </Link>
            <Link to="/SignUp">
              <button class="bttns">Login</button>
            </Link>
          </div>
        </div>
      </section>
      <section class="container-fluid mt-4">
        <div class="heading">How It Works</div>
        <div class="row">
          <div class="col-md text-center">
            <div
              style={{ fontSize: "72px", fontWeight: "bold", color: "#e4531b" }}
            >
              01
            </div>
            <div>
              <h5 style={{ fontWeight: "bold" }}>SIGN UP</h5>
              <div style={{ padding: "0 6rem" }}>
                <div style={{ width: "12rem", textAlign: "center" }}>
                  Create an account and get 500 points.
                </div>
              </div>
            </div>
          </div>
          <div class="col-md text-center">
            <div
              style={{ fontSize: "72px", fontWeight: "bold", color: "#e4531b" }}
            >
              02
            </div>
            <div>
              <h5 style={{ fontWeight: "bold" }}>EARN POINTS</h5>
              <div style={{ padding: "0 6rem" }}>
                <p style={{ width: "15rem", textAlign: "center" }}>
                  Earn points for shopping, referring friends, and more.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md text-center">
            <div
              style={{ fontSize: "72px", fontWeight: "bold", color: "#e4531b" }}
            >
              03
            </div>
            <div>
              <h5 style={{ fontWeight: "bold" }}>REDEEM POINTS</h5>
              <div style={{ padding: "0 5rem" }}>
                <p style={{ width: "13rem", textAlign: "center" }}>
                  Redeem points for store credit or exclusive product releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rewards;
