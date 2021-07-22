import React, { useState } from "react";
import "./App.css";
import Greeting from "./Greeting";
import Navigation from "./Navigation";
import { useSpring, animated } from "react-spring";


function App() {
  const [isDark, setDark] = useState(true);

  // const change = useSpring({
  //   color: isDark ? "green" : "whitesmoke",
  // });

  return (
    <animated.div className={`rootDiv ${isDark? "darkMode" : "lightMode"}`}>
      <Navigation changeMode={() => setDark(!isDark)} isDark={isDark} />
      <Greeting isDark={isDark} />
    </animated.div>
  );
}



export default App;
