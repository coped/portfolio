import type { ReactElement } from "react";
import { Terminal } from "../Terminal";
import "./HomeBanner.css";

export function HomeBanner(): ReactElement {
  return (
    <header className="banner banner--home">
      <Terminal />
      <h1 className="heading heading--home">Dennis Cope</h1>
    </header>
  );
}
