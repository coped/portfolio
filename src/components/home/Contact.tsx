import { FormEvent, ReactElement } from "react";
import contactStyles from "./Contact.module.css";
import commonStyles from "common.module.css";
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
import { EMAIL_REGEX } from "utils/constants";

export function Contact(): ReactElement {
  const [form, dispatch] = useContactReducer();
  const loadingClass = form.isLoading ? "is-loading" : "";

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

  function showRequired(condition: boolean): ReactElement {
    if (condition) {
      return <></>;
    } else {
      return <span className={contactStyles.asterisk}>*</span>;
    }
  }
  
  function isValidEmail(email: string): boolean {
    const match = email.match(EMAIL_REGEX);
    console.log(match);
    if (match) {
      return match.length > 0;
    } else {
      return false;
    }
  }

  return (
    <div className="container">
      <div className={`columns ${commonStyles.center}`}>
        <div className="column is-two-thirds">
          {form.notification.message && (
            <div className={`${commonStyles.paragraph} has-text-centered`}>
              <div
                className={`notification is-${form.notification.type} is-medium`}
              >
                <p id="form-alert" role="alert">
                  {form.notification.message}
                </p>
              </div>
            </div>
          )}
          <p className={commonStyles.paragraph}>
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
                Name {showRequired(form.form.name.length > 0)}
              </label>
              <div className="control">
                <input
                  id="contact-form-name"
                  name="name"
                  className="input"
                  type="text"
                  placeholder="John Doe"
                  value={form.form.name}
                  onChange={(e): void => dispatch(formSetName(e.target.value))}
                  required
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="contact-form-email">
                Email {showRequired(isValidEmail(form.form.email))}
              </label>
              <div className="control">
                <input
                  id="contact-form-email"
                  name="email"
                  className="input"
                  type="email"
                  placeholder="example@email.com"
                  value={form.form.email}
                  onChange={(e): void => dispatch(formSetEmail(e.target.value))}
                  required
                ></input>
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="contact-form-message">
                Message {showRequired(form.form.message.length > 0)}
              </label>
              <div className="control">
                <textarea
                  id="contact-form-message"
                  name="message"
                  className="textarea"
                  placeholder="Hello!"
                  rows={7}
                  value={form.form.message}
                  onChange={(e): void =>
                    dispatch(formSetMessage(e.target.value))
                  }
                  required
                ></textarea>
              </div>
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
