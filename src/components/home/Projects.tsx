import { ReactElement } from "react";
import "./Projects.css";
import { projectInfo } from "lib/content";
import { Project } from "components/home";

export default function Projects(): ReactElement {
  return (
    <div className="container">
      {projectInfo.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}
