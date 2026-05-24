"use client";
import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import { useToggler } from "@/hooks/useToggler/useToggler";
import "./Flicker.css";

export type Props = { interval: number } & PropsWithChildren;

export function Flicker({ children, interval }: Props) {
  const [flicker, toggleFlicker] = useToggler(true);

  useEffect(() => {
    const id = window.setInterval(toggleFlicker, interval);
    return () => window.clearInterval(id);
  }, [toggleFlicker, interval]);

  return (
    <span className={flicker ? "flicker-transparent" : "flicker-opaque"}>
      {children}
    </span>
  );
}
