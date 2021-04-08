import { render as rtlRender } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("should render without crashing", () => {
    render();
  });
});

const render = () => rtlRender(<Footer />);
