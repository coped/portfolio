import { ReactElement } from "react";
import { joinClasses } from "utils/utils";
import styles from "./TerminalButton.module.css";

type ButtonTypes = "red" | "yellow" | "green";
export type Props = { type: ButtonTypes };

export function TerminalButton(props: Props): ReactElement {
  const colors: Record<ButtonTypes, string> = {
    red: styles.red,
    yellow: styles.yellow,
    green: styles.green,
  };

  return <div className={joinClasses(styles.button, colors[props.type])}></div>;
}
