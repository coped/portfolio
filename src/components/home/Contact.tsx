import { FormEvent, ReactElement, useState } from "react";
import contactStyles from "./Contact.module.css";
import commonStyles from "common.module.css";
import { scrollIntoView, joinClasses } from "utils/utils";
import { EMAIL_REGEX } from "utils/constants";
import { contact, index } from "utils/api";

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

  const [nameValue, setNameValue] = useState<string>("a");
  const [emailValue, setEmailValue] = useState<string>("a@a.co");
  const [messageValue, setMessageValue] = useState<string>("a");

  /**
   * Helpers
   */
  function resetForm(): void {
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
  }

  async function sendMessage(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setFormLoading(true);

    const res = await contact(nameValue, emailValue, messageValue);
    if (res.ok) {
      notifySuccess();
      resetForm();
    } else {
      notifyError();
    }

    scrollIntoView("#contact");
    setFormLoading(false);
  }

  function notifyError(): void {
    setFormNotification({
      message: "Something went wrong. Please try again.",
      type: NotificationTypes.warning,
    });
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
            by email using the form below.
          </p>
          <form id="contact-form" onSubmit={sendMessage}>
            <div className="field">
              <label className="label" htmlFor="contact-form-name">
                Name {showAsteriskIf(!checkHasContent(nameValue))}
              </label>
              <div className="control">
                <input
                  id="contact-form-name"
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
                  disabled={!formSubmittable()}
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
