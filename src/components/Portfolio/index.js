import React from "react";
import projects from "../../projects.json";
import Portfolio from "./projects";

function Projects() {
    return (
        <div className="col">
            {projects.map(project => (
                <Portfolio
                    id={project.id}
                    key={project.id}
                    project={project.project}
                    src={project.src}
                    alt={project.alt}
                    about={project.about}
                    depl={project.depl}
                    git={project.git}
                />
            ))}
        </div>
    );
}

export default Projects;
