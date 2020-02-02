import React from 'react';
import './Navbar.css';

function Navbar() {
    const expandMobileMenu = () => {
        document.querySelector(".navbar-burger").classList.toggle("is-active");
        document.querySelector(".navbar-menu").classList.toggle("is-active");
    }
    return (
        <nav 
            id="navbar"
            className="navbar is-light"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
                <a 
                    href="/"
                    className="navbar-item"
                >
                    <img
                        src="https://coped.s3-us-west-1.amazonaws.com/coped-logo.png"
                        className="logo"
                        alt="coped.dev logo"
                    />
                </a>

                <a 
                    role="button"
                    className="navbar-burger burger"
                    onClick={() => expandMobileMenu()}
                    aria-label="menu" aria-expanded="false"
                    data-target="navbar-options"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div 
                id="navbar-options"
                className="navbar-menu is-size-5"
            >
                <div className="navbar-start">
                    <a
                        href="/"
                        className="navbar-item is-tab"
                    >
                        Home
                    </a>
                    { /* No blog yet. I'll figure it out later
                    <a
                        href="/blog"
                        className="navbar-item is-tab"
                    >
                        Blog
                    </a>
                    */ }
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

    )
}

export default Navbar