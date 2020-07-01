const initialState = {
  questionsList: [],
  counter: 0,
  points: 0,
  userChoice: "",
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATED_QUESTIONS_LIST":
      const formattedQuestionsArray = action.data.map((question) => {
        const allChoices = [
          ...question.incorrect_answers,
          question.correct_answer,
        ];
        return { ...question, allChoices };
      });
      return { ...state, questionsList: formattedQuestionsArray };
    case "ERROR_HANDLER":
      return { ...state, error: (state.error = true) };
    case "SELECT_ANSWER":
      return { ...state, userChoice: action.data };
    case "SUBMIT_ANSWER":
      const { counter, questionsList, userChoice } = state;
      const currentQuestion = questionsList[counter];
      const isQuestionRight = userChoice === currentQuestion.correct_answer;
      console.log("is this question right?", isQuestionRight);

      const points = isQuestionRight ? state.points + 10 : state.points;
      console.log("points are", points);

      const newCounter = counter + 1;
      console.log("counter is", newCounter);

      return { ...state, counter: newCounter, points, userChoice: "" };
    default:
      return state;
  }
};
export default questionsReducer;
