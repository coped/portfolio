import { render as rtlRender } from "@testing-library/react";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("should render without crashing", () => {
    render();
  });
});

const render = () => rtlRender(<Projects />);
