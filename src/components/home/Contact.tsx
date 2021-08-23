import { FormEvent, ReactElement, useState, useRef, ChangeEvent } from "react";
import contactStyles from "./Contact.module.css";
import commonStyles from "common.module.css";
import emailjs from "emailjs-com";
import { scrollIntoView, joinClasses, seconds } from "utils/utils";
import { EMAIL_REGEX, ENVIRONMENTS } from "utils/constants";

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
  const [nameValid, setNameValid] = useState<boolean>(false);
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [messageValid, setMessageValid] = useState<boolean>(false);

  /**
   * Refs
   */
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  /**
   * Helpers
   */
  function checkValid(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const name = nameInput.current;
    const email = emailInput.current;
    const message = messageInput.current;

    if (!name || !email || !message) throw new Error("Contact element missing");

    switch (e.target) {
      case name: {
        name.value.length > 0 ? setNameValid(true) : setNameValid(false);
        return;
      }
      case email: {
        const match = email.value.match(EMAIL_REGEX);
        if (match) {
          match.length > 0 ? setEmailValid(true) : setEmailValid(false);
        } else {
          setEmailValid(false);
        }
        return;
      }
      case message: {
        message.value.length > 0
          ? setMessageValid(true)
          : setMessageValid(false);
        return;
      }
      default: {
        throw new Error("Event target doesn't match contact element");
      }
    }
  }

  const loadingClass = formLoading ? "is-loading" : "";

  function resetForm(): void {
    const name = nameInput.current;
    const email = emailInput.current;
    const message = messageInput.current;

    if (name) name.value = "";
    if (email) email.value = "";
    if (message) message.value = "";

    setNameValid(false);
    setEmailValid(false);
    setMessageValid(false);
  }

  function sendMessage(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setFormLoading(true);

    const serviceId = process.env.REACT_APP_SERVICE_ID as string;
    const templateId = process.env.REACT_APP_TEMPLATE_ID as string;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    if (process.env.NODE_ENV === ENVIRONMENTS.PRODUCTION) {
      emailjs
        .sendForm(serviceId, templateId, e.currentTarget, userId)
        .then(() => {
          notifySuccess();
          resetForm();
        })
        .catch(() =>
          setFormNotification({
            message: "Something went wrong. Please try again.",
            type: NotificationTypes.warning,
          })
        )
        .finally(() => {
          scrollIntoView("#contact");
          setFormLoading(false);
        });
    } else {
      new Promise((resolve) => {
        setTimeout(resolve, seconds(1));
      })
        .then(() => {
          notifySuccess();
          resetForm();
        })
        .finally(() => {
          scrollIntoView("#contact");
          setFormLoading(false);
        });
    }
  }

  function notifySuccess(): void {
    setFormNotification({
      message: "Message sent.",
      type: NotificationTypes.success,
    });
  }

  function showAsteriskIf(invalid: boolean): ReactElement {
    if (invalid) {
      return <span className={contactStyles.asterisk}>*</span>;
    } else {
      return <></>;
    }
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
                Name {showAsteriskIf(!nameValid)}
              </label>
              <div className="control">
                <input
                  id="contact-form-name"
                  name="name"
                  ref={nameInput}
                  className="input"
                  type="text"
                  placeholder="John Doe"
                  onChange={checkValid}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="contact-form-email">
                Email {showAsteriskIf(!emailValid)}
              </label>
              <div className="control">
                <input
                  id="contact-form-email"
                  name="email"
                  ref={emailInput}
                  className="input"
                  type="email"
                  placeholder="example@email.com"
                  onChange={checkValid}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="contact-form-message">
                Message {showAsteriskIf(!messageValid)}
              </label>
              <div className="control">
                <textarea
                  id="contact-form-message"
                  name="message"
                  ref={messageInput}
                  className="textarea"
                  placeholder="Hello!"
                  rows={7}
                  onChange={checkValid}
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  type="submit"
                  className={joinClasses("button", "is-link", loadingClass)}
                  disabled={!nameValid || !emailValid || !messageValid}
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
