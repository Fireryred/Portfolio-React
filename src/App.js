import { useEffect } from "react";
import Index from "./Components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    document.title = "Gershom Gruta | Software Engineer";
  }, []);
  return <Index />;
}

export default App;
