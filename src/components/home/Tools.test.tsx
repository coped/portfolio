import type { Tool } from "types/lib/content";
import { Tools } from "./Tools";
import { mockTool } from "utils/testUtils";
import { render as rtlRender, screen } from "@testing-library/react";

const getToolAlt = (tool: Tool): string => tool.name + " logo";

const mockTool1 = mockTool({ name: "tool1" });
const mockTool2 = mockTool({ name: "tool2" });
const mockTool3 = mockTool({ name: "tool3" });

jest.mock("lib/content", () => ({
  tools: {
    backend: [{ name: "tool1" }],
    frontend: [{ name: "tool2" }],
    miscellaneous: [{ name: "tool3" }],
  },
}));

describe("Tools", () => {
  it("should render without crashing", () => {
    render();
  });

  it("Should render each tool", () => {
    render();

    expect(
      screen.getByRole("img", { name: getToolAlt(mockTool1) })
    ).toBeInTheDocument();
    expect(screen.getByText(mockTool1.name)).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: getToolAlt(mockTool2) })
    ).toBeInTheDocument();
    expect(screen.getByText(mockTool2.name)).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: getToolAlt(mockTool3) })
    ).toBeInTheDocument();
    expect(screen.getByText(mockTool3.name)).toBeInTheDocument();
  });
});

const render = () => rtlRender(<Tools />);
