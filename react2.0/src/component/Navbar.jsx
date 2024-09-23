import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            React Website
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "20",
                    color: "#000000",
                    paddingRight: "5px",
                    paddingLeft: "5px",
                  }}
                  to={"/"}
                >
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  to={"/about"}
                  style={{
                    textDecoration: "none",
                    fontSize: "20",
                    color: "#000000",
                    paddingRight: "5px",
                    paddingLeft: "5px",
                  }}
                >
                  {" "}
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  to={"/gallery"}
                  style={{
                    textDecoration: "none",
                    fontSize: "20",
                    color: "#000000",
                    paddingRight: "5px",
                    paddingLeft: "5px",
                  }}
                >
                  Gallery
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  to={"/contact"}
                  style={{
                    textDecoration: "none",
                    fontSize: "20",
                    color: "#000000",
                    paddingRight: "5px",
                    paddingLeft: "5px",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
