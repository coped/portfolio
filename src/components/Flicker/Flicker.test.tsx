import { render, screen, act } from "@testing-library/react";
import { ReactElement } from "react";
import { Flicker } from "./Flicker";

describe("Flicker", () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  const setup = (ui: ReactElement) => {
    jest.useFakeTimers();
    const utils = render(ui);
    return { ...utils };
  };

  it("should render children", () => {
    setup(<Flicker interval={1000}>Foobar</Flicker>);
    expect(screen.getByText("Foobar")).toBeInTheDocument();
  });

  it("should flicker", () => {
    setup(<Flicker interval={1000}>Foobar</Flicker>);
    expect(getOpacity(screen.getByText("Foobar"))).toEqual("0");

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(getOpacity(screen.getByText("Foobar"))).toEqual("");
  });
});

const getOpacity = (element: HTMLElement): string =>
  window.getComputedStyle(element).opacity;
