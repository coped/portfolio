import type { HTMLAttributes } from "react";
import "./VerticalDivider.css";
import { joinCSS } from "@/lib/utils";

export const VerticalDivider = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={joinCSS("vertical-divider", props.className)} />
  );
};
