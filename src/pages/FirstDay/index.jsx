import "./index.css";

import React, { useState } from "react";

// use prev ...
const Day1 = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter d-flex flex-column gap-3 align-items-center">
      <h1>Counter: {count}</h1>
      <button onClick={increase} className="btn btn-primary btnFirstPage">
        Increase
      </button>
      <button onClick={decrease} className="btn btn-primary btnFirstPage">
        Decrease
      </button>
      <button onClick={reset} className="btn btn-primary btnFirstPage">
        Reset
      </button>
    </div>
  );
};
export default Day1;
