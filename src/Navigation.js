import React from "react";
import { config } from "react-spring";
import { useSpring, animated } from "react-spring";

function Navigation() {
  const props = useSpring({
    to: { opacity: 1, marginRight: 0 },
    from: { opacity: 0, marginRight: -500 },
    delay: 4500,
    config: config.slow,
  });
  return (
    <header className="navbar font">
      {/* logo coming soon */}
      <a></a>

      <nav>
        <animated.div style={{ display: "inline", ...props }}>
          <a
            href="https://www.linkedin.com/in/giupi-deluca/"
            target="_blank"
            className="anchorNav"
          >
            <i className="fa fa-linkedin-square"></i>
          </a>

          <a
            href="https://github.com/GiupiDeLuca"
            target="_blank"
            className="anchorNav"
          >
            <i class="fa fa-github"></i>
          </a>
          <a
            href="mailto:giupi.deluca@hotmail.com"
            target="_blank"
            className="anchorNav"
          >
            <i class="fa fa-envelope" style={{ color: "whitesmoke" }}></i>
          </a>
        </animated.div>
      </nav>
    </header>
  );
}

export default Navigation;
