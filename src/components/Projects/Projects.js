import React from 'react';
import './Projects.css'

function Projects() {
    return (
        <section
            id="projects"
            className="section"
        >
            <div className="container">
                <h2 className="is-size-2 has-text-weight-light center title">
                    Projects
                </h2>
                <div className="columns center">
                    <div className="column">
                        <hr className="hr"></hr>
                    </div>
                </div>
                <h3 className="subtitle is-size-3 has-text-weight-bold">
                    Private Events
                </h3>
                <div className="columns">
                    <div className="column">
                        <a href="https://private-events-top-coped.herokuapp.com/">
                            <img
                                src="https://coped.s3-us-west-1.amazonaws.com/project-screenshots/private-events-home-1000x503px.jpg"
                                alt="Private Events home page"
                            />
                        </a>
                    </div>
                    <div className="column">
                        <p className="paragraph">
                            Private Events is a web application similar to Eventbrite. Users can create, attend, and 
                            send invitations for events. The app was created using Rails 6, Bulma CSS, and PostgreSQL.
                        </p>
                        <p className="paragraph">
                            This application's database schema requires tables with <em>many-to-many</em> relationships, 
                            and uses <em>has-many-through</em> associations between Active Record models to represent these 
                            relationships. This project was a fun exploration of Rails's Active Record ORM framework, 
                            and provided a deeper look at the power and programming convenience Active Record can give 
                            back-end developers over bare-metal SQL.
                        </p>
                        <div>
                            <a href="https://private-events-top-coped.herokuapp.com/">
                                <button className="button is-primary paragraph">
                                    Visit website
                                </button>
                            </a>
                        </div>
                        <a href="https://github.com/coped/private-events">
                            <button className="button">
                                <span className="icon">
                                    <img 
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/github-logo.svg"
                                        alt="Github logo" 
                                    />
                                </span>
                                <span>View project on GitHub</span>
                            </button>
                        </a>
                    </div>
                </div>
                <h3 className="subtitle is-size-3 has-text-weight-bold">Trike World Limited</h3>
                <div className="columns">
                    <div className="column">
                        <a href="https://trikeworldlimited.herokuapp.com/">
                            <img
                                src="https://coped.s3-us-west-1.amazonaws.com/project-screenshots/trikeworldltd-screenshot-1000x505.jpg"
                                alt="Trike world limited home page"
                            />
                        </a>
                    </div>
                    <div className="column">
                        <p className="paragraph">
                            trikeworldltd.com (domain yet to transfer) is a fully responsive web 
                            application built for Trike World Ltd., my father’s V8 trike motorcycle 
                            business. The primary technologies involved in this project include 
                            Rails 6, the Bulma CSS framework, and PostgreSQL.
                        </p>
                        <p className="paragraph">
                            The website features a custom authentication system and a blogging system, 
                            allowing my father to sign in and post pictures / updates about his latest 
                            projects with ease. The source code is also covered with comprehensive unit 
                            and integration tests, thanks to Minitest.
                        </p>
                        <div>
                            <a href="https://trikeworldlimited.herokuapp.com/">
                                <button className="button is-primary paragraph">
                                    Visit website
                                </button>
                            </a>
                        </div>
                        <a href="https://github.com/coped/trike-world-limited">
                            <button className="button">
                                <span className="icon">
                                    <img 
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/github-logo.svg"
                                        alt="Github logo"
                                    />
                                </span>
                                <span>View project on GitHub</span>
                            </button>
                        </a>
                    </div>
                </div>
                <h3 className="subtitle is-size-3 has-text-weight-bold">Personal Portfolio</h3>
                <div className="columns">
                    <div className="column">
                        <a href="/">
                            <img
                                src="https://coped.s3-us-west-1.amazonaws.com/project-screenshots/coped-screenshot-1000x505.jpg"
                                alt="coped.dev home page"
                            />
                        </a>
                    </div>
                    <div className="column">
                        <p className="paragraph">
                            My portfolio page (currently coped.dev) is a website used to showcase my 
                            developer related projects. The site is fully responsive, and was created using 
                            React and Bulma CSS.
                        </p>
                        <p className="paragraph">
                            The contact form featured at the bottom of this page sends emails 
                            directly to my address using the SendGrid Web API, and uses 
                            Google’s reCAPTCHA v2 API to prevent spam messages.
                        </p>
                        <div>
                            <a href="/">
                                <button className="button is-primary paragraph">
                                    Visit website
                                </button>
                            </a>
                        </div>
                        <a href="https://github.com/coped/my-portfolio">
                            <button className="button">
                                <span className="icon">
                                    <img 
                                        src="https://coped.s3-us-west-1.amazonaws.com/icons/github-logo.svg"
                                        alt="Github logo"
                                    />
                                </span>
                                <span>View project on GitHub</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
