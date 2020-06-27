import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary navHeight">
        <p className="navbar-brand" href="#">
          Lés Quizzrables
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link to="/">
              <li className="nav-item active">
                <p className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </p>
              </li>
            </Link>
            <Link to="/categories">
              <li className="nav-item">
                <p className="nav-link" href="#">
                  Categories
                </p>
              </li>
            </Link>
            <Link to="/login">
              <li className="nav-item">
                <p className="nav-link" href="#">
                  Login
                </p>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
