import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as questionsActions from "../actions/questionsactions";

function NavBar() {
  const dispatch = useDispatch();
  return (
    <div className="navBar row">
      <nav className=" w-100 navbar navbar-expand-lg navbar navbar-light bg-light navHeight">
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
              <li
                onClick={() => dispatch(questionsActions.resetQuestionsState())}
                className="nav-item active"
              >
                <p className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </p>
              </li>
            </Link>
            <Link to="/categories">
              <li
                className="nav-item"
                onClick={() => dispatch(questionsActions.resetQuestionsState())}
              >
                <p className="nav-link" href="#">
                  Categories
                </p>
              </li>
            </Link>

            <li className="nav-item">
              <p
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Questions
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
