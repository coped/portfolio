import React from 'react';
import './Contact.css'

function Contact() {
    const submitForm = (e) => {
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
                        <hr className="hr"></hr>
                    </div>
                </div>
                <div className="paragraph center">
                    { /* Render a 'flash' for success and error messages */ }
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
                            method="POST">
                            <div className="field">
                                <label className="label">
                                    Name *
                                </label>
                                <div className="control">
                                    <input
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
                                        onClick={(e) => submitForm(e)}
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