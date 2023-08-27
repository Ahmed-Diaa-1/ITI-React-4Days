import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPostsData } from "../../../store/action";

const Day4 = () => {
  const [isFetched, setIsFetched] = useState(false);
  //const
  const dispatch = useDispatch;
  useEffect(() => {
    if (!isFetched) return;
    dispatch(fetchPostsData);
  }, [isFetched]);
  return (
    <div>
      <button onClick={() => setIsFetched(true)}>
        click to start fetch with redux
      </button>
    </div>
  );
};

export default Day4;
