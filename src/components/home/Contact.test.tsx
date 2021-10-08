import { render as rtlRender, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "./Contact";

describe("Contact", () => {
  const nameField = () => screen.getByRole("textbox", { name: /name/i });
  const emailField = () => screen.getByRole("textbox", { name: /email/i });
  const messageField = () => screen.getByRole("textbox", { name: /message/i });
  const submitButton = () => screen.getByRole("button", { name: /submit/i });

  const fillForm = () => {
    userEvent.type(nameField(), "Name");
    userEvent.type(emailField(), "foo@email.com");
    userEvent.type(messageField(), "foo");
  };

  beforeEach(() => {
    window.grecaptcha = {
      ready: (fn) => fn(),
      execute: jest.fn(() => Promise.resolve("foo")),
      render: jest.fn(),
      reset: jest.fn(),
      getResponse: jest.fn(),
      enterprise: {
        render: jest.fn(),
        ready: jest.fn(),
        reset: jest.fn(),
        execute: jest.fn(),
        getResponse: jest.fn(),
      },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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
  });

  it("should not show asterisk on populated field", () => {
    render();

    userEvent.type(nameField(), "Something");

    expect(screen.getByText(/name/i).textContent).not.toContain("*");
  });

  it("should have disabled submit button when fields are empty", () => {
    render();

    expect(submitButton()).toBeDisabled();
  });

  it("should not have disabled submit button when fields are populated", () => {
    render();

    fillForm();

    expect(submitButton()).toBeEnabled();
  });

  it("should show loading spinner on form submission", async () => {
    render();

    fillForm();
    userEvent.click(submitButton());

    await waitFor(() => expect(submitButton()).toHaveClass("is-loading"));
    await waitFor(() => expect(submitButton()).not.toHaveClass("is-loading"));
  });

  it("should clear form on successful submission", async () => {
    render();

    fillForm();
    userEvent.click(submitButton());

    await waitFor(() => expect(nameField()).toHaveValue(""));
    await waitFor(() =>
      expect(screen.getByText(/name/i).textContent).toContain("*")
    );
  });
});

const render = () => rtlRender(<Contact />);
