const initialState = {
  isLoading: false,
  postsData: [],
  isError: false,
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_FETCH":
      return { ...state, isLoading: true }; // trick ---- revise-----
    case "SUCCESS_FETCH":
      return {
        ...state,
        isLoading: false,
        postsData: action.payload,
        isError: false,
      };
    case "FAILED_FETCH":
      return {
        ...state,
        isLoading: false,
        postsData: [],
        isError: true,
      };
    default:
      return state;
  }
};
export default postsReducer;
