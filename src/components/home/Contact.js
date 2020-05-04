import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: "",
      alertType: "",
      showAlert: false,
    };

    this.scrollIntoView = this.scrollIntoView.bind(this);
    this.toggleLoadingAnimation = this.toggleLoadingAnimation.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  scrollIntoView = () => {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  };

  toggleLoadingAnimation = () => {
    const submitButton = document.querySelector("#contact-submit");

    const classes = submitButton.classList;

    [...classes].includes("is-loading")
      ? classes.remove("is-loading")
      : classes.add("is-loading");
  };

  sendMessage = (e) => {
    e.preventDefault();

    this.toggleLoadingAnimation();

    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;

    emailjs
      .sendForm(serviceId, templateId, e.target, userId)
      .then(
        (result) => {
          console.log(result.text);
          this.setState({
            alert: "Message sent.",
            alertType: "success",
            showAlert: true,
          });
        },
        (error) => {
          console.log(error.text);
          this.setState({
            alert: "Something happened. Please try again.",
            alertType: "warning",
            showAlert: true,
          });
        }
      )
      .then(() => {
        this.toggleLoadingAnimation();
        this.scrollIntoView();
      });
  };

  render() {
    return (
      <div className="container">
        {this.state.showAlert && (
          <div className="paragraph center">
            <p id="form-alert" role="alert">
              <span className={`tag is-${this.state.alertType} is-medium`}>
                {this.state.alert}
              </span>
            </p>
          </div>
        )}
        <div className="columns center">
          <div className="column is-two-thirds">
            <p className="paragraph">
              Questions or concerns? I can be contacted by{" "}
              <a href="https://github.com/coped">Github</a>,{" "}
              <a href="https://www.linkedin.com/in/dennis-cope">LinkedIn</a>, or
              by <a href="mailto:dennisaaroncope@gmail.com">email</a> at
              <strong> dennisaaroncope@gmail.com</strong>. You can also use the
              form below to email me directly. I'll reply promptly.
            </p>
            <form id="contact-form" onSubmit={this.sendMessage}>
              <div className="field">
                <label className="label">Name *</label>
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
                <label className="label">Email *</label>
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
                <label className="label">Message *</label>
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
                    id="contact-submit"
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
    );
  }
}
