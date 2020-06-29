export const updatedCategoryList = (data) => {
  return {
    type: "UPDATED_CATEGORY_LIST",
    data,
  };
};
export const errorHandler = () => {
  return {
    type: "ERROR_HANDLER",
  };
};
