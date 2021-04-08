import { render as rtlRender } from "@testing-library/react";
import { About } from "./About";

describe("About", () => {
  it("should render without crashing", () => {
    render();
  });
});

const render = () => rtlRender(<About />);
