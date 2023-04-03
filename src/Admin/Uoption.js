import React from "react";
import "./Forms.css";
import { Link } from "react-router-dom";
const Uoption = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        width: "fit-content",
        gap: "4rem",
      }}
    >
      <Link to="/utilities">
        <div
          className="card1"
          style={{
            border: ".25px solid #e1dbdb",
            transition: "0.3s",
            width: "13rem",
            textAlign: "center",
            margin: "12rem auto",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <div style={{ padding: "35px 13px", fontWeight: "bold" }}>
            Category
          </div>
        </div>
      </Link>
      <Link to="/subcategory">
        <div
          className="card2"
          style={{
            border: ".25px solid #e1dbdb",
            transition: "0.3s",
            width: "13rem",
            height: "94px",
            textAlign: "center",
            margin: "12rem auto",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <div style={{ padding: "30px 16px", fontWeight: "bold" }}>
            SubCategory
          </div>
        </div>
      </Link>
    </div>
  );
};
export const Nav = () => {
  let s = "> Utility Option";
  return (
    <Link to="/uoption">
      <div
        style={{
          color: "black",
          padding: "15px 8px",
          fontSize: "15px",
          fontWeight: "600",
        }}
      >
        {s}
      </div>
    </Link>
  );
};

export default Uoption;
