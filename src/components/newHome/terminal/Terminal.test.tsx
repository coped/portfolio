import { render } from "@testing-library/react";
import { Terminal } from "./Terminal";

describe("Terminal", () => {
  const renderUI = () => render(<Terminal />);

  it("should render", () => {
    renderUI();
  });
});
