import { randomNumber, make } from "utils/utils";

describe("utils", () => {
  describe("randomNumber", () => {
    it("should give a number", () => {
      expect(typeof randomNumber()).toEqual("number");
    });

    it.each([
      [0, 1],
      [5, 8],
      [20, 20],
      [90, 100],
      [0, 1000],
      [10000, 90000],
    ])("should give a number within range", (min, max) => {
      const number = randomNumber(min, max);
      expect(number).toBeGreaterThanOrEqual(min);
      expect(number).toBeLessThanOrEqual(max);
    });
  });

  describe("make", () => {
    it("should make correct number of items", () => {
      const fiveItems = make(5).of<string>(() => "foo");
      expect(fiveItems.length).toEqual(5);

      const tenItems = make(10).of<number>(jest.fn(() => 0));
      expect(tenItems.length).toEqual(10);
    });

    it("should invoke callback", () => {
      const spy = jest.fn(() => "foo");
      const threeItems = make(3).of<string>(spy);

      expect(spy).toHaveBeenCalledTimes(3);
      expect(threeItems.every((item) => item === "foo")).toEqual(true);
    });

    it("should work with nonsense values", () => {
      expect(make(0).of<string>(() => "foo").length).toEqual(0);
      expect(make(-1).of<string>(() => "foo").length).toEqual(0);
    });
  });
});
