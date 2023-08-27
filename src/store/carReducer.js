const initialState = {
  globalCarNumbers: 0,
};
const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_CAR":
      return { ...state, globalCarNumbers: state.globalCarNumbers + 1 }; // trick ---- revise-----
    case "INCREMENT_CAR_BY_VALUE":
      return {
        ...state,
        globalCarNumbers: state.globalCarNumbers + action.payload,
      };
    default:
      return state;
  }
};
export default carReducer;
