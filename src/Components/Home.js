import logo from "../logo.svg";
import "../App.css";
import HeaderNav from "./Template/HeaderNav";
import FooterNav from "./Template/FooterNav";

function Home() {
  return (
    <>
      <HeaderNav />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <FooterNav />
    </>
  );
}

export default Home;
