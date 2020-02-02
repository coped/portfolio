import React from 'react';
import './Tools.css';

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
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/ruby-logo.svg"
                                        className="column tool-icon"
                                        alt="Ruby logo"
                                    />
                                    <p className="column is-7">
                                        Ruby
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/rails-logo.svg"
                                        className="column tool-icon"
                                        alt="Rails logo"
                                    />
                                    <p className="column is-7">
                                        Ruby on Rails
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/rspec-logo.svg"
                                        className="column tool-icon"
                                        alt="RSpec logo"
                                    />
                                    <p className="column is-7">
                                        RSpec + Minitest
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/pg-logo.svg"
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
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/javascript-logo.svg"
                                        className="column tool-icon"
                                        alt="Javascript logo"
                                    />
                                    <p className="column is-7">
                                        JavaScript
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/react-logo.svg"
                                        className="column tool-icon"
                                        alt="React logo"
                                    />
                                    <p className="column is-7">
                                        React
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/html-logo.svg"
                                        className="column tool-icon"
                                        alt="HTML logo"
                                    />
                                    <p className="column is-7">
                                        HTML5
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/css-logo.svg"
                                        className="column tool-icon"
                                        alt="CSS logo"
                                    />
                                    <p className="column is-7">
                                        CSS
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/bulma-logo.svg"
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
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/tux-logo.png"
                                        className="column tool-icon"
                                        alt="Linux logo"
                                    />
                                    <p className="column is-7">
                                        Linux
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/git-logo.svg"
                                        className="column tool-icon"
                                        alt="Git logo"
                                    />
                                    <p className="column is-7">
                                        Git
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/github-logo.svg"
                                        className="column tool-icon"
                                        alt="GitHub logo"
                                    />
                                    <p className="column is-7">
                                        Github
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/heroku-logo.svg"
                                        className="column tool-icon"
                                        alt="Heroku logo"
                                    />
                                    <p className="column is-7">
                                        Heroku
                                    </p>
                                </div>
                                <div className="columns is-vertical-center">
                                    <img
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/aws-logo.svg"
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