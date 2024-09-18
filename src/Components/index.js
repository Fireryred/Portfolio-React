import NavigationBar from "./Template/NavigationBar";
import About from "./About";
import Home from "./Home";
import "../CSS/index.css";
import Projects from "./Project-Page/Projects";

function Index() {
  return (
    <div className="text-light main-body">
      <NavigationBar />
      <Home />
      <About />
      <Projects/>
    </div>
  );
}

export default Index;
