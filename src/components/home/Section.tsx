import { ReactElement } from "react";

interface SectionProps {
  id: string;
  name: string;
  wide: boolean;
  children: ReactElement;
}

export default function Section(props: SectionProps): ReactElement {
  return (
    <section id={props.id} className="section">
      <div className="container">
        <h2 className="is-size-2 has-text-weight-light has-text-centered title">
          {props.name}
        </h2>
        <div className="columns center">
          <div className={"column" + (props.wide ? "" : " is-two-thirds")}>
            <hr className="hr"></hr>
          </div>
        </div>
        {props.children}
      </div>
    </section>
  );
}
