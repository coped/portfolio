import React from 'react';
import './Project';
import githubLogo from 'assets/images/icons/github-logo.svg'

function Project(props) {
    return (
        <div className="container paragraph">
            <h3 className="subtitle is-size-3 has-text-weight-bold">
                {props.name}
            </h3>
            <div className="columns">
                <div className="column">
                    <a href={props.websiteLink}>
                        <img
                            src={props.image}
                            alt={props.name + " logo"}
                        />
                    </a>
                </div>
                <div className="column">
                    {props.paragraphs.map((paragraph, index) => 
                        <p 
                            key={index}
                            className="paragraph">
                            {paragraph}
                        </p>
                    )}
                    <div>
                        <a href={props.websiteLink}>
                            <button className="button is-primary paragraph">
                                Visit website
                            </button>
                        </a>
                    </div>
                    <a href={props.githubLink}>
                        <button className="button">
                            <span className="icon">
                                <img 
                                    src={githubLogo}
                                    alt="Github logo" 
                                />
                            </span>
                            <span>View project on GitHub</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;