import type { ReactElement } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useToggler } from "./useToggler";

describe("useToggler", () => {
  const setup = (ui: ReactElement) => {
    const user = userEvent.setup();
    const utils = render(ui);
    const clickButton = () => user.click(screen.getByRole("button"));
    return { ...utils, clickButton };
  };

  const setupAsTrue = () => setup(<UI init />);
  const setupAsFalse = () => setup(<UI init={false} />);

  it.each([
    [setupAsTrue, "true"],
    [setupAsFalse, "false"],
  ])("should have init value", (setup, expected) => {
    setup();
    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it("should toggle", async () => {
    const { clickButton } = setupAsTrue();
    expect(screen.getByText("true")).toBeInTheDocument();

    await clickButton();

    expect(screen.getByText("false")).toBeInTheDocument();
  });
});

type Props = { init: boolean };
function UI({ init }: Props): ReactElement {
  const [value, setValue] = useToggler(init);

  return <button onClick={setValue}>{JSON.stringify(value)}</button>;
}
