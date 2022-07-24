import { ReactElement, useState, useEffect, useReducer } from "react";
import styles from "./TerminalText.module.css";
import Bowser from "bowser";
import { joinClasses } from "utils/utils";

export function TerminalText(): ReactElement {
  const [browser, setBrowser] = useState<string>("...");
  const [path, setPath] = useState<string>("");
  const [flicker, setFlicker] = useReducer((state) => !state, true);

  useEffect(() => {
    const parser = Bowser.getParser(window.navigator.userAgent);
    setBrowser(parser.getBrowserName());
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    setPath(path.length > 1 ? path : "");
  }, []);

  useEffect(() => {
    const interval = window.setInterval(setFlicker, 600);
    () => window.clearInterval(interval);
  }, []);

  return (
    <p className={styles.monospace}>
      <span className={joinClasses(styles.green, styles.bold)}>
        guest@{browser}
      </span>
      :<span className={styles.purple}>~{path}</span>$ ./cope.sh
      <span className={flicker ? styles.textWhite : styles.textBlack}>_</span>
    </p>
  );
}
