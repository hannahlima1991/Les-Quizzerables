import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updatedQuestionsList,
  errorHandler,
} from "../actions/questionsactions";
import "./Questions.css";

function Questions(props) {
  const dispatch = useDispatch();
  const { counter, questionsList } = useSelector(
    (state) => state.questionsReducer
  );

  useEffect(() => {
    getquestions();
  }, []);

  const getquestions = async () => {
    const questionsRequest = `https://opentdb.com/api.php?amount=10&category=${props.match.params.id}&type=multiple`;
    const response = await fetch(questionsRequest);
    const data = await response.json();
    const questions = data.results;
    dispatch(updatedQuestionsList(questions));
  };

  const currentQuestion = questionsList[counter];

  return (
    <div className="wrapper">
      <h1>
        Question {counter + 1}/ {questionsList.length}{" "}
      </h1>
      {questionsList.length > 0 ? (
        <div className="question">
          <p>{currentQuestion.question}</p>
          <div className="questionContainer">
            {currentQuestion.allChoices.map((choice) => (
              <button>{choice}</button>
            ))}
          </div>
          <div className="submitContainer">
            <button>Submit</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Questions;
