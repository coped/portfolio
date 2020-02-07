import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            info: "",
            infoType: "",
            showInfo: false,
        }

        this.scrollIntoView = this.scrollIntoView.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    scrollIntoView = () => {
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    }
    
    sendMessage = e => {
        e.preventDefault();

        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const userId = process.env.REACT_APP_EMAILJS_USER_ID;
        const serviceId = process.env.REACT_APP_SERVICE_ID;

        emailjs.sendForm(serviceId, templateId, e.target, userId)
        .then((result) => {
            console.log(result.text);
            this.setState({
                info: "Message sent.",
                infoType: "success",
                showInfo: true
            });
            this.scrollIntoView();
        }, (error) => {
            console.log(error.text);
            this.setState({
                info: "Something happened. Please try again.",
                infoType: "warning",
                showInfo: true
            });
            this.scrollIntoView();
        });
    }

    render() {
        return (
            <section
                id="contact"
                className="section"
            >
                <div className="container">
                    <h2 className="is-size-2 has-text-weight-light center title">
                        Contact
                    </h2>
                    <div className="columns center">
                        <div className="column is-two-thirds">
                            <hr className="hr" />
                        </div>
                    </div>
                    { this.state.showInfo &&
                        <div className="paragraph center">
                            <p
                                id="form-alert"
                                role="alert"
                            >
                                <span className={`tag is-${this.state.infoType} is-medium`}>
                                    {this.state.info}
                                </span>
                            </p>
                        </div>
                    }
                    <div className="columns center">
                        <div className="column is-two-thirds">
                            <p className="paragraph">
                                Questions or concerns? I can be contacted by <a href="https://github.com/coped">Github</a>
                                , <a href="https://www.linkedin.com/in/dennis-cope">LinkedIn</a>, 
                                or by <a href="mailto:dennisaaroncope@gmail.com">email</a> at
                                <strong> dennisaaroncope@gmail.com</strong>. You can also user the form below to email me 
                                directly. I'll reply prompty.
                            </p>
                            <form 
                                id="contact-form"
                                onSubmit={this.sendMessage}
                            >
                                <div className="field">
                                    <label className="label">
                                        Name *
                                    </label>
                                    <div className="control">
                                        <input
                                            name="name"
                                            className="input"
                                            type="text"
                                            placeholder="John Doe"
                                            required
                                        ></input>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">
                                        Email *
                                    </label>
                                    <div className="control">
                                        <input
                                            name="email"
                                            className="input"
                                            type="email"
                                            placeholder="example@email.com"
                                            required
                                        ></input>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">
                                        Message *
                                    </label>
                                    <div className="control">
                                        <textarea
                                            name="message"
                                            className="textarea"
                                            placeholder="Hello!"
                                            rows="7"
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                        <button
                                            type="submit"
                                            className="button is-link"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;