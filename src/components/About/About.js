import React from 'react';
import './About.css';
import portraitOfMe from 'assets/images/me-256x256.jpg'
import Content from 'lib/content'

function About() {
    return (
        <div className="columns center">
            <div className="column is-8">
                <div className="columns">
                    <div className="column center is-5">
                        <figure className="image is-256x256">
                            <img
                                src={portraitOfMe}
                                className="is-rounded"
                                alt="Dennis Cope"
                            />
                        </figure>
                    </div>
                    <div className="column is-7">
                        {Content.aboutMe.map((paragraph, index) =>
                            <p
                                key={index}
                                className="paragraph">
                                {paragraph}
                            </p>
                        )}
                        <p className="paragraph">
                            Here are some books and courses I'm currently learning from:
                        </p>
                        {Content.booksCourses.map((item, index) =>
                            <p key={index} >
                                <a href={item.link}>
                                    {item.name}
                                </a>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;