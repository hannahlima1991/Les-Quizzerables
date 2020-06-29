const initialState = {
  categoriesList: [],
  error: false,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATED_CATEGORY_LIST":
      console.log("Updated");
      return { ...state, categoriesList: action.data.trivia_categories };
    case "ERROR_HANDLER":
      return { ...state, error: (state.error = true) };
    default:
      return state;
  }
};
export default categoriesReducer;
