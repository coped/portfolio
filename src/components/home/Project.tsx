import { ReactElement } from "react";
import githubLogo from "assets/images/icons/github-logo.svg";
import { ProjectInfo } from "types/lib/content";

interface ProjectProps {
  key: number;
  project: ProjectInfo;
}

export default function Project({ project }: ProjectProps): ReactElement {
  return (
    <div className="container paragraph">
      <h3 className="subtitle is-size-3 has-text-weight-bold">
        {project.name}
      </h3>
      <div className="columns">
        <div className="column">
          <a href={project.websiteLink}>
            <img src={project.image} alt={project.name + " logo"} />
          </a>
        </div>
        props
        <div className="column">
          {project.paragraphs.map((paragraph, index) => (
            <p key={index} className="paragraph">
              {paragraph}
            </p>
          ))}
          <div>
            <a href={project.websiteLink}>
              <button className="button is-primary paragraph">
                Visit website
              </button>
            </a>
          </div>
          <a href={project.githubLink}>
            <button className="button">
              <span className="icon">
                <img src={githubLogo} alt="Github logo" />
              </span>
              <span>View project on GitHub</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
