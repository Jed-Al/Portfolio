import { Card, CardText } from "reactstrap";
import "./About.css"
import mee from "./images/me3.jpg"

export default function About() {
    return (
        <div id="about">
            <Card className="about-card">
                <img width="300" src={mee} className="about-image" ></img>
                <div className="about-info">
                    <CardText className="desc">I am pursuing my Bachelor of Technology in Computer Science and technology from Lovely Professional University. I am interested in Machine learning/AI, User Interface and improving User Experience.</CardText>
                    <div className="information">
                        <Card className="info">
                            {/* <h6>Age:</h6> */}
                            <h6>20 years old</h6>
                        </Card>
                        <Card className="info">
                            {/* <h6>Place:</h6> */}
                            <h6>Jamshedpur, Jharkhand</h6>
                        </Card>
                        <Card className="info">
                            {/* <h6>Email:</h6> */}
                            <h6>prernakumari480@gmail.com</h6>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>
    )
}