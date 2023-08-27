import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  incrementByValue,
  incrementCar,
  incrementCarByValue,
} from "../../store/action";

export default function ThirdDay() {
  const {
    theCounter: { globalCounter },
    theCar: { globalCarNumbers },
  } = useSelector((state) => state);

  // const globalCounter = useSelector((state) => state.globalCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card my-3 p-5">
        <div className="card-body">
          <h1 className="card-title">Counter: {globalCounter}</h1>
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-primary mr-2"
          >
            Increment:
          </button>
          <button
            onClick={() => dispatch(incrementByValue(100))}
            className="btn btn-outline-primary"
          >
            Increment By Value:
          </button>
        </div>
      </div>

      <div className="card my-3 p-5">
        <div className="card-body">
          <h1 className="card-title">Cars Number: {globalCarNumbers}</h1>
          <button
            onClick={() => dispatch(incrementCar())}
            className="btn btn-success mr-2"
          >
            Increment Car Number:
          </button>
          <button
            onClick={() => dispatch(incrementCarByValue(200))}
            className="btn btn-outline-success"
          >
            Increment Car Number By Value:
          </button>
        </div>
      </div>
    </div>
  );
}
