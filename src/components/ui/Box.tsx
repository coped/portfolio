import { ReactElement } from "react";

interface BoxProps {
  name: string;
  children: ReactElement | ReactElement[];
}

export function Box(props: BoxProps): ReactElement {
  return (
    <div className="notification">
      <h3 className="subtitle has-text-centered has-text-weight-bold">
        {props.name}
      </h3>
      {props.children}
    </div>
  );
}
