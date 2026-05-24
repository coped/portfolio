import { ReactElement } from "react";
import { TerminalButton } from "@/components/TerminalButton/TerminalButton";
import { Output } from "./Output";
import styles from "./Terminal.module.css";

export function Terminal(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <TerminalButton color="red" />
        <TerminalButton color="yellow" />
        <TerminalButton color="green" />
      </div>
      <Output />
    </div>
  );
}
