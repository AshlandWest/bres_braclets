import React, { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const NavHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header id="header">
      <h1>
        <a href="index.html">Bre's Bracelets</a>
      </h1>
      <nav class="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="#">Feugiat</a>
          </li>
          <li>
            <a href="#">Tempus</a>
          </li>
          <li>
            <a href="#">Adipiscing</a>
          </li>
        </ul>
      </nav>
      <nav class="main">
        <ul>
          <li class="search">
            <a class="fa-search" href="#search">
              Search
            </a>
            <form id="search" method="get" action="#">
              <input type="text" name="query" placeholder="Search" />
            </form>
          </li>
          <li class="menu">
            <a
              class="fa-bars"
              href="#"
              onClick={(e) => {
                setMenuIsOpen(!menuIsOpen);
                e.preventDefault();
              }}
            >
              Menu
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- Menu --> */}
      <Menu open={menuIsOpen} toggleOpen={setMenuIsOpen} />
    </header>
  );
};

export default NavHeader;
