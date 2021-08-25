import {
  FormEvent,
  ReactElement,
  useState,
} from "react";
import contactStyles from "./Contact.module.css";
import commonStyles from "common.module.css";
import emailjs, { init } from "emailjs-com";
import { scrollIntoView, joinClasses, seconds } from "utils/utils";
import { EMAIL_REGEX, URLS } from "utils/constants";

enum NotificationTypes {
  success = "success",
  warning = "warning",
  error = "error",
  none = "",
}
type Notification = { message: string; type: NotificationTypes };

export function Contact(): ReactElement {
  /**
   * State
   */
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [formNotification, setFormNotification] = useState<Notification>({
    message: "",
    type: NotificationTypes.none,
  });

  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");

  /**
   * Helpers
   */
  function resetForm(): void {
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
  }

  function sendMessage(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setFormLoading(true);

    new Promise((resolve) => {
      setTimeout(resolve, seconds(1));
    })
      .then(() => {
        setFormNotification({
          message: "Message sent.",
          type: NotificationTypes.success,
        });
        resetForm();
      })
      .catch(() => {
        setFormNotification({
          message: "Something went wrong. Please try again.",
          type: NotificationTypes.warning,
        });
      })
      .finally(() => {
        scrollIntoView("#contact");
        setFormLoading(false);
      });
  }

  function _sendMessage(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setFormLoading(true);

    const serviceId = process.env.REACT_APP_SERVICE_ID as string;
    const templateId = process.env.REACT_APP_TEMPLATE_ID as string;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    const body = { a: "a" };

    const promise = fetch(URLS.SEND_FORM, {
      method: "POST",
      body: JSON.stringify(body),
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    promise
      .then(() => {
        setFormNotification({
          message: "Message sent.",
          type: NotificationTypes.success,
        });
        resetForm();
      })
      .catch(() => {
        setFormNotification({
          message: "Something went wrong. Please try again.",
          type: NotificationTypes.warning,
        });
      })
      .finally(() => {
        scrollIntoView("#contact");
        setFormLoading(false);
      });
  }

  function showAsteriskIf(invalid: boolean): ReactElement {
    if (invalid) {
      return <span className={contactStyles.asterisk}>*</span>;
    } else {
      return <></>;
    }
  }

  function checkEmailValid(val: string): boolean {
    const match = val.match(EMAIL_REGEX);
    if (match) {
      return match.length > 0;
    } else {
      return false;
    }
  }

  function checkHasContent(val: string): boolean {
    return val.length > 0;
  }

  function formSubmittable(): boolean {
    return (
      checkHasContent(nameValue) &&
      checkEmailValid(emailValue) &&
      checkHasContent(messageValue)
    );
  }

  /**
   * UI
   */
  return (
    <div className="container">
      <div className={joinClasses("columns", commonStyles.center)}>
        <div className="column is-two-thirds">
          {formNotification.message && (
            <div
              className={joinClasses(
                commonStyles.paragraph,
                "has-text-centered"
              )}
            >
              <div
                className={joinClasses(
                  "notification",
                  `is-${formNotification.type}`,
                  "is-medium"
                )}
              >
                <p id="form-alert" role="alert">
                  {formNotification.message}
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
                Name {showAsteriskIf(!checkHasContent(nameValue))}
              </label>
              <div className="control">
                <input
                  id="contact-form-name"
                  name="name"
                  value={nameValue}
                  className="input"
                  type="text"
                  placeholder="John Doe"
                  onChange={(e) => setNameValue(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="contact-form-email">
                Email {showAsteriskIf(!checkEmailValid(emailValue))}
              </label>
              <div className="control">
                <input
                  id="contact-form-email"
                  name="email"
                  value={emailValue}
                  className="input"
                  type="email"
                  placeholder="example@email.com"
                  onChange={(e) => setEmailValue(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="contact-form-message">
                Message {showAsteriskIf(!checkHasContent(messageValue))}
              </label>
              <div className="control">
                <textarea
                  id="contact-form-message"
                  className="textarea"
                  value={messageValue}
                  placeholder="Hello!"
                  rows={7}
                  onChange={(e) => setMessageValue(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  type="submit"
                  className={joinClasses(
                    "button",
                    "is-link",
                    formLoading ? "is-loading" : ""
                  )}
                  disabled={!formSubmittable}
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
