import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePage from "./HomePage";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <AnchorLink href="#home"><button className="nav-button">Home</button></AnchorLink>
        <AnchorLink href="#about"><button className="nav-button">About</button></AnchorLink>
        <AnchorLink href="#skills"><button className="nav-button">Skills</button></AnchorLink>
        <AnchorLink href="#education"><button className="nav-button">Education</button></AnchorLink>
        <AnchorLink href="#contact"><button className="nav-button">Contact</button></AnchorLink>
      </div>
      <HomePage />
    </div>
  );
}

export default App;
