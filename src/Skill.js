import { Card, CardTitle } from "reactstrap"
import "./Skill.css"
import react from "./images/react.png"
import python from "./images/python-logo.png"
import reactstrap from "./images/reactstrap.png"
import ml from "./images/ml.jpg"
import javascript from "./images/javascript-logo.png"
import html from "./images/html5-icon.png"
import css from "./images/css3.png"
import bootstrap from "./images/bootstrap-logo.png"
import github from "./images/github.png"
import rest from "./images/rest.png"
import numpy from "./images/numpy-logo.svg"
import pandas from "./images/pandas1.svg"


const SkillCard = ({ image, title }) => {
    return (
        <Card className="skill-card">
            <img alt={title} width="80" src={image}></img>
            <CardTitle>{title}</CardTitle>
        </Card>
    )
}

const SkillColumn1 = () => {
    return(
        <div className="skill-1">
                <SkillCard image={react} title="React" />
                <SkillCard image={reactstrap} title="ReactStrap" />
                <SkillCard image={javascript} title="Javascript" />
                <SkillCard image={html} title="HTML" />
                <SkillCard image={css} title="CSS" />
                <SkillCard image={bootstrap} title="BootStrap" />
            </div>
    )
}

const SkillColumn2 = () => {
    return(
        <div className="skill-1">
                <SkillCard image={python} title="Python" />
                <SkillCard image={ml} title="ML" />
                <SkillCard image={pandas} title="Pandas" />
                <SkillCard image={numpy} title="Numpy" />
                <SkillCard image={github} title="GitHub" />
                <SkillCard image={rest} title="RESTful API" />
            </div>
    )
}

export default function Skill() {
    return (
        <div id="skills">
            <h1 className="skill-heading">Skills and Abilities</h1>
            <SkillColumn1/>
            <SkillColumn2/>
        </div>
    )
}