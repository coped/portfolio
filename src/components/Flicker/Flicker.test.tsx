import { describe, it, expect, afterEach, vitest, beforeEach } from "vitest";
import { render, screen, act, cleanup } from "@testing-library/react";
import { Flicker } from "./Flicker";

describe("Flicker", () => {
  beforeEach(() => {
    vitest.useFakeTimers();
  });

  afterEach(() => {
    vitest.useRealTimers();
    cleanup();
  });

  it("should render children", () => {
    render(<Flicker interval={1000}>Foobar</Flicker>);
    expect(screen.getByText("Foobar")).toBeDefined();
  });

  it("should flicker", () => {
    render(<Flicker interval={1000}>Foobar</Flicker>);
    expect(screen.getByText("Foobar").className).toContain(
      "flicker__transparent",
    );

    act(() => {
      vitest.advanceTimersByTime(1000);
    });

    expect(screen.getByText("Foobar").className).toContain("flicker__opaque");
  });
});

const getOpacity = (element: HTMLElement): string =>
  window.getComputedStyle(element).opacity;
