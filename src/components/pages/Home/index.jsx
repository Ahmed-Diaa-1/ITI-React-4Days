import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  incrementByValue,
  incrementCar,
  incrementCarByValue,
} from "../../../store/action";

const Home = () => {
  const {
    theCounter: { globalCounter },
    theCar: { globalCarNumbers },
  } = useSelector((state) => state);

  // const globalCounter = useSelector((state) => state.globalCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {globalCounter}</h1>
      <h1>Cars Number: {globalCarNumbers}</h1>
      <button onClick={() => dispatch(increment())}>Increment:</button>
      <button onClick={() => dispatch(incrementByValue(100))}>
        Increment By Value:
      </button>
      <br></br>
      <br></br>
      <button onClick={() => dispatch(incrementCar())}>
        Increment Car Number:
      </button>
      <button onClick={() => dispatch(incrementCarByValue(200))}>
        Increment Car Number By Value:
      </button>
    </div>
  );
};

export default Home;
