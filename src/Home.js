import myImage from "./images/me.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin3.png";
import "./Home.css"


export default function Home() {
    return (
        <div id="home">
            <img className="image" width="150" src={myImage}></img>
            <div className="home-info">
            <h1>Prerna Kumari</h1>
            <div>
            <a href="https://github.com/Jed-Al" target="_blank" rel="noreferrer">
                <img className = "github" width="50" src={github} alt="github"></img>
            </a>
            <a href="https://www.linkedin.com/in/prerna-kumari-754588230/" target="_blank" rel="noreferrer">
                <img className = "linkedin" width="40" src={linkedin} alt="linkedin"></img>
            </a>
            </div>
            </div>
        </div>)
}