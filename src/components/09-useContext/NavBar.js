import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          useContext
        </Link>

        <div className="navbar-nav">
          <NavLink
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            to="/"
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
