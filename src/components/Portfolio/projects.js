import React from "react";
import "./style.css";
import Image from "react-bootstrap/Image";

function Portfolio(props) {
    return (
        <div className="portfolio col-8 mx-auto mt-5 mb-3">
            <div className="port card ">
                <Image className="project" alt={props.alt} src={props.src}></Image> 
                <div className="card-body ">
                    <h5 className="card-title">{props.project}</h5>
                    <p className="card-text aboutpro">{props.about}</p>
                    <a href={props.depl} className="btn btn-primary linkbtns btn-links">Deployed App</a>
                    <a href={props.git} className="btn btn-primary linkbtns btn-links">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
