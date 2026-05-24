import { usePathname } from "next/navigation";
import { Flicker } from "../Flicker/Flicker";
import "./TerminalOutput.css";
import { getBrowser } from "@/lib/utils";

export function TerminalOutput() {
  const pathname = usePathname();
  const browser = getBrowser();

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
