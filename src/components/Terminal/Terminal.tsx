import { ReactElement } from "react";
import { Button } from "./Button";
import { Output } from "./Output";
import styles from "./Terminal.module.css";

export function Terminal(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button color="red" />
        <Button color="yellow" />
        <Button color="green" />
      </div>
      <Output />
    </div>
  );
}
