import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";

function Ucatagory(props) {
  let data = [
    {
      id: 1,
      catagorie: "Fire Pits",
    },
    {
      id: 2,
      catagorie: "New Arrivals",
    },
    {
      id: 3,
      catagorie: "Pizza Oven",
    },
    {
      id: 4,
      catagorie: "Patio Heater",
    },
  ];
  const [catagories, setCatagorie] = useState(data);
  const handleDelete = (ele) => {
    setCatagorie(catagories.filter((item) => item.catagorie !== ele));
  };
  return (
    <div style={{ marginTop: "2.8rem" }}>
      <div>
        <div
          style={{
            borderRadius: "4px",
            width: "30rem",
            border: "2px solid black",
            padding: "0px 4px",
            margin: "0 22rem",
            marginTop: "1.5rem",
          }}
        >
          <label style={{ fontSize: "13px", fontWeight: "700" }} id="email">
            Category
          </label>
          <input
            type="text"
            className="px-2 p-2 w-100"
            id="uname"
            placeholder="Category"
            autocomplete="username"
            style={{ border: "none", height: "2rem" }}
            // value={cat}
            // onChange={(e) => setCat(e.target.value)}
            required
          />
        </div>
        <button className="btns1">Add Category</button>
      </div>
      <Table
        className="table-striped"
        responsive
        striped
        hover
        style={{
          textAlign: "center",
          width: "40rem",
          margin: "1rem auto",
          border: "2px solid #e4531b",
          borderRadius: "50px",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
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
                <td>{val.catagorie}</td>
                <td>
                  <PencilFill style={{ color: "e4531b" }} />
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
export default Ucatagory;
