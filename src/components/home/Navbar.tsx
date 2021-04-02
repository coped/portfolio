import { ReactElement } from "react";
import "./Navbar.css";
import copedLogo from "assets/images/coped-logo.png";

export default function Navbar(): ReactElement {
  const expandMobileMenu = (): void => {
    const burg = document.querySelector(".navbar-burger");
    const menu = document.querySelector(".navbar-menu");

    burg && burg.classList.toggle("is-active");
    menu && menu.classList.toggle("is-active");
  };
  
  return (
    <nav
      id="navbar"
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <img src={copedLogo} className="logo" alt="coped.dev logo" />
        </a>
        <a
          id="navbar-button"
          className="navbar-burger burger"
          onClick={expandMobileMenu}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-options"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar-options" className="navbar-menu is-size-5">
        <div className="navbar-start">
          <a href="/" className="navbar-item is-tab">
            Home
          </a>
        </div>
        <div className="navbar-end">
          <div className="buttons">
            <a
              href="https://coped.s3-us-west-1.amazonaws.com/Cope-Resume.pdf"
              className="button resume is-info navbar-item"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
