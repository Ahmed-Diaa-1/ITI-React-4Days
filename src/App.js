import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./App.css";

function App() {
  // You Can Put Here Any Shared Logic Want To Perform For All Project Pages
  return <RouterProvider router={router} />;
}

export default App;
