import type { ReactElement, ReactNode } from "react";
import { useEffect } from "react";
import { useToggler } from "@/hooks/useToggler/useToggler";
import "./Flicker.css";

export type Props = { children: ReactNode; interval: number };

export function Flicker({ children, interval }: Props): ReactElement {
  const [flicker, toggleFlicker] = useToggler(true);

  useEffect(() => {
    const id = window.setInterval(toggleFlicker, interval);
    return () => window.clearInterval(id);
  }, [toggleFlicker, interval]);

  return (
    <span className={flicker ? "flicker--transparent" : "flicker--opaque"}>
      {children}
    </span>
  );
}
