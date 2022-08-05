import { render } from "@testing-library/react";
import { TerminalButton, Props } from "./TerminalButton";

describe("TerminalButton", () => {
  const defaultProps: Props = { type: "green" };

  const renderUI = (props: Partial<Props> = {}) =>
    render(<TerminalButton {...defaultProps} {...props} />);

  it("should render", () => {
    renderUI();
  });

  it("should be green", () => {
    const { container } = renderUI({ type: "green" });

    expect(container.firstChild).toHaveClass("green");
  });

  it("should be yellow", () => {
    const { container } = renderUI({ type: "yellow" });

    expect(container.firstChild).toHaveClass("yellow");
  });

  it("should be red", () => {
    const { container } = renderUI({ type: "red" });

    expect(container.firstChild).toHaveClass("red");
  });
});
