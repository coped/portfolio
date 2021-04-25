import { ReactElement } from "react";
import { projectInfo } from "lib/content";
import { Project } from "components/home/Project";

export function Projects(): ReactElement {
  return (
    <div className="container">
      {projectInfo.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}
