import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updatedQuestionsList,
  errorHandler,
  selectAnswer,
  submitAnswer,
} from "../actions/questionsactions";
import "./Questions.css";

function Questions(props) {
  const dispatch = useDispatch();
  const { userChoice, counter, questionsList } = useSelector(
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
          <h4>{currentQuestion.question}</h4>
          <div className="choicesContainer">
            {currentQuestion.allChoices.map((choice, index) => (
              <div>
                <button
                  className={`${
                    userChoice === choice ? "selectedChoice" : "allChoices"
                  }`}
                  value={index}
                  onClick={() => dispatch(selectAnswer(choice))}
                  // onClick={() => console.log("yo")}
                >
                  {choice}
                </button>
              </div>
            ))}
          </div>
          <div className="submitContainer">
            {counter < questionsList.length - 1 ? (
              <button
                disabled={userChoice === "" ? true : false}
                className="submitButton"
                onClick={() => dispatch(submitAnswer())}
              >
                Submit
              </button>
            ) : (
              <button
                disabled={userChoice === "" ? true : false}
                className="submitButton"
                onClick={() => console.log("fuck yea")}
              >
                Finish
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Questions;
