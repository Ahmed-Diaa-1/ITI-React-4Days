import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function CardPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    fetchData();
  }, [id]);

  return loading ? (
    <div>
      <h1 className="text-warning">Loading...</h1>
    </div>
  ) : data ? (
    <div className="border rounded d-flex flex-column gap-5 align-items-center my-5 pt-5">
      <h1 className="text-primary"> Card {id}</h1>
      <h2>{data.title}</h2>
      <p className="text-muted">{data.body}</p>
    </div>
  ) : (
    <div>
      <p className="text-danger">No data found</p>
    </div>
  );
}
