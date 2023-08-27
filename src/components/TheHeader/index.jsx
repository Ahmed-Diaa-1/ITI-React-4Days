import { Children } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

const navs = [
  { name: "Home", path: "/" },
  { name: "First Day", path: "/first-day" },
  { name: "Second Day", path: "/second-day" },
  { name: "Third Day", path: "/third-day" },
  { name: "Fourth Day", path: "/fourth-day" },
];

export default function TheHeader() {
  return (
    <header>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            LOGO
          </Link>
          <button className='navbar-toggler' type='button'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav header__nav'>
              {Children.toArray(
                navs.map(({ name, path }) => (
                  <li className='nav-item'>
                    <NavLink to={path} className='nav-link'>
                      {name}
                    </NavLink>
                  </li>
                )),
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
