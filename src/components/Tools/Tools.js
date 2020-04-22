import React from 'react';
import './Tools.css';
import rubyLogo from 'assets/images/icons/ruby-logo.svg';
import railsLogo from 'assets/images/icons/rails-logo.svg';
import rspecLogo from 'assets/images/icons/rspec-logo.svg';
import pgLogo from 'assets/images/icons/pg-logo.svg';
import jsLogo from 'assets/images/icons/javascript-logo.svg';
import reactLogo from 'assets/images/icons/react-logo.svg';
import htmlLogo from 'assets/images/icons/html-logo.svg';
import cssLogo from 'assets/images/icons/css-logo.svg';
import bulmaLogo from 'assets/images/icons/bulma-logo.svg';
import linuxLogo from 'assets/images/icons/tux-logo.png';
import gitLogo from 'assets/images/icons/git-logo.svg';
import githubLogo from 'assets/images/icons/github-logo.svg';
import herokuLogo from 'assets/images/icons/heroku-logo.svg';
import awsLogo from 'assets/images/icons/aws-logo.svg';



function Tools() {
    return (
        <section
            id="tools"
            className="section"
        >
            <div className="container">
                <h2 className="is-size-2 has-text-weight-light center title">
                    My Favorite Tools
                </h2>
                <div className="columns center">
                    <div className="column">
                        <hr className="hr"></hr>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="notification">
                            <h3 className="subtitle has-text-centered has-text-weight-bold">
                                Back end
                            </h3>
                            <div className="has-text-left">
                                <div className="columns is-vertical-center">
                                    <img
                                        src={rubyLogo}
                                        className="column tool-icon"
                                        alt="Ruby logo"
                                    />
                                    <p className="column is-7">
                                        Ruby
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src={railsLogo}
                                        className="column tool-icon"
                                        alt="Rails logo"
                                    />
                                    <p className="column is-7">
                                        Ruby on Rails
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src={rspecLogo}
                                        className="column tool-icon"
                                        alt="RSpec logo"
                                    />
                                    <p className="column is-7">
                                        RSpec + Minitest
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src={pgLogo}
                                        className="column tool-icon"
                                        alt="PostgreSQL logo"
                                    />
                                    <p className="column is-7">
                                        PostgreSQL
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="notification">
                            <h3 className="subtitle has-text-centered has-text-weight-bold">
                                Front end
                            </h3>
                            <div className="has-text-left">
                                <div className="columns is-vertical-center">
                                    <img
                                        src={jsLogo}
                                        className="column tool-icon"
                                        alt="Javascript logo"
                                    />
                                    <p className="column is-7">
                                        JavaScript
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src={reactLogo}
                                        className="column tool-icon"
                                        alt="React logo"
                                    />
                                    <p className="column is-7">
                                        React
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src={htmlLogo}
                                        className="column tool-icon"
                                        alt="HTML logo"
                                    />
                                    <p className="column is-7">
                                        HTML5
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src={cssLogo}
                                        className="column tool-icon"
                                        alt="CSS logo"
                                    />
                                    <p className="column is-7">
                                        CSS
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src={bulmaLogo}
                                        className="column tool-icon"
                                        alt="Bulma logo"
                                    />
                                    <p className="column is-7">
                                        Bulma
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="notification">
                            <h3 className="subtitle has-text-centered has-text-weight-bold">
                                Miscellaneous
                            </h3>
                            <div className="has-text-left">
                                <div className="columns is-vertical-center">
                                    <img
                                        src={linuxLogo}
                                        className="column tool-icon"
                                        alt="Linux logo"
                                    />
                                    <p className="column is-7">
                                        Linux
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src={gitLogo}
                                        className="column tool-icon"
                                        alt="Git logo"
                                    />
                                    <p className="column is-7">
                                        Git
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src={githubLogo}
                                        className="column tool-icon"
                                        alt="GitHub logo"
                                    />
                                    <p className="column is-7">
                                        Github
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src={herokuLogo}
                                        className="column tool-icon"
                                        alt="Heroku logo"
                                    />
                                    <p className="column is-7">
                                        Heroku
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src={awsLogo}
                                        className="column tool-icon"
                                        alt="Amazon web services logo"
                                    />
                                    <p className="column is-7">
                                        Amazon Web Services
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tools;