const initialState = {
  globalCounter: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, globalCounter: state.globalCounter + 1 }; // trick ---- revise-----
    case "INCREMENT_BY_VALUE":
      return { ...state, globalCounter: state.globalCounter + action.payload };
    default:
      return state;
  }
};
export default counterReducer;
