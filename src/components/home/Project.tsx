import { ReactElement } from "react";
import githubLogo from "assets/images/icons/github-logo.svg";
import commonStyles from "common.module.css";
import { IconButton } from "components/ui/IconButton";
import { joinClasses } from "utils/utils";
import type { ProjectInfo } from "types/lib/content";

interface ProjectProps {
  key: string;
  project: ProjectInfo;
}

export function Project({ project }: ProjectProps): ReactElement {
  return (
    <div className={joinClasses("container", commonStyles.paragraph)}>
      <h3 className="subtitle is-size-3 has-text-weight-bold">
        {project.name}
      </h3>
      <div className="columns">
        <div className="column">
          <a href={project.websiteLink}>
            <img src={project.image} alt={project.name + " logo"} />
          </a>
        </div>
        <div className="column">
          {project.paragraphs.map((paragraph, index) => (
            <p key={index} className={commonStyles.paragraph}>
              {paragraph}
            </p>
          ))}
          <div>
            <a href={project.websiteLink}>
              <button
                className={joinClasses(
                  "button",
                  "is-primary",
                  commonStyles.paragraph
                )}
              >
                Visit website
              </button>
            </a>
          </div>
          <IconButton
            link={project.githubLink}
            icon={githubLogo}
            alt="Github logo"
          >
            View project on GitHub
          </IconButton>
        </div>
      </div>
    </div>
  );
}
