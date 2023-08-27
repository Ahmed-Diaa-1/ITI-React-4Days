import "./index.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="my-5 py-5">
      <h1 className="display-1 text-center">
        This is the ITI react final project
      </h1>
      <div className="list-group my-3 text-center  py-5">
        <Link
          to="/first-day"
          className="list-group-item list-group-item-action"
        >
          First Day
        </Link>
        <Link
          to="/second-day"
          className="list-group-item list-group-item-action"
        >
          Second Day
        </Link>
        <Link
          to="/third-day"
          className="list-group-item list-group-item-action"
        >
          Third Day
        </Link>
        <Link
          to="/fourth-day"
          className="list-group-item list-group-item-action"
        >
          Fourth Day
        </Link>
      </div>
    </div>
  );
}
