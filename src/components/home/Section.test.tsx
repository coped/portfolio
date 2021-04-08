import { render as rtlRender, screen } from "@testing-library/react";
import { Section } from "./Section";

describe("Section", () => {
  it("should render without crashing", () => {
    render();
  });

  it("should render name", () => {
    const name = "My Section";
    render({ name });

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("should render children", () => {
    const childText = "Hello!";
    render({ children: <p>{childText}</p> });

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it("should render wide", () => {
    render({ wide: true });

    expect(screen.getByTestId("wide")).not.toHaveClass("is-two-thirds");
  });

  it("should not render wide", () => {
    render({ wide: false });

    expect(screen.getByTestId("wide")).toHaveClass("is-two-thirds");
  });
});

const render = ({
  id = "foo",
  name = "bar",
  wide = true,
  children = <div></div>,
} = {}) =>
  rtlRender(
    <Section id={id} name={name} wide={wide}>
      {children}
    </Section>
  );
