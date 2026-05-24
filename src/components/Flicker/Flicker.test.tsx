import { describe, it, expect, afterEach, vi, beforeEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { Flicker } from "./Flicker";

describe("Flicker", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should render children", () => {
    render(<Flicker interval={1000}>Foobar</Flicker>);
    expect(screen.getByText("Foobar")).toBeDefined();
  });

  it("should flicker", () => {
    render(<Flicker interval={1000}>Foobar</Flicker>);
    expect(screen.getByText("Foobar").className).toContain(
      "flicker--transparent",
    );

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByText("Foobar").className).toContain("flicker--opaque");
  });
});
