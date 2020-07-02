import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import "./Total.css";
import hodor from "../assets/hodor.jpg";
import jamie from "../assets/jamie.jpg";
import littleFinger from "../assets/littleFinger.jpg";
import tyrion from "../assets/tyrion.jpg";

function Total(props) {
  const dispatch = useDispatch();

  let description = "";
  let image = tyrion;
  if (props.points === 100) {
    description =
      "You are perfect in every way, you drink and you know things.";
    image = tyrion;
  } else if (props.points >= 70) {
    description =
      "Military strategist, entrepenuer, and merciless yet killed by a little girl.";
    image = littleFinger;
  } else if (props.points >= 40) {
    description =
      "You are rash, foolish, and had a kid with your sister well.. atleast you are handsome. ";
    image = jamie;
  } else {
    description =
      "You are friendly, trustworthy and your friends love hanging out with you, but wow, you are not very bright...";
    image = hodor;
  }
  useEffect(() => {}, []);
  return (
    <div className="App">
      <div className="titleContainer">
        <h1 className="scoreTitle">Your total score is {props.points} </h1>
      </div>
      <div className="scoreImageContainer">
        <img src={image} className="scoreImage"></img>
        <div className="description">
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    points: state.questionsReducer.points,
  };
};
export default connect(mapStateToProps, null)(Total);
