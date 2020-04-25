import React from "react";
import "./Projects.css";
import { projectInfo } from "lib/content";
import Project from "components/Project/Project";

function Projects() {
  return (
    <div className="container">
      {projectInfo.map((project) => (
        <Project
          key={project.id}
          name={project.name}
            image={project.image}
            paragraphs={project.paragraphs}
            websiteLink={project.websiteLink}
            githubLink={project.githubLink}
          />
      ))}
    </div>
  );
}

export default Projects;
