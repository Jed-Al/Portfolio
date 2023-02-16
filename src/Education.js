import { Card } from "reactstrap"
import school from "./images/school.jpg"
import college from "./images/college.webp"
import university from "./images/uni.jpg"
import "./Education.css"

export default function Education() {
    return(
    <div id="education">
        <h1 className="education-heading">Education</h1>
        <Card className="education-card">
            <img width = "250" src = {school} className = "school-image" ></img>
            <div className="content">
            <h3>Baldwin Farm Area High School, Kadma</h3>
            <h5>2018</h5>
            </div>
        </Card>
        <Card className="education-card">
            <img width = "250" src = {college} className = "school-image" ></img>
            <div className="content">
            <h3>Government Women's Polytechnic, Ranchi</h3>
            <h5>2018 - 2021</h5>
            </div>
        </Card>
        <Card className="education-card">
            <img width = "250" src = {university} className = "school-image" ></img>
            <div className="content">
            <h3>Lovely Professional University, Phagwara</h3>
            <h5>2021 - 2024</h5>
            </div>
        </Card>
    </div>
    )
}