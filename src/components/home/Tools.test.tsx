import { Tools } from "./Tools";
import { mockTool } from "utils/testUtils";
import { make } from "utils/utils";
import type { Tool } from "types/lib/content";
import { render as rtlRender, screen } from "@testing-library/react";

const getToolAlt = (tool: Tool): string => tool.name + " logo";

describe("Tools", () => {
  it("should render without crashing", () => {
    render();
  });

  // TODO: Mock tool content module
  it.skip("Should render each tool", () => {
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

const render = () => rtlRender(<Tools />);
