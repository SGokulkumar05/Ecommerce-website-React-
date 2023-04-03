import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./css/Forms.css";
import $ from "jquery";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    $(".error").remove();
    if (email === "gokul@gmail.com" && password === "12345") {
      navigate("/");
    } else {
      // alert("invalid email or password");
      $("#email").after(
        '<div class="error">*Incorrect Email or Password</div>'
      );
    }
  };
  return (
    <div style={{ marginTop: "9rem" }}>
      <div className="d-flex justify-content-center ">
        <div>
          <form onSubmit={handleSubmit}>
            <h4
              className="mb-4"
              style={{
                textAlign: "center",
                fontSize: "37px",
              }}
            >
              Login
            </h4>
            <div className="mt-2" id="email"></div>

            <div className="signin">
              <div
                style={{
                  borderRadius: "4px",
                  width: "30rem",
                  border: "2px solid black",
                  padding: "2px 4px",
                  marginBottom: "0",
                }}
              >
                <label
                  style={{ fontSize: "13px", fontWeight: "700" }}
                  id="email"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="text"
                  className="px-2 p-2 w-100"
                  id="uname"
                  placeholder="Email Address"
                  autocomplete="username"
                  style={{ border: "none" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  PASSWORD
                </label>
                <input
                  type="password"
                  className="px-2 p-2 w-100"
                  style={{ border: "none" }}
                  placeholder="Password"
                  autocomplete="current-password"
                  id="pwd"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* <a href="#password" style={{ float: "right", marginTop: "0px" }}>
                Forget Password
              </a> */}
              <div
                className="mb-3 form-check d-flex"
                style={{ gap: "30px", marginTop: "35px" }}
              >
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    style={{ backgroundColor: "grey" }}
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label "
                    for="exampleCheck1"
                    style={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    Remind me
                  </label>
                </div>
                <Link
                  to="/Signup"
                  className="create-account"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  SignUp
                </Link>
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
                  }}
                  className="bttn"
                >
                  SIGN IN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
