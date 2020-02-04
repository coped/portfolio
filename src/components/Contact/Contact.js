import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const sendMessage = e => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, e.target, userId)
        .then((result) => {
            console.log(result.text);
            document.querySelector('#form-success').hidden = false;
            document.querySelector('#form-alert').hidden = true;
        }, (error) => {
            console.log(error.text);
            document.querySelector('#form-success').hidden = true;
            document.querySelector('#form-alert').hidden = false;
        });
    }
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
                <div className="paragraph center">
                    <p
                        id="form-alert"
                        role="alert"
                        hidden
                    >
                        <span className="tag is-warning is-medium">
                            Something happened. Please try again.
                        </span>
                    </p>
                    <p
                        id="form-success"
                        role="alert"
                        hidden
                    >
                        <span className="tag is-success is-medium">
                            Message sent.
                        </span>
                    </p>
                </div>
                <div className="columns center">
                    <div className="column is-two-thirds">
                        <p className="paragraph">
                            Questions or concerns? I can be contacted by <a href="https://github.com/coped">Github</a>
                            , <a href="https://www.linkedin.com/in/dennis-cope">LinkedIn</a>, 
                            or by <a href="mailto:dennisaaroncope@gmail.com">email</a> at
                            <strong> dennisaaroncope@gmail.com</strong>. You can also user the form below to email me 
                            directly. I'll reply prompty.
                        </p>
                        { /* configure form in a later commit */ }
                        <form 
                            id="contact-form"
                            onSubmit={(e) => sendMessage(e)}
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

export default Contact;