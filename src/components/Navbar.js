import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <header>
        <div className="container">
          <div className="inner-content">
            <div className="brand">
              <Link to="/" className="nav-links">
                Movie Watchlist
              </Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            {/* <ul className="nav-links"> */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                {/* <Link to="/" >Watch List</Link> */}
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Watch List
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link to="/watched">Watched</Link> */}
                <Link
                  to="/watched"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Watched
                </Link>
              </li>
              <li>
                {/* <Link to="/add" className="btn">
                  + Add
                </Link> */}
                <Link to="/add" className="btn" onClick={closeMobileMenu}>
                  Add Movie
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
