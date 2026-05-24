import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  // This is needed to keep vitest from rendering UI from parallel tests in the same DOM instance
  cleanup();
});
