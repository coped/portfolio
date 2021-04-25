import { ReactElement } from "react";
import bannerStyles from "./Banner.module.css";
import commonStyles from "common.module.css";
import arrow from "assets/images/banner-icons/angle-down-solid.svg";
import { socialLinks } from "lib/content";
import { scrollIntoView } from "utils/utils";

export function Banner(): ReactElement {
  return (
    <section id="banner" className="hero is-dark is-bold is-fullheight">
      <div className="hero-head"></div>
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <h1 className="title has-text-centered has-text-weight-light is-size-1">
              Dennis <span className={commonStyles.blue}>Cope</span>
            </h1>
            <h2 className="subtitle is-size-4 has-text-centered">
              JavaScript <span className={commonStyles.blue}>Developer</span>
            </h2>
          </section>
          <section className="section">
            <div className={commonStyles.center}>
              {socialLinks.map((social) => (
                <a key={social.id} href={social.link}>
                  <img
                    src={social.image}
                    className={bannerStyles.bannerIcon}
                    alt={social.alt}
                  />
                </a>
              ))}
            </div>
          </section>
          <section className="section has-text-centered">
            <h2 className="subtitle is-size-4">Let&apos;s build something.</h2>
          </section>
        </div>
      </div>
      <div className={`hero-foot ${commonStyles.center}`}>
        <button className={bannerStyles.bannerButton}>
          <img
            src={arrow}
            className={bannerStyles.downArrow}
            onClick={() => scrollIntoView("#navbar")}
            alt="scroll button"
          />
        </button>
      </div>
    </section>
  );
}
