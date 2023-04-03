import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Forms.css";
import { PencilFill, Trash3Fill, BoxArrowRight } from "react-bootstrap-icons";
import Table from "react-bootstrap/Table";
function Option() {
  return (
    <div>
      <div
        style={{
          width: "100vw",
          backgroundColor: "#e4531b",
          height: "3rem",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ color: "white", padding: "8px 8px" }}>Dashboard</h4>
        <Link to="/Alogin">
          <BoxArrowRight
            style={{
              color: "white",
              fontSize: "26px",
              margin: "8px",
              cursor: "pointer",
            }}
          />
        </Link>
      </div>
      <div style={{ marginTop: "12rem", textAlign: "center" }}>
        <Link to="/productlist">
          <img
            style={{
              width: "15rem",
              boxShadow: "0px 0px 10px 10px #e5e5e5",
              cursor: "pointer",
              height: "200px",
              objectFit: "cover",
            }}
            src="https://www.upgrad.com/blog/wp-content/uploads/2020/07/28C-Product_Management.png"
            alt=""
          />
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<<<<<<< HEAD
        <Link to="/utilities">
=======
<<<<<<< HEAD
        <Link to="/utilities">
=======
        <Link to="/uoption">
>>>>>>> 0440c72 (Final commit)
>>>>>>> 3911f62 (Final Commit)
          <img
            style={{
              width: "15rem",
              boxShadow: "0px 0px 10px 5px #e5e5e5",
              cursor: "pointer",
              height: "200px",
            }}
            src="https://www.icsystem.com/wp-content/uploads/2016/11/utility-utilities-files-1.jpg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
export function Productlist() {
  const datas = [
    {
      id: 1,
      productname: "Bonfire 2.0",
      price: "$230",
      astock: "50",
      acity: "chennai,Bangalore,Coimbatore",
    },
    {
      id: 2,
      productname: "Bonfire 2.0",
      price: "$230",
      astock: "50",
      acity: "chennai,Bangalore,Coimbatore",
    },
    {
      id: 3,
      productname: "Bonfire 2.0",
      price: "$230",
      astock: "50",
      acity: "chennai,Bangalore,Coimbatore",
    },
    {
      id: 4,
      productname: "Bonfire 2.0",
      price: "$230",
      astock: "50",
      acity: "chennai,Bangalore,Coimbatore",
    },
    {
      id: 5,
      productname: "Bonfire 2.0",
      price: "$230",
      astock: "50",
      acity: "chennai,Bangalore,Coimbatore",
    },
    {
      id: 6,
      productname: "Bonfire 2.0",
      price: "$230",
      astock: "50",
      acity: "chennai,Bangalore,Coimbatore",
    },
    {
      id: 7,
      productname: "Bonfire 2.0",
      price: "$230",
      astock: "50",
      acity: "chennai,Bangalore,Coimbatore",
    },
    {
      id: 8,
      productname: "Bonfire 2.0",
      price: "$230",
      astock: "50",
      acity: "chennai,Bangalore,Coimbatore",
    },
  ];
  const [data, setData] = useState(datas);
  const handleDelete = (id, product) => {
    alert(product + " Product Deleted");
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3 style={{ textAlign: "center" }}>Available product list</h3>
      <Link to="/Admin">
        <button className="btns">+ Add product</button>
      </Link>
      <div style={{ marginTop: "4rem" }}>
        <Table
          className="table-striped"
          responsive
          striped
          hover
          style={{
            textAlign: "center",
            width: "50rem",
            margin: "0 auto",
            border: "2px solid #e4531b",
            borderRadius: "50px",
          }}
        >
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Available Stock</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, idx) => {
              return (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{val.productname}</td>
                  <td>{val.price}</td>
                  <td>{val.astock}</td>
                  <td>
                    <Link to="/Admin">
                      <PencilFill style={{ color: "e4531b" }} />
                    </Link>
                  </td>
                  <td>
                    <Trash3Fill
                      style={{ color: "e4531b" }}
                      onClick={() => handleDelete(val.id, val.productname)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export function Dashboard() {
  let s = "> Dashboard";
  return (
    <Link to="/Option">
      <div
        style={{
          color: "black",
          padding: "15px 8px",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        {s}
      </div>
    </Link>
  );
}
export default Option;
