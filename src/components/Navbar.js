import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            NEWS APP
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
            
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </NavLink>
                <ul class="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/">
                      All
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/business">
                      Business
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/sports">
                      Sports
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/politics">
                      Politics
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/technology">
                      Technology
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/entertainment">
                      Entertainment
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/science">
                      Science
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className="dropdown-item" to="/automobile">
                      Automobile
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
