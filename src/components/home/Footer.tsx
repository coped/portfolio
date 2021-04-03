import { ReactElement } from "react";
import "./Footer.css";
import copedLogo from "assets/images/coped-logo.png";

export function Footer(): ReactElement {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <img id="footer-image" src={copedLogo} alt="coped.dev logo" />
      </div>
    </footer>
  );
}
