export const updatedQuestionsList = (data) => {
  // console.log(data);
  return {
    type: "UPDATED_QUESTIONS_LIST",
    data: data,
  };
};

export const selectAnswer = (data) => {
  return {
    type: "SELECT_ANSWER",
    data,
  };
};
export const handleSubmit = () => {
  return {
    type: "HANDLE_SUBMIT",
  };
};

export const submitAnswer = () => {
  return {
    type: "SUBMIT_ANSWER",
  };
};

export const errorHandler = () => {
  return {
    type: "ERROR_HANDLER",
  };
};
export const resetQuestionsState = () => {
  return {
    type: "RESET_QUESTIONS_STATE",
  };
};
