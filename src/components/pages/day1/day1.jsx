import React, { useState } from "react";

// use prev ...
const Day1 = () => {
  const [count, setCount] = useState(0);
  const [increaseInput, setIncreaseInput] = useState(0);
  const [decreaseInput, setDecreaseInput] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const handleIncreaseChange = (e) => {
    setIncreaseInput(Number(e.target.value));
  };

  const handleDecreaseChange = (e) => {
    setDecreaseInput(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCount(count + increaseInput - decreaseInput);

    setIncreaseInput(0);
    setDecreaseInput(0);
  };
  //inline end or start ******
  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button onClick={increase} style={{ marginRight: 1 + "em" }}>
        Increase
      </button>
      <button onClick={decrease} style={{ marginRight: 1 + "em" }}>
        Decrease
      </button>
      <button onClick={reset} style={{ marginRight: 1 + "em" }}>
        Reset
      </button>
      <form onSubmit={handleSubmit}>
        <label>
          increase:
          <input
            type="number"
            value={increaseInput}
            onChange={handleIncreaseChange}
          />
        </label>
        <label>
          decrease:
          <input
            type="number"
            value={decreaseInput}
            onChange={handleDecreaseChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Day1;
