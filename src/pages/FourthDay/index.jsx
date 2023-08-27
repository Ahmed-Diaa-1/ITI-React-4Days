import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";

export default function FourthDay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
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
    <div className="card d-flex ">
      <div className="card-body ">
        <div className=" d-flex flex-wrap">
          {" "}
          {}
          {data.map((item) => (
            <Link
              to={`/${item.id}`}
              key={item.id}
              className="nav-link navLinkAnchor"
            >
              <h1 className="cardStyle " key={item.id}>
                {item.id}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
