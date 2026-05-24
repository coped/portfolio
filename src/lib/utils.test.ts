import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  vi,
  type Mock,
} from "vitest";
import { defined, isClientSide } from "./utils";

describe("utils", () => {
  describe("defined", () => {
    describe("when given non-defined values", () => {
      const falsyTable = [[null], [undefined]] as const;

      it.each(falsyTable)("should throw", (value) => {
        expect(() => defined(value)).toThrow();
      });
    });

    describe("when given defined values", () => {
      const truthyTable = [
        [""],
        [true],
        [[]],
        [0],
        [{ foo: "bar" }],
        [false],
      ] as const;

      it.each(truthyTable)("should not throw", (value) => {
        expect(() => defined(value)).not.toThrow();
      });

      it.each(truthyTable)("should return provided value", (value) => {
        expect(defined(value)).toEqual(value);
      });
    });
  });

  describe("isClientSide", () => {
    let windowSpy: Mock<() => Window & typeof globalThis>;

    beforeEach(() => {
      windowSpy = vi.spyOn(window, "window", "get");
    });
    afterEach(() => {
      windowSpy.mockRestore();
    });

    describe("when client-side", () => {
      beforeEach(() => {
        windowSpy.mockImplementation(() => ({}) as Window & typeof globalThis);
      });

      it("should return true", () => {
        expect(isClientSide()).toEqual(true);
      });
    });

    describe("when not client-side", () => {
      beforeEach(() => {
        windowSpy.mockImplementation(
          () => undefined as unknown as Window & typeof globalThis,
        );
      });

      it("should return false", () => {
        expect(isClientSide()).toEqual(false);
      });
    });
  });
});
