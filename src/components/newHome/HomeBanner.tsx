import { ReactElement } from "react";
import styles from "./HomeBanner.module.css";
import { Terminal } from "./terminal/Terminal";

export function HomeBanner(): ReactElement {
  return (
    <div className={styles.banner}>
      <Terminal />
    </div>
  );
}
