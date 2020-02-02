import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <img
                    id="footer-image"
                    src="https://coped.s3-us-west-1.amazonaws.com/coped-logo.png"
                    alt="coped.dev logo"
                />
            </div>
        </footer>
    )
}

export default Footer;