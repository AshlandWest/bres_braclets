import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";

const Menu = ({ open, toggleOpen }) => {
  const slideAnimation = useSpring({
    config: {
      duration: 250,
    },
    transform: open ? `translateX(0%)` : `translateX(25em)`,
  });

  const fadeAnimation = useSpring({
    config: {
      duration: 250,
    },
    opacity: open ? 0.7 : 0,
  });

  if (open) {
    return ReactDOM.createPortal(
      <>
        <animated.div
          id="overlay"
          style={fadeAnimation}
          onClick={() => {
            toggleOpen(false);
          }}
        />
        <animated.div style={slideAnimation}>
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
        </animated.div>
      </>,
      document.getElementById("portal")
    );
  } else {
    return null;
  }
};

export default Menu;
