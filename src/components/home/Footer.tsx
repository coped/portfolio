import { ReactElement } from "react";
import styles from "./Footer.module.css";
import copedLogo from "assets/images/coped-logo.png";

export function Footer(): ReactElement {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <img id={styles.footerImage} src={copedLogo} alt="coped.dev logo" />
      </div>
    </footer>
  );
}
