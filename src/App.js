import { useEffect } from "react";
import Index from "./Components";

function App() {
  useEffect(() => {
    document.title = "Gershom Gruta | Software Engineer";
  }, []);
  return <Index />;
}

export default App;
