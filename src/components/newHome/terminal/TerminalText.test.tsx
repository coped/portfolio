import { screen, render, act } from "@testing-library/react";
import { TerminalText } from "./TerminalText";

// Setup mocks
jest.mock("bowser", () => ({
  getParser: () => ({
    getBrowserName: () => "Foo Explorer",
  }),
}));

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
    const location = window.location;
    const mockWindow = jest.spyOn(window, "location", "get");

    mockWindow.mockImplementation(() => ({
      ...location,
      pathname: "/fooPath",
    }));

    renderUI();

    expect(screen.getByText("~/fooPath")).toBeInTheDocument();

    mockWindow.mockReset();
    mockWindow.mockRestore();
  });

  it("should flicker cursor", () => {
    jest.useFakeTimers();

    act(() => {
      renderUI();
    });

    expect(screen.getByText("_")).toHaveClass("transparent");

    act(() => {
      jest.advanceTimersByTime(600);
    });

    expect(screen.getByText("_")).not.toHaveClass("transparent");

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});
