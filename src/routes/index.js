import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../layouts";
import LoginLayout from "../layouts/Login";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoutes from "../components/PrivateRoutes";
import FirstDay from "../pages/FirstDay";
import SecondDay from "../pages/SecondDay";
import ThirdDay from "../pages/ThirdDay";
import FourthDay from "../pages/FourthDay";
import { CardPage } from "../pages/CardPage/cardpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/:id" element={<CardPage />} />
      <Route element={<MainLayout />}>
        <Route element={<PrivateRoutes />}>
          <Route index element={<Home />} />
          <Route path="first-day" element={<FirstDay />} />
          <Route path="second-day" element={<SecondDay />} />
          <Route path="third-day" element={<ThirdDay />} />
          <Route path="fourth-day" element={<FourthDay />} />
        </Route>
      </Route>
      <Route element={<LoginLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

export default router;
