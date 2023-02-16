import Home from "./Home"
import About from "./About"
import Skill from "./Skill"
import Education from "./Education"
import Contact from "./Contact"
import "./HomePage.css"


export default function HomePage() {
    return (
        <div className="home-page">
            <Home />
            <About />
            <Skill/>
            <Education />
            <Contact />
        </div>
    )
}