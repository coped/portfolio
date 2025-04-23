import { ReactElement } from "react";
import { useRouter } from "next/router";
import { Flicker } from "../../components/Flicker/Flicker";
import { useBrowser } from "../../hooks/useBrowser/useBrowser";
import styles from "./Output.module.css";

export function Output(): ReactElement {
  const { asPath: path } = useRouter();
  const browser = useBrowser();

  return (
    <p className={styles.monospace}>
      <span className={styles.green}>
        <span className={styles.strong}>guest@{browser}</span>
      </span>
      :<span className={styles.purple}>~{path}</span>$ ./cope.sh
      <Flicker interval={600}>_</Flicker>
    </p>
  );
}
