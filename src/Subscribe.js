import { useState } from "react";
import "./css/Footer.css";
import $ from "jquery";
function Subscribe() {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    $(".error").remove();
    var regEx1 = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!regEx1.test(email)) {
      $("#email").after('<div class="error">*Enter a valid email</div>');
    }
    if (e.target.value === "") {
      $(".error").remove();
    }
    setEmail(e.target.value);
  };
  return (
    <section class="container-fluid email">
      <div class="row" style={{ backgroundColor: "#f5f2ef" }}>
        <div class="col-lg m-4">
          <p style={{ color: "black", fontWeight: "bolder" }}>
            Join Us Around The Fire!
          </p>
          <p>Sign Up For $10 Off Your First Order</p>
        </div>
        <div class="col-lg forms mt-5" style={{ height: "10rem" }}>
          <form>
            <input
              type="email"
              placeholder="gokul@changecx.com"
              onChange={(e) => handleChange(e)}
            />
            &nbsp;
            <button class="form-btn" type="submit">
              Subscribe
            </button>
          </form>
          <div id="email"></div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
