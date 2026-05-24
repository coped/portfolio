import { describe, it, expect, vi } from "vitest";
import { getBrowser } from "./utils";

vi.mock("bowser");

describe("utils", () => {
  describe("getBrowser", () => {
    it("should return browser name", () => {
      expect(getBrowser()).toEqual("Foo Browser");
    });
  });
});
