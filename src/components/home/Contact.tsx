import { FormEvent, ReactElement } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import { scrollIntoView } from "utils/utils";
import {
  useContactReducer,
  notificationSuccess,
  notificationError,
  formSetLoading,
  formSetName,
  formSetEmail,
  formSetMessage,
  formReset,
} from "modules/home/Contact";

export function Contact(): ReactElement {
  const [state, dispatch] = useContactReducer();
  const loadingClass = state.form.isLoading ? "is-loading" : "";

  function sendMessage(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(formSetLoading(true));

    const serviceId = process.env.REACT_APP_SERVICE_ID as string;
    const templateId = process.env.REACT_APP_TEMPLATE_ID as string;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .sendForm(serviceId, templateId, e.currentTarget, userId)
      .then(() => {
        dispatch(notificationSuccess());
        dispatch(formReset());
      })
      .catch(() => dispatch(notificationError()))
      .finally(() => {
        scrollIntoView("#contact");
        dispatch(formSetLoading(false));
      });
  }

  function showRequired(value: string): ReactElement {
    if (value.length > 0) {
      return <></>;
    } else {
      return <span className={styles.asterisk}>*</span>;
    }
  }

  return (
    <div className="container">
      <div className="columns center">
        <div className="column is-two-thirds">
          {state.notification.message && (
            <div className="paragraph has-text-centered">
              <div
                className={`notification is-${state.notification.type} is-medium`}
              >
                <p id="form-alert" role="alert">
                  {state.notification.message}
                </p>
              </div>
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
          <form id="contact-form" onSubmit={sendMessage}>
            <div className="field">
              <label className="label" htmlFor="contact-form-name">
                Name {showRequired(state.form.name)}
              </label>
              <div className="control">
                <input
                  id="contact-form-name"
                  className="input"
                  type="text"
                  placeholder="John Doe"
                  value={state.form.name}
                  onChange={(e): void => dispatch(formSetName(e.target.value))}
                  required
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="contact-form-email">
                Email {showRequired(state.form.email)}
              </label>
              <div className="control">
                <input
                  id="contact-form-email"
                  className="input"
                  type="email"
                  placeholder="example@email.com"
                  value={state.form.email}
                  onChange={(e): void => dispatch(formSetEmail(e.target.value))}
                  required
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="contact-form-message">
                Message {showRequired(state.form.message)}
              </label>
              <div className="control">
                <textarea
                  id="contact-form-message"
                  className="textarea"
                  placeholder="Hello!"
                  rows={7}
                  value={state.form.message}
                  onChange={(e): void =>
                    dispatch(formSetMessage(e.target.value))
                  }
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
