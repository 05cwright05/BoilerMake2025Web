import { useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const [selected, setSelected] = useState("About");
  const navigate = useNavigate(); // React Router navigation

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} />
          <h1>SignaSure</h1>
        </div>
        <div className="nav">
          <a
            onClick={() => {
              setSelected("About");
              navigate("/");
            }}
            className={selected === "About" ? "active" : ""}
          >
            About
          </a>
          <a
            onClick={() => {
              setSelected("story");
              navigate("/story");
            }}
            className={selected === "story" ? "active" : ""}
          >
            Our Story
          </a>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Nav;
