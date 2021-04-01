import { render as rtlRender } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render without crashing", () => {
    render();
  });
});

const render = () => rtlRender(<App />);
