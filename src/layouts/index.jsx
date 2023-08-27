import { Outlet } from "react-router-dom";
import TheFooter from "../components/TheFooter";
import TheHeader from "../components/TheHeader";
import "./index.css";

export default function MainLayout() {
  return (
    <div className='main__layout'>
      <TheHeader />
      <main>
        <Outlet />
      </main>
      <TheFooter />
    </div>
  );
}
