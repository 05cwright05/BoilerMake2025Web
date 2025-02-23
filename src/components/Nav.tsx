import { useState } from "react";
import logo from "../assets/logo.svg";
const Nav = () => {
  const [selected, setSelected] = useState("About");

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} />
          <h1>SignaSure</h1>
        </div>
        <div className="nav">
          <a
            href="#"
            onClick={() => setSelected("About")}
            className={selected === "About" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setSelected("Pricing")}
            className={selected === "Pricing" ? "active" : ""}
          >
            Pricing
          </a>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Nav;
