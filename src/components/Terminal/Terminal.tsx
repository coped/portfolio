import { TerminalOutput } from "@/components/TerminalOutput/TerminalOutput";
import "./Terminal.css";

export function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal__buttons">
        <div className="terminal__button terminal__button--red" />
        <div className="terminal__button terminal__button--yellow" />
        <div className="terminal__button terminal__button--green" />
      </div>
      <TerminalOutput />
    </div>
  );
}
