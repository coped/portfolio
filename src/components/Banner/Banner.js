import React from 'react';
import './Banner.css';

function Banner() {
    const scrollDown = () => {
        document.querySelector("#navbar").scrollIntoView({ behavior: "smooth" });
    }
    return (
        <section 
            id="banner"
            className="hero is-dark is-bold is-fullheight"
        >
            <div className="hero-head"></div>
            <div className="hero-body">
                <div className="container">
                    <section className="section">
                        <h1 className="title has-text-centered has-text-weight-light is-size-1">
                            Dennis <span className="blue">Cope</span>
                        </h1>
                        <h2 className="subtitle is-size-4 has-text-centered">
                            Jr. Fullstack <span className="blue">Developer</span>
                        </h2>
                    </section>
                    <section className="section">
                        <div className="center">
                            <a href="https://github.com/coped">
                                <img
                                    src="https://coped.s3-us-west-1.amazonaws.com/GitHub-Mark-Light-120px-plus-scaled.png"
                                    className="banner-icon"
                                    alt="Link to github"
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/dennis-cope">
                                <img
                                    src="https://coped.s3-us-west-1.amazonaws.com/linkedin-dark-scaled.png"
                                    className="banner-icon"
                                    alt="Link to linkedin"
                                />
                            </a>
                            <a href="mailto:dennisaaroncope@gmail.com">
                                <img
                                    src="https://coped.s3-us-west-1.amazonaws.com/email-logo-dark-scaled.png"
                                    className="banner-icon"
                                    alt="Mail to dennisaaroncope@gmail.com"
                                />
                            </a>
                        </div>
                    </section>
                    <section className="section has-text-centered">
                        <h2 className="subtitle is-size-4">
                            Let's build something.
                        </h2>
                    </section>
                </div>
            </div>
            <div className="hero-foot center">
                <button 
                    id="banner-button"
                >
                    <img
                        src="https://coped.s3-us-west-1.amazonaws.com/icons/angle-down-solid.svg"
                        className="down-arrow"
                        onClick={() => scrollDown()}
                        alt="scroll button"
                    />
                </button>
            </div>
        </section>
    )
}

export default Banner
