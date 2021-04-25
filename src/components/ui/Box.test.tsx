import { render as rtlRender, screen } from "@testing-library/react";
import { Box } from "./Box";

describe("Box", () => {
  it("should render without crashing", () => {
    render();
  });

  it("should render name", () => {
    const name = "foobar";
    render({ name });
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("should render children", () => {
    const label = "Foobar label";
    const input = (
      <label>
        {label}
        <input type="text" />
      </label>
    );

    render({ children: input });

    expect(screen.getByRole("textbox", { name: label })).toBeInTheDocument();
  });
});

const render = ({ name = "foo", children = <></> } = {}) =>
  rtlRender(<Box name={name}>{children}</Box>);
