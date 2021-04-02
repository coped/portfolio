import { ChangeEvent, Component, FormEvent, ReactElement } from "react";
import emailjs from "emailjs-com";

type HandleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

type ContactProps = Record<string, never>;

interface ContactState {
  notification: { type: string; message: string };
  isLoading: boolean;
  name: string;
  email: string;
  message: string;
}

export default class Contact extends Component<ContactProps, ContactState> {
  state: ContactState = {
    notification: {
      type: "",
      message: "",
    },
    isLoading: false,
    name: "",
    email: "",
    message: "",
  };

  constructor(props: ContactProps) {
    super(props);
  }

  handleChange: () => string = () => {
    return "placeholder";
  };

  // handleChange: HandleChange = (e) => {
  //   const target = e.target;
  //   this.setState({
  //     [target.name]: target.value,
  //   });
  // };

  scrollIntoView = (): void => {
    const element = document.querySelector("#contact");
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  sendMessage = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.setState({ isLoading: true });

    const serviceId = process.env.REACT_APP_SERVICE_ID as string;
    const templateId = process.env.REACT_APP_TEMPLATE_ID as string;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .sendForm(serviceId, templateId, e.currentTarget, userId)
      .then((result) => {
        console.log(result.text);
        this.setState({
          notification: {
            type: "success",
            message: "Message sent.",
          },
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          notification: {
            type: "warning",
            message: "Something went wrong. Please try again.",
          },
        });
      })
      .finally(() => {
        this.scrollIntoView();
        this.setState({ isLoading: false });
      });
  };

  render(): ReactElement {
    const { isLoading, notification, name, email, message } = this.state;
    const loadingClass = isLoading ? "is-loading" : "";
    return (
      <div className="container">
        <div className="columns center">
          <div className="column is-two-thirds">
            {this.state.notification && (
              <div className="paragraph has-text-centered">
                <p id="form-alert" role="alert">
                  <div
                    className={`notification is-${notification.type} is-medium`}
                  >
                    {notification.message}
                  </div>
                </p>
              </div>
            )}
            <p className="paragraph">
              Questions or concerns? I can be contacted by{" "}
              <a href="https://github.com/coped">Github</a>,{" "}
              <a href="https://www.linkedin.com/in/dennis-cope">LinkedIn</a>, or
              by <a href="mailto:dennisaaroncope@gmail.com">email</a> at
              <strong> dennisaaroncope@gmail.com</strong>. You can also use the
              form below to email me directly. I&apos;ll reply promptly.
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
                    value={name}
                    onChange={this.handleChange}
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
                    value={email}
                    onChange={this.handleChange}
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
                    rows={7}
                    value={message}
                    onChange={this.handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="field">
                <div
                  className="g-recaptcha"
                  data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                ></div>
              </div>

              <div className="field">
                <div className="control">
                  <button
                    id="contact-submit"
                    type="submit"
                    className={"button is-link " + loadingClass}
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
