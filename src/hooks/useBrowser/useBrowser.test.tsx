import { describe, it, expect, vi } from "vitest";
import type { ReactElement } from "react";
import { render, screen } from "@testing-library/react";
import { useBrowser } from "./useBrowser";

vi.mock("bowser");

describe("useBrowser", () => {
  it("should return browser", () => {
    render(<UI />);

    expect(screen.getByText("Foo Browser")).toBeDefined();
  });
});

function UI(): ReactElement {
  const browser = useBrowser();
  return <p>{browser}</p>;
}
