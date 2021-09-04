import { render as rtlRender, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "./Contact";

describe("Contact", () => {
  const nameField = () => screen.getByRole("textbox", { name: /name/i });
  const emailField = () => screen.getByRole("textbox", { name: /email/i });
  const messageField = () => screen.getByRole("textbox", { name: /message/i });
  const submitButton = () => screen.getByRole("button", { name: /submit/i });

  it("should render without crashing", () => {
    render();
  });

  it("should have interactive name input field", () => {
    render();
    const value = "John Doe";

    userEvent.type(nameField(), value);

    expect(nameField()).toHaveValue(value);
  });

  it("should have interactive email input field", () => {
    render();
    const value = "john@doe.com";

    userEvent.type(emailField(), value);

    expect(emailField()).toHaveValue(value);
  });

  it("should have interactive message textarea field", () => {
    render();
    const value = "Hello world!";

    userEvent.type(messageField(), value);

    expect(messageField()).toHaveValue(value);
  });

  it("should show asterisk only on empty field", () => {
    render();
    expect(screen.getByText(/name/i).textContent).toContain("*");

    userEvent.type(nameField(), "Something");

    expect(screen.getByText(/name/i).textContent).not.toContain("*");
  });

  it.skip("should show loading spinner on form submission", async () => {
    render();

    userEvent.click(submitButton());

    expect(submitButton()).toHaveClass("is-loading");
    await waitFor(() => expect(submitButton()).not.toHaveClass("is-loading"));
  });

  it.skip("should clear form on successful submission", async () => {
    render();

    userEvent.type(nameField(), "foobar");
    userEvent.type(emailField(), "foo@bar.com");
    userEvent.type(messageField(), "message");
    userEvent.click(submitButton());

    await waitFor(() => expect(nameField()).toHaveValue(""));
  });

  it.skip("should show asterisks on fields after form is cleared", () => {});
});

const render = () => rtlRender(<Contact />);
