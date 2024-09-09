import NavigationBar from "./Template/NavigationBar";
import Home from "./Home";
import "../CSS/index.css";

function Index() {
  return (
    <div className="main-body">
      <NavigationBar />
      <Home />
    </div>
  );
}

export default Index;
