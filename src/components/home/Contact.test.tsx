import { render as rtlRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("should render without crashing", () => {
    render();
  });

  it("should have interactive name input field", () => {
    render();
    const value = "John Doe";
    const input = screen.getByRole("textbox", { name: /name/i });

    userEvent.type(input, value);

    expect(input).toHaveValue(value);
  });

  it("should have interactive email input field", () => {
    render();
    const value = "john@doe.com";
    const input = screen.getByRole("textbox", { name: /email/i });

    userEvent.type(input, value);

    expect(input).toHaveValue(value);
  });

  it("should have interactive message textarea field", () => {
    render();
    const value = "Hello world!";
    const input = screen.getByRole("textbox", { name: /message/i });

    userEvent.type(input, value);

    expect(input).toHaveValue(value);
  });

  it("should show asterisk only on empty field", () => {
    render();
    expect(screen.getByText(/name/i).textContent).toContain("*");

    userEvent.type(screen.getByRole("textbox", { name: /name/i }), "Something");

    expect(screen.getByText(/name/i).textContent).not.toContain("*");
  });

  it("should show loading spinner on form submission", () => {
    render();
    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(button).toHaveClass("is-loading");
  });
});

const render = () => rtlRender(<Contact />);
