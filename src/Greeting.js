import React from "react";
import { useSpring, animated } from "react-spring";

function Greeting() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
    config: { duration: 4000 },
  });
  const props2 = useSpring({
    to: { opacity: 1 },
    delay: 1500,
    from: { opacity: 0 },
    config: { duration: 5000 },
  });
  const props3 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2500,
    config: { duration: 5000 },
  });
  const props4 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 3200,
    config: { duration: 5000 },
  });

  return (
    <div id="home" className="flexContainer">
      <h1 className="greedingBox1">
        <animated.div style={props}>Ciao,</animated.div>
      </h1>

      <h2 className="greedingBox2" style={{ fontStyle: "italic" }}>
        <animated.div style={props2}>I'm Giuseppe De Luca,</animated.div>
        <animated.div style={props3}>a software engineer</animated.div>
        <animated.div style={props4}>living in Brooklyn.</animated.div>
      </h2>
    </div>
  );
}

export default Greeting;
