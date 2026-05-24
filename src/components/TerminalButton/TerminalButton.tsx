import { joinCSS } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import "./TerminalButton.css";

type Props = {
  color: "red" | "yellow" | "green";
} & HTMLAttributes<HTMLDivElement>;

export const TerminalButton = (props: Props) => {
  return (
    <div
      {...props}
      className={joinCSS(
        "terminal-button",
        `terminal-button--${props.color}`,
        props.className,
      )}
    />
  );
};
