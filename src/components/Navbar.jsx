import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img alt="logo" src={logo} />
      </div>
      <ul
        style={{
          padding: "0",
          display: "flex",
          flexDirection: "row",
          listStyleType: "none",
        }}
      >
        <li
          style={{
            width: "100px",
            display: "flex",

            justifyContent: "center",
          }}
        >
          <a
            href="#galeria"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "600",
              fontSize: "1.2rem",
              fontFamily: "Patrick Hand",
            }}
          >
            GALERIA
          </a>
        </li>
        <li
          style={{
            width: "100px",

            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "600",
              fontSize: "1.2rem",
              fontFamily: "Patrick Hand",
            }}
            href="#onas"
          >
            O NAS
          </a>
        </li>
        <li
          style={{
            width: "100px",
            display: "flex",

            justifyContent: "center",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "600",
              fontSize: "1.2rem",
              fontFamily: "Patrick Hand",
            }}
            href="#kontakt"
          >
            KONTAKT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
