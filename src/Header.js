import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Header.css";
import { Link } from "react-router-dom";
import {
  Fire,
  Search,
  Gift,
  Award,
  Cart,
  PersonCircle,
  List,
  PersonFillLock,
} from "react-bootstrap-icons";

function Header() {
  const navdata = [
    {
      name: "Fire Pits",
      subdata: [
        {
          sname1: "Fire Pits",
          scontent1: ["Borfire", "Yukon", "Mesa"],
        },
      ],
    },
    {
      name: "New Arrivals",
      subdata: [
        {
          sname1: "Fire Pits",
          scontent1: ["Borfire", "Yukon", "Mesa"],
        },
      ],
    },
    {
      name: "Pizza Oven",
      subdata: [
        {
          sname1: "Fire Pits",
          scontent1: ["Borfire", "Yukon", "Mesa"],
        },
      ],
    },
    {
      name: "Patio Heater",
      subdata: [
        {
          sname1: "Fire Pits",
          scontent1: ["Borfire", "Yukon", "Mesa"],
        },
      ],
    },
    {
      name: "Camper Stove",
      subdata: [
        {
          sname1: "Fire Pits",
          scontent1: ["Borfire", "Yukon", "Mesa"],
        },
      ],
    },
    {
      name: "Accessories",
      subdata: [
        {
          sname1: "Fire Pits",
          scontent1: ["Borfire", "Yukon", "Mesa"],
        },
      ],
    },
    {
      name: "Wood",
      subdata: [
        {
          sname1: "Fire Pits",
          scontent1: ["Borfire", "Yukon", "Mesa"],
        },
      ],
    },
    {
      name: "Corprate Sales",
      subdata: [
        {
          sname1: "Fire Pits",
          scontent1: ["Borfire", "Yukon", "Mesa"],
        },
      ],
    },
  ];
  const benifits = [
    { icon: <Fire />, content: "Community", path: "/Community" },
    { icon: <Gift />, content: "Gift Cards", path: "/Giftcard" },
    { icon: <Award />, content: "Reward", path: "/Rewards" },
    { icon: <PersonCircle />, content: "Account", path: "/Login" },
    { icon: <Cart />, content: "Cart", path: "" },
    { icon: <PersonFillLock />, content: "Admin", path: "/Alogin" },
  ];
  return (
    <div style={{ top: "0px", position: "fixed", width: "100%", zIndex: "2" }}>
      <div
        className="offer"
        style={{
          textAlign: "center",
          textDecoration: "underline",
          background: "black",
          color: "white",
          padding: "4px",
          cursor: "pointer",
        }}
      >
        Get Outside With Up to 35% Off Fire Pits
      </div>
      <div
        className="d-flex navbar"
        style={{
          borderBottom: "1px solid grey",
        }}
      >
        <div className="d-flex align-items-center">
          <List className="icon" style={{ fontSize: "24px" }} />
          <Link to="/">
            <img
              className="nav"
              style={{ height: "4rem", marginLeft: "20px" }}
              src="https://secure.img1-cg.wfcdn.com/im/56126899/compr-r85/7774/77742888/solo-stove.jpg"
              alt=""
            />
          </Link>
        </div>

        <div className="icon" style={{ fontSize: "24px" }}>
          <PersonCircle />
          &nbsp; &nbsp;
          <Cart />
        </div>
        <div className="searchbar">
          &nbsp;
          <Search style={{ verticalAlign: "unset", fontSize: "1rem" }} />
          &nbsp;
          <input type="text" placeholder="Search Solo Stove" />
        </div>
        <div className="d-flex gap-4 benifits" style={{ marginRight: "2rem" }}>
          {benifits.map((ele) => (
            <div className="d-flex align-items-center">
              <div className="m-1 ">{ele.icon}</div>
              <Link to={ele.path}>{ele.content}</Link>
            </div>
          ))}
        </div>
      </div>
      <div
        className="d-flex product"
        style={{ borderBottom: "1px solid grey" }}
      >
        {navdata.map((ele) => (
          <a className="links" href="#S">
            <Link to="/productpage">{ele.name}</Link>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
