import { joinCSS } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import "./Button.css";

type Props = {
  color: "red" | "yellow" | "green";
} & HTMLAttributes<HTMLDivElement>;

export const Button = (props: Props) => {
  return (
    <div
      {...props}
      className={joinCSS("button", `button--${props.color}`, props.className)}
    />
  );
};
