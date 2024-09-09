import HeaderNav from "./Template/HeaderNav";
import FooterNav from "./Template/FooterNav";
import Home from "./Home";
import "../CSS/index.css";

function Index() {
  return (
    <div className="bg-color">
      <HeaderNav />
      <Home />
      <FooterNav />
    </div>
  );
}

export default Index;
