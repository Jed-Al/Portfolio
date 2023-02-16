import { Card, CardText } from "reactstrap";
import github from "./images/github.png";
import linkedin from "./images/linkedin3.png";
import mail from "./images/mail.png"
import location from "./images/location.png"
import "./Contact.css"

export default function Contact() {
    return(
        <div id="contact">
            <h3>Contact Info</h3>
            <div>
                <Card className="contact-email">
                    <img width = "40" src = {mail} style = {{borderRadius : 16, marginRight : 10}}/>
                    <CardText>prernakumari480@gmail.com</CardText>
                    </Card>
                <Card className="contact-location">
                <img width = "20" src = {location} style = {{borderRadius : 16, marginRight :40}}/>
                    <CardText>Jamshedpur, Jharkhand</CardText>
                </Card>
                {/* <Card></Card> */}
            </div>
            <div>
            <a href="https://github.com/Jed-Al" target="_blank" rel="noreferrer">
                <img className = "github" width="50" src={github} alt="github"></img>
            </a>
            <a href="https://www.linkedin.com/in/prerna-kumari-754588230/" target="_blank" rel="noreferrer">
                <img className = "linkedin" width="40" src={linkedin} alt="linkedin"></img>
            </a>
            </div>
        </div>
    )
}