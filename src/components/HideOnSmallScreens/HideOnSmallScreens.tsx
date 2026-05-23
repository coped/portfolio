import { HTMLAttributes } from "react";
import { joinCSS } from "@/lib/utils";
import "./HideOnSmallScreen.css";

export const HideOnSmallScreens = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={joinCSS("hide-on-small-screens", props.className)}
    />
  );
};
