import React, { useState, useEffect } from "react";
import "./Categories.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updatedCategoryList,
  errorHandler,
} from "../actions/categoriesactions";
import { Link } from "react-router-dom";

function Categories() {
  const dispatch = useDispatch();
  const categoriesList = useSelector(
    (state) => state.categoriesReducer.categoriesList
  );
  const apiRequest = "https://opentdb.com/api_category.php";

  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const response = await fetch(apiRequest);
    const data = await response.json();
    dispatch(updatedCategoryList(data));
  };
  console.log(categoriesList);
  return (
    <div className="wrapper">
      <h1 className="title">Categories</h1>
      <div className="row categoriesContainer">
        {categoriesList.map((category, i) => {
          const categoryId = "/questions/category/" + category.id;
          const { id, name } = category;
          return (
            <div className="col-lg-4 categoryChoice" key={i}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>{name}</b>
                  </h5>
                  <div>
                    <Link to={categoryId}>
                      <button href="#" className="btn btn-primary">
                        Choose Me !
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
