import { screen, render } from "@testing-library/react";
import { TerminalText } from "./TerminalText";

// Mock bowser

describe("TerminalText", () => {
  const renderUI = () => render(<TerminalText />);

  it("should render", () => {
    renderUI();
  });

  it("should show user browser", () => {
    renderUI();

    expect(screen.getByText("guest@Foo Explorer")).toBeInTheDocument();
  });

  it("should show path", () => {
    renderUI();

    expect(screen.getByText("~/fooPath")).toBeInTheDocument();
  });
});
