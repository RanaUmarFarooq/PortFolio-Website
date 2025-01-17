import { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
