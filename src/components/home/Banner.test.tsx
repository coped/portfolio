import { render as rtlRender } from "@testing-library/react";
import { Banner } from "./Banner";

describe("Banner", () => {
  it("should render without crashing", () => {
    render();
  });
});

const render = () => rtlRender(<Banner />);
