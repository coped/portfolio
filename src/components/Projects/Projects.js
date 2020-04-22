import React from 'react';
import './Projects.css';
import Content from 'lib/content'
import Project from 'components/Project/Project'

function Projects() {
    return (
        <div className="container">
            {Content.projects.map((project) => 
                <Project
                    key={project.keyID}
                    name={project.name}
                    image={project.image}
                    paragraphs={project.paragraphs}
                    websiteLink={project.websiteLink}
                    githubLink={project.githubLink}
                />
            )}
        </div>
    )
}

export default Projects;
