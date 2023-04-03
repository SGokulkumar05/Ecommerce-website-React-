import React, { useState } from "react";
import DatePicker from "react-datepicker";
import $ from "jquery";
import "./Forms.css";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
function Admin() {
  const navigate = useNavigate();
  const [catagory, setCatagory] = useState("");
  const [subcatagory, setsubCatagory] = useState("");
  const [city, setCity] = useState("");
  const [pid, setPid] = useState("");
  const [pnam, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [ldes, setLdes] = useState("");
  const [sdes, setSdes] = useState("");
  const [Cdes, setCdes] = useState("");
  const [astock, setAstock] = useState("");
  const [date, setDate] = useState(new Date());
  console.log(date);
  const handleSubmit = (e) => {
    console.log(catagory);
    e.preventDefault();
    var final = [];
    $(".error").remove();
    if (catagory === "") {
      $("#catagory").after('<div class="error">*Select Catagory</div>');
    } else {
      final.push("1");
    }
    if (subcatagory === "") {
      $("#subcatagory").after('<div class="error">*Select Catagory</div>');
    } else {
      final.push("2");
    }
    if (city === "") {
      $("#acity").after('<div class="error">*Select Catagory</div>');
    } else {
      final.push("3");
    }
    if (pid === "") {
      $("#pid").after('<div class="error">*Enter a product id</div>');
    } else {
      if (/^-?\d+(\.\d+)?$/.test(pid) === false) {
        $("#pid").after('<div class="error">*Enter Product id as number</div>');
      }
      final.push("4");
    }
    if (price === "") {
      $("#price").after('<div class="error">*Enter a price</div>');
    } else {
      if (/^-?\d+(\.\d+)?$/.test(price) === false) {
        $("#price").after('<div class="error">*Enter Price as number</div>');
      }
      final.push("5");
    }
    if (pnam.length < 1) {
      $("#pname").after('<div class="error">*Enter the product name</div>');
    } else {
      final.push("6");
    }
    if (ldes.length < 1) {
      $("#ldes").after('<div class="error">*Enter Large Description</div>');
    } else {
      final.push("7");
    }
    if (sdes.length < 1) {
      $("#sdes").after('<div class="error">*Enter Small Description</div>');
    } else {
      final.push("8");
    }
    if (Cdes.length < 1) {
      $("#cdes").after('<div class="error">*Enter Cart Description</div>');
    } else {
      final.push("9");
    }
    if (astock <= 0) {
      $("#astock").after(
        '<div class="error">*Enter stock greater than 0</div>'
      );
    } else {
      final.push("10");
    }
    if (final.length === 10) {
      alert("Product Added Sucessfully");
      navigate("/productlist");
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="signup">
          <form id="form" onSubmit={handleSubmit}>
            <h4
              className="mb-4"
              style={{
                textAlign: "center",
                fontSize: "37px",
                marginTop: "1rem",
              }}
            >
              Add and Update Product
            </h4>
            <div className="container">
              <div className="row" style={{ gap: "25px" }}>
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
                      CATOGORY
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
                      id="subcatagory"
                    >
                      SUB CATOGORY
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
                    value={subcatagory}
                    onChange={(e) => setsubCatagory(e.target.value)}
                  >
                    <option value="Select">Select</option>
                    <option value="Bonfire 2.0">Bonfire 2.0</option>
                    <option value="Mesa">Mesa</option>
                    <option value="Ranger 2.0">Ranger 2.0</option>
                  </select>
                </div>
              </div>
              <div className="mt-3 row" style={{ gap: "25px" }}>
                <div
                  className="col-sm"
                  style={{
                    gap: "25px",
                    borderRadius: "4px",
                    width: "30rem",
                    border: "2px solid black",
                    padding: "2px 4px",
                  }}
                >
                  <div className="d-flex gap-2 ">
                    <label
                      style={{ fontSize: "13px", fontWeight: " 700" }}
                      id="pid"
                    >
                      PRODUCT ID
                    </label>
                  </div>

                  <input
                    type="text"
                    className="px-2 p-2 w-100"
                    value={pid}
                    onChange={(e) => setPid(e.target.value)}
                    placeholder="Product id"
                    autocomplete="username"
                    style={{ border: "none" }}
                  />
                </div>
                <div
                  className="col-sm"
                  style={{
                    gap: "25px",
                    borderRadius: "4px",
                    width: "30rem",
                    border: "2px solid black",
                    padding: "2px 4px",
                  }}
                >
                  <div className="d-flex gap-2 ">
                    <label
                      style={{ fontSize: "13px", fontWeight: " 700" }}
                      id="pname"
                    >
                      PRODUCT NAME
                    </label>
                  </div>
                  <input
                    type="text"
                    className="px-2 p-2 w-100"
                    value={pnam}
                    onChange={(e) => setPname(e.target.value)}
                    placeholder="Product Name"
                    autocomplete="username"
                    style={{ border: "none" }}
                  />
                </div>
              </div>
              <div className="mt-3 row" style={{ gap: "25px" }}>
                <div
                  className="col-sm"
                  style={{
                    gap: "25px",
                    borderRadius: "4px",
                    width: "30rem",
                    border: "2px solid black",
                    padding: "2px 4px",
                  }}
                >
                  <div className="d-flex gap-2 ">
                    <label
                      style={{ fontSize: "13px", fontWeight: " 700" }}
                      id="price"
                    >
                      PRICE
                    </label>
                  </div>

                  <input
                    type="text"
                    className="px-2 p-2 w-100"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                    autocomplete="username"
                    style={{ border: "none" }}
                  />
                </div>
                <div
                  className="col-sm"
                  style={{
                    gap: "25px",
                    borderRadius: "4px",
                    width: "30rem",
                    border: "2px solid black",
                    padding: "2px 4px",
                  }}
                >
                  <div className="d-flex gap-2 ">
                    <label
                      style={{ fontSize: "13px", fontWeight: " 700" }}
                      id="ldes"
                    >
                      LARGE DESCRIPTION
                    </label>
                  </div>
                  <textarea
                    style={{ border: "none" }}
                    className="px-2 p-2 w-100"
                    id="w3review"
                    name="w3review"
                    placeholder="Large Description"
                    value={ldes}
                    onChange={(e) => setLdes(e.target.value)}
                    rows="1"
                  ></textarea>
                </div>
              </div>
              <div className="mt-4 row gap-4">
                <div
                  className="col-sm"
                  style={{
                    gap: "25px",
                    borderRadius: "4px",
                    width: "30rem",
                    border: "2px solid black",
                    padding: "2px 4px",
                  }}
                >
                  <div className="d-flex gap-2 ">
                    <label
                      style={{ fontSize: "13px", fontWeight: " 700" }}
                      id="sdes"
                    >
                      SMALL DESCRIPTION
                    </label>
                  </div>
                  <textarea
                    style={{ border: "none" }}
                    className="px-2 p-2 w-100"
                    id="w3review"
                    placeholder="Small Description"
                    value={sdes}
                    onChange={(e) => setSdes(e.target.value)}
                    name="w3review"
                    rows="1"
                  ></textarea>
                </div>
                <div
                  className="col-sm"
                  style={{
                    gap: "25px",
                    borderRadius: "4px",
                    width: "30rem",
                    border: "2px solid black",
                    padding: "2px 4px",
                  }}
                >
                  <div className="d-flex gap-2 ">
                    <label
                      style={{ fontSize: "13px", fontWeight: " 700" }}
                      id="cdes"
                    >
                      CART DESCRIPTION
                    </label>
                  </div>
                  <textarea
                    style={{ border: "none" }}
                    className="px-2 p-2 w-100"
                    id="w3review"
                    name="w3review"
                    value={Cdes}
                    onChange={(e) => setCdes(e.target.value)}
                    placeholder="Cart Description"
                    rows="1"
                  ></textarea>
                </div>
              </div>
              <div className="mt-4 row gap-4">
                <div
                  className="col-sm"
                  style={{
                    gap: "25px",
                    borderRadius: "4px",
                    width: "30rem",
                    border: "2px solid black",
                    padding: "2px 4px",
                  }}
                >
                  <div className="d-flex gap-2 ">
                    <label
                      style={{ fontSize: "13px", fontWeight: "700" }}
                      id="dob"
                    >
                      CREATED DATE
                    </label>
                  </div>

                  <DatePicker
                    className="px-2 p-2 w-100"
                    id="dobs"
                    placeholder="PhoneNumber"
                    autocomplete="username"
                    selected={date}
                    onChange={(e) => setDate(e)}
                    style={{ border: "none !important" }}
                  />
                </div>
                <div
                  className="col-sm"
                  style={{
                    gap: "25px",
                    borderRadius: "4px",
                    width: "30rem",
                    border: "2px solid black",
                    padding: "2px 4px",
                  }}
                >
                  <div className="d-flex gap-2 ">
                    <label
                      style={{ fontSize: "13px", fontWeight: "700" }}
                      id="astock"
                    >
<<<<<<< HEAD
                      AVAILABLE STORK
=======
<<<<<<< HEAD
                      AVAILABLE STORK
=======
                      AVAILABLE STOCK
>>>>>>> 0440c72 (Final commit)
>>>>>>> 3911f62 (Final Commit)
                    </label>
                  </div>

                  <input
                    type="number"
                    className="px-2 p-2 w-100"
                    id="pnos"
                    value={astock}
                    onChange={(e) => setAstock(e.target.value)}
                    placeholder="Available Stocks"
                    autocomplete="username"
                    style={{ border: "none" }}
                  />
                </div>
              </div>
              <div className="mt-4 row gap-4">
                <div
                  className="col-sm"
                  style={{
                    gap: "25px",
                    borderRadius: "4px",
                    width: "30rem",
                    border: "2px solid black",
                    padding: "2px 4px",
                  }}
                >
                  <div className="d-flex gap-2 ">
                    <label
                      style={{ fontSize: "13px", fontWeight: "700" }}
                      id="dob"
                    >
                      SELECT IMAGE
                    </label>
                  </div>
                  <input
                    type="file"
                    className="px-2 p-2 w-100"
                    id="pnos"
                    // value={phone}
                    // onChange={(e) => setPhone(e.target.value)}
                    placeholder="Available Stocks"
                    autocomplete="username"
                    style={{ border: "none" }}
                  />
                </div>
                <div
                  className="col-sm"
                  style={{
                    gap: "25px",
                    borderRadius: "4px",
                    width: "30rem",
                    border: "2px solid black",
                    padding: "2px 4px",
                  }}
                >
                  <div className="d-flex gap-2 ">
                    <label
                      style={{ fontSize: "13px", fontWeight: "700" }}
                      id="acity"
                    >
                      AVAILABLE CITY
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="Select">Select</option>
                    <option value="chennai">Chennai</option>
                    <option value="Dharapuram">Dharapuram</option>
                    <option value="Tirupur">Tirupur</option>
                  </select>
                </div>
              </div>
              <div className="m-4 text-center">
                {/* <Link to="/productlist"> */}{" "}
                <button
                  type="submit"
                  style={{
                    maxWidth: "11rem",
                    height: "50px",
                    fontSize: "18px",
                    color: "white",
                    fontWeight: "700",
                  }}
                  className="bttn1"
                >
                  ADD PRODUCT
                </button>
                {/* </Link> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
