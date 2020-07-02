const initialState = {
  questionsList: [],
  counter: 0,
  points: 0,
  userChoice: "",
};

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATED_QUESTIONS_LIST":
      const formattedQuestionsArray = action.data.map((question) => {
        let allChoices = [
          ...question.incorrect_answers,
          question.correct_answer,
        ];
        allChoices = shuffle(allChoices);
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

      const points = isQuestionRight ? state.points + 10 : state.points;

      const newCounter = counter + 1;

      return { ...state, counter: newCounter, points, userChoice: "" };
    case "RESET_QUESTIONS_STATE":
      console.log("reseting state");
      return initialState;
    default:
      return state;
  }
};
export default questionsReducer;
