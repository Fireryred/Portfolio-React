import NavigationBar from "./Template/NavigationBar";
import About from "./About";
import Home from "./Home";
import "../CSS/index.css";

function Index() {
  return (
    <div className="text-light main-body">
      <NavigationBar />
      <Home />
      <About />
    </div>
  );
}

export default Index;
