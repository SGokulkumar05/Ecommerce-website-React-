import React, { useState } from "react";
import $ from "jquery";
import SignUp from "./Signup";
function Email() {
  const [email, setEmail] = useState("");
  <SignUp email={email} />;
  var validEmail = "";
  $(".error").remove();
  if (email.length < 1) {
    $("#email").after('<div class="error">*This field is required</div>');
  } else {
    var regEx1 = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    validEmail = regEx1.test(email);
    if (!validEmail) {
      $("#email").after('<div class="error">*Enter a valid email</div>');
    }
  }
  if (email === "") {
    $(".error").remove();
  }
  return (
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
        <label style={{ fontSize: "13px", fontWeight: " 700" }} id="email">
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
  );
}

export default Email;
