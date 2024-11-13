import React from "react";
import Home from "./Components/Home";
import CustomCursor from "./Components/CustomCursor";
import About from "./Components/About";
import SkillNew from "./Components/SkillNew";
import Project from "./Components/Project";
import Contact from "./Components/Contact"; 

const App = () => {
  return (
    <>
      <CustomCursor />
      <Home />

      <About />

      <SkillNew />

      <Project />

      <Contact />

      {/* </CustomCursor> */}
    </>
  );
};

export default App;
