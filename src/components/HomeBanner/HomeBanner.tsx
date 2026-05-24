import { Terminal } from "@/components/Terminal/Terminal";
import "./HomeBanner.css";

export function HomeBanner() {
  return (
    <header className="banner banner--home">
      <Terminal />
      <h1 className="heading heading--home">Dennis Cope</h1>
    </header>
  );
}
