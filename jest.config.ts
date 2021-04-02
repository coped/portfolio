import type { Config } from "@jest/types";

export const config: Config.InitialOptions = {
  verbose: true,
  setupFiles: ["<rootDir>/src/setupTests.ts"],
};
