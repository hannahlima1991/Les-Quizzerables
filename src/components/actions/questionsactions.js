export const updatedQuestionsList = (data) => {
  // console.log(data);
  return {
    type: "UPDATED_QUESTIONS_LIST",
    data: data,
  };
};
export const handleSubmit = () => {
  return {
    type: "HANDLE_SUBMIT",
  };
};

export const errorHandler = () => {
  return {
    type: "ERROR_HANDLER",
  };
};
