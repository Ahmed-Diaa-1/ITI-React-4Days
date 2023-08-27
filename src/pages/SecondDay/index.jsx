import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

export default function SecondDay() {
  const [count, setCount] = useState(0);
  const [increaseInput, setIncreaseInput] = useState(0);
  const [decreaseInput, setDecreaseInput] = useState(0);
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      {" "}
      <h1 className="m-3">Counter: {count}</h1>
      <form onSubmit={handleSubmit} className="form-inline my-3">
        <label className="mr-2">
          Increase:
          <input
            className="form-control mx-2"
            type="number"
            value={increaseInput}
            onChange={handleIncreaseChange}
          />
        </label>
        <label className="mr-2">
          Decrease:
          <input
            className="form-control mx-2"
            type="number"
            value={decreaseInput}
            onChange={handleDecreaseChange}
          />
        </label>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
      <div className="list-group border p-4 mt-4 rounded ">
        <div>
          {data.map((item) => (
            <p key={item.id} className="list-group-item rounded">
              {item.username}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
