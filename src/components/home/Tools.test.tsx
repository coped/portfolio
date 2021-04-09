import { Tools } from "./Tools";
import { render as rtlRender } from "@testing-library/react";

describe("Tools", () => {
  it("should render without crashing", () => {
    render();
  });
});

const render = () => rtlRender(<Tools />);
