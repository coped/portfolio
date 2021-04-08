import { render as rtlRender, screen } from "@testing-library/react";
import { Project } from "./Project";
import { mockProject } from "utils/testUtils";

describe("Project", () => {
  it("should render without crashing", () => {
    render();
  });

  it("should render project name", () => {
    const projectName = "foobar";
    render({ project: mockProject({ name: projectName }) });

    expect(screen.getByText(projectName)).toBeInTheDocument();
  });

  it("should render paragraphs", () => {
    const paragraphs = ["foo", "bar"];
    render({ project: mockProject({ paragraphs }) });

    expect(screen.getByText(paragraphs[0])).toBeInTheDocument();
    expect(screen.getByText(paragraphs[1])).toBeInTheDocument();
  });
});

const render = ({ key = "1", project = mockProject() } = {}) =>
  rtlRender(<Project key={key} project={project} />);
