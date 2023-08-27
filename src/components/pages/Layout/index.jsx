import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Day1">Day 1</NavLink>
          <NavLink to="/Day2">Day 2</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
