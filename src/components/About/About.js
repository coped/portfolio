import React from 'react';
import './About.css';

function About() {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">
                <h2 className="is-size-2 has-text-weight-light center title">
                    About Me
                </h2>
                <div className="columns center">
                    <div className="column is-two-thirds">
                        <hr className="hr" />
                    </div>
                </div>
                <div className="columns center">
                    <div className="column is-8">
                        <div className="columns">
                            <div className="column center is-5">
                                <figure className="image is-256x256">
                                    <img
                                        src="https://coped.s3-us-west-1.amazonaws.com/me-256x256.jpg"
                                        className="is-rounded"
                                        alt="Dennis Cope"
                                    />
                                </figure>
                            </div>
                            <div className="column is-7">
                                <p className="paragraph">
                                    I'm a self-taught developer, and I like making applications of different varieties.
                                    I like to use Rails and React when it comes to building web apps, and I've recently 
                                    started to tinker with Android development using Kotlin.
                                </p>
                                <p className="paragraph">
                                    There's seldom a feeling like learning something new, and using that knowledge 
                                    to make something work. I enjoy what I do because I get that feeling almost 
                                    every day, in one way or another.
                                </p>
                                <p className="paragraph">
                                    If I've got free time to spare, I'll probably be weight lifting, 
                                    slammin' keys on my piano,
                                    playing Super Smash Bros, or taking my Hayabusa 
                                    up into the mountains for a joyride.
                                </p>
                                <p className="paragraph">
                                    Here are some books and courses I'm currently learning from:
                                </p>
                                <p>
                                    <a href="https://www.theodinproject.com/">
                                        The Odin Project
                                    </a>
                                </p>
                                <p>
                                    <a href="https://roadtoreact.com/">
                                        The Road to learn React
                                    </a>
                                </p>
                                <p>
                                    <a href="https://books.google.com/books/about/The_Rails_5_Way.html?id=YGQ-DwAAQBAJ&source=kp_book_description">
                                        The Rails 5 Way - Obie Fernandez
                                    </a>
                                </p>
                                <p>
                                    <a href="https://github.com/getify/You-Dont-Know-JS">
                                        You Don't Know JS - Kyle Simpson
                                    </a>
                                </p>
                                <p>
                                    <a href="https://books.google.com/books/about/Programming_in_Haskell.html?id=75C5DAAAQBAJ&source=kp_book_description">
                                        Programming in Haskell - Graham Hutton
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;