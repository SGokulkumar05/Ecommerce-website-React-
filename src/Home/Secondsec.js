import "./css/Firstsec.css";
import { StarFill } from "react-bootstrap-icons";
function ProductScroll() {
  const links = [
    {
      name: "Fire Pits",
      img: "https://media.solostove.com/transform/0e056445-11c2-48a9-baf8-325e9c5c1190/Bonfire-Every-Mile-Creative?io=transform:fill,width:560,height:560 ",
    },
    {
      name: "Pi Pizza Oven",
      img: "https://media.solostove.com/transform/e8488468-c2ec-41d4-a332-1abdb3ec1857/Pi-Vista?io=transform:fill,width:560,height:560",
    },
    {
      name: "Patio Heater",
      img: "https://media.solostove.com/transform/cb95e41f-3d9c-4118-96eb-058a288e0d18/Tower-Patio-Heater-Fall-Launch-2-5?io=transform:fill,width:560,height:560",
    },
    {
      name: "Camp Stoves",
      img: "https://media.solostove.com/transform/7aec5bc4-32e2-4752-99e4-4a672ff57af1/220324_Solo-Stove_820?io=transform:fill,width:560,height:560",
    },
    {
      name: "Fire Pit Bundles",
      img: "https://media.solostove.com/transform/9ca6329a-7346-4ea1-8fe3-91e508ee1162/BONFIRE-NEW-YEARS-WINTER?io=transform:fill,width:560,height:560",
    },
    {
      name: "Fire Pit Accessories",
      img: "https://media.solostove.com/transform/1541927a-2dcd-49c3-a5d2-1ccdffe1901a/Alaska-Ranger-16?io=transform:fill,width:560,height:560",
    },
  ];
  const product = [
    {
      name: "Mesa",
      link: "https://media.solostove.com/transform/a1eae217-a130-46af-93db-b84ed5f11e1e/MESA_Stainless-Flame-On-White?io=transform:fill,width:975,height:975",
      review: "6842",
      dprice: "$79.99",
      cprice: "$199.99",
      save: "$40.00",
    },
    {
      name: "Yukon 2.0",
      link: "https://media.solostove.com/transform/120ae5bd-1ffc-4966-8321-343b12515ccf/Free-Stand-_Yukon?io=transform:fill,width:975,height:975",
      review: "7107",
      dprice: "$469.99",
      cprice: "$749.99",
      save: "$280.00",
    },
    {
      name: "Bonfire 2.0",
      link: "https://media.solostove.com/transform/1afdbb1d-fb37-4267-8f54-f565cba5b717/Free-Stand_Bonfire?io=transform:fill,width:975,height:975",
      review: "21488",
      dprice: "$269.99",
      cprice: "$399.99",
      save: "$130.00",
    },
    {
      name: "Ranger 2.0",
      link: "https://media.solostove.com/transform/94400461-f5bf-47f8-b7a5-67b34ad05d6d/Free-Stand_Ranger?io=transform:fill,width:975,height:975",
      review: "2686",
      dprice: "$199.99",
      cprice: "$299.99",
      save: "$100.00",
    },
  ];
  return (
    <div>
      <section className="container-fluid">
        <p className="header">Shop Our Most Popular Categories</p>
        <div className="image-scroll-sec">
          {links.map((ele) => (
            <a href="#img1" style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  width: "290px",
                  height: "290px",
                }}
              >
                <img
                  style={{ position: "absolute " }}
                  src={ele.img}
                  alt="sample"
                />
                <div className="shade"></div>
                <div
                  style={{
                    color: "white",
                    zIndex: "1",
                    fontWeight: "bolder",
                    fontSize: "22px",
                    fontFamily: "sans-serif",
                  }}
                >
                  {ele.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section class="container-fluid">
        <p class="header">Smokeless Fire Pits</p>
        <div class="d-flex product1">
          {product.map((ele, idx) => (
            <div class="col">
              <div id={"image" + (idx + 1)}>
                <img src={ele.link} alt="sample" />
              </div>
              <div class="content">
                <h5 style={{ fontWeight: "bold" }}>{ele.name}</h5>
                <div>
                  <StarFill style={{ color: "#e4531b" }} />
                  &nbsp;
                  <StarFill style={{ color: "#e4531b" }} />
                  &nbsp;
                  <StarFill style={{ color: "#e4531b" }} />
                  &nbsp;
                  <StarFill style={{ color: "#e4531b" }} />
                  &nbsp;
                  <StarFill style={{ color: "#e4531b" }} />
                  &nbsp;
                  <span style={{ color: "grey" }}> {ele.review} Reviews</span>
                </div>
                <span style={{ fontWeight: "bold" }}>{ele.dprice}</span> &nbsp;
                <span
                  style={{
                    color: "grey",
                    textDecoration: "line-through",
                    fontWeight: "bolder",
                  }}
                >
                  {ele.cprice}
                </span>
                <br />
                <span style={{ color: "#C90C38", fontWeight: "bold" }}>
                  You save {ele.save}
                </span>
                <br />
                <br />
                <button class="product-btn" type="submit">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductScroll;
