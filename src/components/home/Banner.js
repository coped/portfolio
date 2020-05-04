import React from "react";
import "./Banner.css";
import arrow from "assets/images/banner-icons/angle-down-solid.svg";
import { socialLinks } from "lib/content";

export default function Banner() {
  const scrollDown = () => {
    document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="banner" className="hero is-dark is-bold is-fullheight">
      <div className="hero-head"></div>
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <h1 className="title has-text-centered has-text-weight-light is-size-1">
              Dennis <span className="blue">Cope</span>
            </h1>
            <h2 className="subtitle is-size-4 has-text-centered">
              Fullstack <span className="blue">Developer</span>
            </h2>
          </section>
          <section className="section">
            <div className="center">
              {socialLinks.map((social) => (
                <a key={social.id} href={social.link}>
                  <img
                    src={social.image}
                    className="banner-icon"
                    alt={social.alt}
                  />
                </a>
              ))}
            </div>
          </section>
          <section className="section has-text-centered">
            <h2 className="subtitle is-size-4">Let's build something.</h2>
          </section>
        </div>
      </div>
      <div className="hero-foot center">
        <button id="banner-button">
          <img
            src={arrow}
            className="down-arrow"
            onClick={scrollDown}
            alt="scroll button"
          />
        </button>
      </div>
    </section>
  );
}
