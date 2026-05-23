import type { HTMLAttributes } from "react";
import styles from "./Banner.module.css";
import { joinCSS } from "@/lib/utils";

export const Banner = (props: HTMLAttributes<HTMLElement>) => (
  <header {...props} className={joinCSS(styles.banner, props.className)} />
);
