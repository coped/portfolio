import type { ReactElement } from "react";
import { render, screen } from "@testing-library/react";
import { useBrowser } from "./useBrowser";

describe("useBrowser", () => {
  it("should return browser", () => {
    render(<UI />);

    expect(screen.getByText("Foo Browser")).toBeInTheDocument();
  });
});

function UI(): ReactElement {
  const browser = useBrowser();
  return <p>{browser}</p>;
}
