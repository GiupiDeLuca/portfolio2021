import React from "react";
import { config } from "react-spring";
import { useSpring, animated } from "react-spring";

function Navigation(props) {
  const animation = useSpring({
    to: { opacity: 1, marginRight: 0 },
    from: { opacity: 0, marginRight: -500 },
    delay: 4500,
    config: config.slow,
  });

  const iconStyle = {
    color: props.isDark ? "whitesmoke" : "black",
  };

  return (
    <header className="navbar font">
      {/* logo coming soon */}
      <a></a>

      <nav>
        <animated.div style={{ display: "inline", ...animation }}>
          <a
            href="https://www.linkedin.com/in/giupi-deluca/"
            target="_blank"
            className="anchorNav"
          >
            <i className="fa fa-linkedin-square" style={iconStyle}></i>
          </a>

          <a
            href="https://github.com/GiupiDeLuca"
            target="_blank"
            className="anchorNav"
          >
            <i class="fa fa-github" style={iconStyle}></i>
          </a>
          <a
            href="mailto:giupi.deluca@hotmail.com"
            target="_blank"
            className="anchorNav"
          >
            <i class="fa fa-envelope" style={iconStyle}></i>
          </a>
          <a onClick={() => props.changeMode()} style={iconStyle}>
            {props.isDark ? <i class="bi bi-sun"></i> : <i class="bi bi-moon"></i>}
          </a>
        </animated.div>
      </nav>
    </header>
  );
}

export default Navigation;
