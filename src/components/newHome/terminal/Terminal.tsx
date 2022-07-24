import { ReactElement } from "react";
import styles from "./Terminal.module.css";
import { TerminalButton } from "./TerminalButton";

export function Terminal(): ReactElement {
  return (
    <div className={styles.terminal}>
      <div className={styles.buttons}>
        <TerminalButton type="red" />
        <TerminalButton type="yellow" />
        <TerminalButton type="green" />
      </div>
      <p>guest@Firefox:~$ ./cope.sh {"\u2588"}</p>
    </div>
  );
}
