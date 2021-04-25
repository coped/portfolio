import { ReactElement } from "react";

interface IconButtonProps {
  icon: string;
  alt: string;
  link?: string;
  onClick?(): void;
  children: string | ReactElement;
}

export function IconButton(props: IconButtonProps): ReactElement {
  function button(): ReactElement {
    return (
      <button className="button" onClick={props.onClick}>
        <span className="icon">
          <img src={props.icon} alt={props.alt} />
        </span>
        <span>{props.children}</span>
      </button>
    );
  }

  return props.link ? <a href={props.link}>{button()}</a> : button();
}
