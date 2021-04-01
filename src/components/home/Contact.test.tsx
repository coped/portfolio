import { render as rtlRender } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact", () => {
  it("should render without crashing", () => {
    render();
  });
});

const render = () => rtlRender(<Contact />);
