import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

function Utilities(props) {
  let data = [
    {
      catagorie: "Fire Pits",
      subCatagories: ["Fire Pits", "Bundles", "Accessories", "Cooking System"],
    },
    {
      catagorie: "New Arrivals",
      subCatagories: [
        "New in Fire Pits",
        "New In Pizza Oven",
        "New Tower Patio Heater",
      ],
    },
    {
      catagorie: "Pizza Oven",
      subCatagories: [
        "Pi Pizza Oven",
        "Bundles",
        "Pi Ingredients",
        "Accessories",
      ],
    },
    {
      catagorie: "Patio Heater",
      subCatagories: ["Tower Patio Heater", "Accessories"],
    },
  ];
  // console.log({ catagorie: props.cats, subCatagories: [props.subcats] });
  const [catagories, setCatagorie] = useState(data);
  const handleDelete = (ele) => {
    setCatagorie(catagories.filter((item) => item.catagorie !== ele));
  };
  return (
    <div style={{ marginTop: "4rem" }}>
      <Link to="/cform">
        <button className="btns1">+ Add Category</button>
      </Link>
      <Table
        className="table-striped"
        responsive
        striped
        hover
        style={{
          textAlign: "center",
          width: "50rem",
          margin: "2rem auto",
          border: "2px solid #e4531b",
          borderRadius: "50px",
        }}
      >
        <thead>
          <tr>
            <th>S.No</th>
            <th>Catagories</th>
            <th>SubCatagories</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {catagories.map((val, idx) => {
            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{val.catagorie}</td>
                <td>{val.subCatagories + " "}</td>
                <td>
                  <Link to="/cform">
                    <PencilFill style={{ color: "e4531b" }} />
                  </Link>
                </td>
                <td>
                  <Trash3Fill
                    style={{ color: "e4531b" }}
                    onClick={() => handleDelete(val.catagorie)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export function Cform() {
  const nav = useNavigate();
  const [cat, setCat] = useState("");
  const [subcat, setSubcat] = useState("");
  const SendData = (event) => {
    event.preventDefault();
    alert("Utility Added Successfully");
    nav("/utilities");
    // <Utilities cats={cat} subcats={subcat} />;
  };
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "8rem" }}
    >
      <div>
        <h4 style={{ textAlign: "center", color: "black" }}>Add Catagory</h4>
        <form onSubmit={SendData}>
          <div
            style={{
              borderRadius: "4px",
              width: "30rem",
              border: "2px solid black",
              padding: "2px 4px",
              marginBottom: "0",
              marginTop: "1.5rem",
            }}
          >
            <label style={{ fontSize: "13px", fontWeight: "700" }} id="email">
              Catagory
            </label>
            <input
              type="text"
              className="px-2 p-2 w-100"
              id="uname"
              placeholder="Catagory"
              autocomplete="username"
              style={{ border: "none" }}
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              required
            />
          </div>
          <br />
          <div
            style={{
              borderRadius: "4px",
              width: "30rem",
              border: "2px solid black",
              padding: "2px 4px",
              marginBottom: "0",
            }}
          >
            <label style={{ fontSize: "13px", fontWeight: "700" }}>
              SubCatagorie
            </label>
            <input
              type="text"
              className="px-2 p-2 w-100"
              style={{ border: "none" }}
              placeholder="SubCatagory"
              autocomplete="current-password"
              id="pwd"
              value={subcat}
              onChange={(e) => setSubcat(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              style={{
                maxWidth: "10rem",
                height: "45px",
                fontSize: "18px",
                color: "white",
                fontWeight: "700",
                marginTop: "1.2rem",
              }}
              className="bttn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Utilities;
