import React, { useState } from "react";
import "./css/Forms.css";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import $ from "jquery";
// import Email from "./Email";
function SignUp(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [cemail, csetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, csetPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date());
  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    var final = [];
    var isChecked = $("#tac").is(":checked");
    $(".error").remove();
    if (first.length < 1) {
      $("#fname").after('<div class="error">*Enter the Firstname</div>');
    } else {
      var regEx = /^[A-Za-z\s]*$/;
      var validName = regEx.test(first);
      if (!validName) {
        $("#fname").after('<div class="error">*Enter the string</div>');
      }
      final.push("1");
    }
    if (phone.length < 1) {
      $("#pno").after('<div class="error">*Enter the Valid Phone Number</div>');
    } else {
      if (phone.length < 10 || phone.length > 10) {
        $("#pno").after(
          '<div class="error">*Enter the Valid Phone Number length 10</div>'
        );
      }
      if (phone.length === 10) {
        final.push("2");
      }
    }
    if (username.length < 1) {
      $("#uname").after('<div class="error">*Enter the Username</div>');
    } else {
      final.push("3");
    }
    if (last.length < 1) {
      $("#lname").after('<div class="error">*Enter the Lastname</div>');
    } else {
      var regEx2 = /^[A-Za-z\s]*$/;
      var lastname = regEx2.test(last);
      if (!lastname) {
        $("#lname").after('<div class="error">*Enter the string</div>');
      }
      final.push("4");
    }
    if (password.length < 1) {
      $("#password").after('<div class="error">*Enter the Password</div>');
    }
    if (cpassword !== password) {
      $("#cpassword").after(
        '<div class="error">*Enter an correct password</div>'
      );
    } else {
      final.push("5");
    }
    var validEmail = "";
    if (email.length < 1) {
      $("#remail").after('<div class="error">*This field is required</div>');
    } else {
      var regEx1 = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      validEmail = regEx1.test(email);
      if (!validEmail) {
        $("#remail").after('<div class="error">*Enter a valid email</div>');
      } else {
        final.push("6");
      }
    }
    if (cemail !== email) {
      $("#cemail").after('<div class="error">*Enter Correct Email</div>');
    } else {
      final.push("7");
    }
    if (isChecked === false) {
      $("#tacs").after('<div class="error">*Accept Terms And Condition</div>');
    } else {
      final.push("8");
    }
    if ($('input[name="gender"]:checked')) {
      if ($('input[name="gender"]:checked').val()) {
      } else {
        $("#gender").after(
          '<span class="error" style="color:red">*Enter your Gender</span>'
        );
      }
    }
    // if (dob === "") {
    //   $("#dob").after('<div class="error">*Enter a Date</div>');
    // } else {
    //   dob = new Date(dob);
    //   dob = dob.toISOString().split("T");
    //   let date = new Date();
    //   date = date.toISOString().split("T");
    //   if (dob[0] >= date[0]) {
    //     $("#dob").after('<div class="error">*Enter the valid date</div>');
    //   }
    // }
    if (final.length === 8) {
      navigate("/Login");
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
                marginTop: "9rem",
              }}
            >
              Create New Account
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
                      id="email"
                    >
                      EMAIL ADDRESS
                    </label>
                  </div>
                  <input
                    type="email"
                    className="px-2 p-2 w-100"
                    placeholder="Email Address"
                    autocomplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                      id="cemail"
                    >
                      CONFIRM EMAIL ADDRESS
                    </label>
                  </div>
                  <input
                    type="text"
                    className="px-2 p-2 w-100"
                    placeholder="Confirm Email Address"
                    value={cemail}
                    onChange={(e) => csetEmail(e.target.value)}
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
                      id="password"
                    >
                      PASSWORD
                    </label>
                  </div>

                  <input
                    type="password"
                    className="px-2 p-2 w-100"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
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
                      id="cpassword"
                    >
                      CONFIRM PASSWORD
                    </label>
                  </div>
                  <input
                    type="password"
                    className="px-2 p-2 w-100"
                    value={cpassword}
                    onChange={(e) => csetPassword(e.target.value)}
                    placeholder="Confirm Password"
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
                      id="fname"
                    >
                      FIRSTNAME
                    </label>
                  </div>

                  <div className="d-flex">
                    <select
                      name="surname"
                      id="surname"
                      style={{
                        width: "3.5rem",
                        backgroundColor: "white",
                        border: "none",
                      }}
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Mrs.">Mrs.</option>
                    </select>
                    <input
                      type="text"
                      className="px-2 p-2 w-100"
                      value={first}
                      onChange={(e) => setFirst(e.target.value)}
                      placeholder="FirstName"
                      autocomplete="username"
                      style={{ border: "none" }}
                    />
                  </div>
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
                      id="lname"
                    >
                      LASTNAME
                    </label>
                  </div>
                  <input
                    type="text"
                    className="px-2 p-2 w-100"
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                    placeholder="LastName"
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
                      style={{ fontSize: "13px", fontWeight: " 700" }}
                      id="uname"
                    >
                      USERNAME
                    </label>
                  </div>
                  <input
                    type="text"
                    className="px-2 p-2 w-100"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    autocomplete="username"
                    style={{ border: "none" }}
                  />
                </div>
                <div
                  className=" col-sm"
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
                      id="gender"
                    >
                      GENDER
                    </label>
                  </div>
                  <div
                    className="d-flex px-2 p-2"
                    style={{ gap: "40px" }}
                    id="gender"
                  >
                    <div className="form-check " style={{ gap: "30px" }}>
                      <input
                        type="radio"
                        name="gender"
                        style={{
                          backgroundColor: "grey",
                          border: "1px solid black",
                        }}
                        // onChange={(e) => setRadio("checked")}
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Male
                      </label>
                    </div>
                    <div className="form-check " style={{ gap: "30px" }}>
                      <input
                        type="radio"
                        name="gender"
                        style={{
                          backgroundColor: "grey",
                          border: "1px solid black",
                        }}
                        // onChange={(e) => setRadio("checked")}
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Female
                      </label>
                    </div>
                    <div className="form-check " style={{ gap: "30px" }}>
                      <input
                        type="radio"
                        name="gender"
                        style={{
                          backgroundColor: "grey",
                          border: "1px solid black",
                        }}
                        // onChange={(e) => setRadio("checked")}

                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Other
                      </label>
                    </div>
                  </div>
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
                      DATE OF BIRTH
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
                      id="pno"
                    >
                      PHONE NUMBER
                    </label>
                  </div>

                  <input
                    type="text"
                    className="px-2 p-2 w-100"
                    id="pnos"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="PhoneNumber"
                    autocomplete="username"
                    style={{ border: "none" }}
                  />
                </div>
              </div>
              <div className="mt-4 d-flex gap-4">
                <input type="checkbox" id="tac" />
                <label style={{ fontWeight: "700" }} id="tacs">
                  CONSENT - I AGREE TO THE PRIVACY POLICY AND TERMS & CONDITIONS
                </label>
              </div>

              <div className="m-4 text-center">
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
                  CREATE ACCOUNT
                </button>
                <p className="mt-3" style={{ fontWeight: "700" }}>
                  Already have an account? <a href="/Login">Sign in</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
