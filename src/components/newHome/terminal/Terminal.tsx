import { ReactElement } from "react";
import styles from "./Terminal.module.css";
import { TerminalButton } from "./TerminalButton";
import { TerminalText } from "./TerminalText";

export function Terminal(): ReactElement {
  return (
    <div className={styles.terminal}>
      <div className={styles.buttons}>
        <TerminalButton type="red" />
        <TerminalButton type="yellow" />
        <TerminalButton type="green" />
      </div>
      <TerminalText />
    </div>
  );
}
