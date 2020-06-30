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
    default:
      return state;
  }
};
export default questionsReducer;
