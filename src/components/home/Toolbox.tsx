import { ReactElement } from "react";
import { Tool } from "types/lib/content";

interface ToolboxProps {
  name: string;
  tools: Tool[];
}

export default function Toolbox(props: ToolboxProps): ReactElement {
  return (
    <div className="notification">
      <h3 className="subtitle has-text-centered has-text-weight-bold">
        {props.name}
      </h3>
      {props.tools.map((tool) => (
        <div key={tool.id} className="columns is-vertical-center">
          <img
            src={tool.logo}
            className="column tool-icon"
            alt={tool.name + " logo"}
          />
          <p className="column is-7">{tool.name}</p>
        </div>
      ))}
    </div>
  );
}
