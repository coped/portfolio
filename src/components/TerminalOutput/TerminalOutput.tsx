"use client";
import { usePathname } from "next/navigation";
import { Flicker } from "../Flicker/Flicker";
import { useBrowser } from "@/hooks/useBrowser/useBrowser";
import "./TerminalOutput.css";

export function TerminalOutput() {
  const pathname = usePathname();
  const browser = useBrowser();

  return (
    <p className="monospace">
      <span className="terminal-output-green">
        <span className="strong">guest@{browser}</span>
      </span>
      :<span className="terminal-output-purple">~{pathname}</span>$ ./cope.sh
      <Flicker interval={600}>_</Flicker>
    </p>
  );
}
