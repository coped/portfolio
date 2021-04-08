import { render as rtlRender } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("should render without crashing", () => {
    render();
  });
});

const render = () => rtlRender(<Navbar />);
