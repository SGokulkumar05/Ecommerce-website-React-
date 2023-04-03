import React, { useState } from "react";
import $ from "jquery";
import Table from "react-bootstrap/Table";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

function Usubcatagory(props) {
  let data = [
    {
      id: 1,
      subcatagory: "Bundles",
      catagorie: "Fire Pits",
    },
    {
      id: 2,
      subcatagory: "Accessories",
      catagorie: "New Arrivals",
    },
    {
      id: 3,
      subcatagory: "Camp stove",
      catagorie: "Pizza Oven",
    },
    {
      id: 4,
      subcatagory: "Tower patio Heater",
      catagorie: "Patio Heater",
    },
    {
      id: 5,
      subcatagory: "Camp stove",
      catagorie: "Pizza Oven",
    },
    {
      id: 6,
      subcatagory: "Tower patio Heater",
      catagorie: "Patio Heater",
    },
  ];
  const [catagories, setCatagorie] = useState(data);
  const handleDelete = (ele) => {
    setCatagorie(catagories.filter((item) => item.id !== ele));
  };
  return (
    <div style={{ marginTop: "2.5rem" }}>
      <Link to="/cform">
        <button className="btns3">+ Add Category</button>
      </Link>
      <Table
        className="table-striped"
        responsive
        striped
        hover
        style={{
          textAlign: "center",
          width: "40rem",
          margin: "2rem auto",
          border: "2px solid #e4531b",
          borderRadius: "50px",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Sub Category</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {catagories.map((val, idx) => {
            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{val.subcatagory}</td>
                <td>{val.catagorie}</td>
                <td>
                  <Link to="/cform">
                    <PencilFill style={{ color: "e4531b" }} />
                  </Link>
                </td>
                <td>
                  <Trash3Fill
                    style={{ color: "e4531b" }}
                    onClick={() => handleDelete(val.id)}
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
  const [catagory, setCatagory] = useState("");
  const [subcat, setSubcat] = useState("");
  let final = [];
  const sendData = (event) => {
    event.preventDefault();

    $(".error").remove();
    if (catagory === "") {
      $("#catagory").after('<div class="error">*Select Catagory</div>');
    } else {
      final.push("1");
    }
    if (subcat === "") {
      $("#subcatagory").after('<div class="error">*Select Catagory</div>');
    } else {
      final.push("2");
    }
    if (final.length === 2) {
      alert("Utility Added Successfully" + catagory, subcat);
      nav("/subcategory");
    }
  };
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "8rem" }}
    >
      <div>
        <h4 style={{ textAlign: "center", color: "black" }}>Add Category</h4>
        <form onSubmit={sendData}>
          <div
            className="col-sm"
            style={{
              borderRadius: "4px",
              width: "30rem",
              border: "2px solid black",
              padding: "2px 4px",
              marginBottom: "0",
            }}
          >
            <div className="d-flex gap-2 ">
              <label
                style={{ fontSize: "13px", fontWeight: " 700" }}
                id="catagory"
              >
                CATEGORY
              </label>
            </div>
            <select
              name="surname"
              id="surname"
              className="px-2 p-2 w-100"
              style={{
                width: "3.5rem",
                backgroundColor: "white",
                border: "none",
              }}
              value={catagory}
              onChange={(e) => setCatagory(e.target.value)}
            >
              <option value="Select">Select</option>
              <option value="Fire Pits">Fire Pits</option>
              <option value="New Arrivals">New Arrivals</option>
              <option value="Pizza Oven">Pizza Oven</option>
            </select>
          </div>
          <br />
          <div
            style={{
              borderRadius: "4px",
              width: "30rem",
              border: "2px solid black",
              padding: "0px 4px",
              marginBottom: "0",
            }}
          >
            <div className="d-flex gap-2 ">
              <label
                style={{ fontSize: "13px", fontWeight: " 700" }}
                id="subcatagory"
              >
                SUBCATEGORY
              </label>
            </div>
            <input
              type="text"
              className="px-2 p-2 w-100"
              style={{ border: "none" }}
              placeholder="SubCatagory"
              autocomplete="current-password"
              id="pwd"
              value={subcat}
              onChange={(e) => setSubcat(e.target.value)}
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
export default Usubcatagory;
