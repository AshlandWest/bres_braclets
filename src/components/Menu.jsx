import React, { useRef } from "react";
import ReactDOM from "react-dom";

const Menu = ({ open }) => {
  if (open) {
    return ReactDOM.createPortal(
      <>
        <div id="overlay" />
        <section id="menu">
          {/* <!-- Search --> */}
          <section>
            <form class="search" method="get" action="#">
              <input type="text" name="query" placeholder="Search" />
            </form>
          </section>

          {/* <!-- Links --> */}
          <section>
            <ul class="links">
              <li>
                <a href="#">
                  <h3>Lorem ipsum</h3>
                  <p>Feugiat tempus veroeros dolor</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h3>Dolor sit amet</h3>
                  <p>Sed vitae justo condimentum</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h3>Feugiat veroeros</h3>
                  <p>Phasellus sed ultricies mi congue</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <h3>Etiam sed consequat</h3>
                  <p>Porta lectus amet ultricies</p>
                </a>
              </li>
            </ul>
          </section>

          {/* <!-- Actions --> */}
          <section>
            <ul class="actions stacked">
              <li>
                <a href="#" class="button large fit">
                  Log In
                </a>
              </li>
            </ul>
          </section>
        </section>
      </>,
      document.getElementById("portal")
    );
  } else {
    return null;
  }
};

export default Menu;
