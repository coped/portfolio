import { render as rtlRender, screen } from "@testing-library/react";
import { Toolbox } from "./Toolbox";
import { mockTool } from "utils/testUtils";
import { make } from "utils/utils";
import type { Tool } from "types/lib/content";

const getToolAlt = (tool: Tool): string => tool.name + " logo";

describe("Toolbox", () => {
  it("should render without crashing", () => {
    render();
  });

  it("should render name", () => {
    const name = "foobar";
    render({ name });

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("Should render each tool", () => {
    const [tool1, tool2, tool3] = make<Tool>(3).fromCallback(mockTool);
    render({ tools: [tool1, tool2, tool3] });

    expect(
      screen.getByRole("img", { name: getToolAlt(tool1) })
    ).toBeInTheDocument();
    expect(screen.getByText(tool1.name)).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: getToolAlt(tool2) })
    ).toBeInTheDocument();
    expect(screen.getByText(tool2.name)).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: getToolAlt(tool3) })
    ).toBeInTheDocument();
    expect(screen.getByText(tool3.name)).toBeInTheDocument();
  });
});

const render = ({
  name = "foo",
  tools = make<Tool>(3).fromCallback(mockTool),
} = {}) => rtlRender(<Toolbox name={name} tools={tools} />);
