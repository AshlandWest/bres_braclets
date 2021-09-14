import React, { useState } from "react";
import Menu from "./Menu";

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
            <a href="#">Lorem</a>
          </li>
          <li>
            <a href="#">Ipsum</a>
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
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
            >
              Menu
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- Menu --> */}
      <Menu open={menuIsOpen} />
    </header>
  );
};

export default NavHeader;
