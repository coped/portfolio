import { render as rtlRender, screen } from "@testing-library/react";
import { IconButton } from "./IconButton";
import faker from "faker";
import userEvent from "@testing-library/user-event";

describe("IconButton", () => {
  it("should render without crashing", () => {
    render();
  });

  it("should render icon", () => {
    const iconUrl = faker.image.imageUrl();
    const altText = "Image alt";
    render({ icon: iconUrl, alt: altText });

    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", iconUrl);
    expect(icon).toHaveAttribute("alt", altText);
  });

  it("should have link if provided", () => {
    const linkUrl = faker.internet.url();
    render({ link: linkUrl });

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", linkUrl);
  });

  it("should not have link if not provided", () => {
    render();

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("should handle onClick", () => {
    const user = userEvent.setup();

    const spy = jest.fn();
    render({ onClick: spy });

    user.pointer({ keys: "[MouseLeft]", target: screen.getByRole("button") });

    expect(spy).toHaveBeenCalled();
  });

  it("should render children", () => {
    const childText = "Hello!";
    render({ children: <>{childText}</> });

    expect(screen.getByText(childText)).toBeInTheDocument();
  });
});

const render = ({
  icon = faker.image.imageUrl(),
  alt = "foo alt",
  link = "",
  onClick = jest.fn(),
  children = <>foobar</>,
} = {}) => {
  rtlRender(
    <IconButton icon={icon} alt={alt} link={link} onClick={onClick}>
      {children}
    </IconButton>
  );
};
