import { useRef } from "react";
import NavigationBar from "./NavigationBar";
import About from "./About";
import Home from "./Home";
import "../CSS/index.css";
import Projects from "./Projects";
import Contact from "./Contact";

function Index() {
  const observerRefs = useRef([]);

  const setReference = (div, key) => {
    observerRefs.current[key] = div;
  };

  return (
    <div className="text-light main-body" id="main-body">
      <NavigationBar refs={observerRefs} />
      <Home handleRef={setReference} />
      <About handleRef={setReference} />
      <Projects handleRef={setReference} />
      <Contact handleRef={setReference} />
    </div>
  );
}

export default Index;
