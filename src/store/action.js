import axios from "axios";

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const incrementByValue = (value) => {
  return {
    type: "INCREMENT_BY_VALUE",
    payload: value,
  };
};
export const incrementCar = () => {
  return {
    type: "INCREMENT_CAR",
  };
};
export const incrementCarByValue = (value) => {
  return {
    type: "INCREMENT_CAR_BY_VALUE",
    payload: value,
  };
};

export const startFetch = () => {
  return {
    type: "START_FETCH",
  };
};
export const successFetch = (data) => {
  return {
    type: "SUCCESS_FETCH",
    payload: data,
  };
};
export const failedFetch = (error) => {
  return {
    type: "FAILED_FETCH",
    payload: error,
  };
};
export const fetchPostsData = () => {
  return async (dispatch) => {
    dispatch(startFetch);
    try {
      const response = await axios.get(
        "https://jspnplaceholder.typicode.com/posts"
      );
      dispatch(successFetch(response?.data));
    } catch (error) {
      dispatch(failedFetch(error));
    }
  };
};
