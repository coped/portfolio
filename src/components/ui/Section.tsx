import { ReactElement } from "react";
import sectionStyles from "./Section.module.css";
import commonStyles from "common.module.css";
import { joinClasses } from "utils/utils";

interface SectionProps {
  id: string;
  name: string;
  wide: boolean;
  children: ReactElement;
}

export function Section(props: SectionProps): ReactElement {
  return (
    <section id={props.id} className="section">
      <div className="container">
        <h2 className="is-size-2 has-text-weight-light has-text-centered title">
          {props.name}
        </h2>
        <div className={joinClasses("columns", commonStyles.center)}>
          <div
            className={joinClasses("column", props.wide ? "" : "is-two-thirds")}
            data-testid="wide"
          >
            <hr className={sectionStyles.hr}></hr>
          </div>
        </div>
        {props.children}
      </div>
    </section>
  );
}
