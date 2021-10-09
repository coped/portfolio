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
      const fiveItems = make<string>(5).of(() => "foo");
      expect(fiveItems.length).toEqual(5);

      const tenItems = make<number>(10).of(jest.fn(() => 0));
      expect(tenItems.length).toEqual(10);
    });

    it("should invoke callback", () => {
      const spy = jest.fn(() => "foo");
      const threeItems = make<string>(3).of(spy);

      expect(spy).toHaveBeenCalledTimes(3);
      expect(threeItems.every((item) => item === "foo")).toEqual(true);
    });

    it("should work with nonsense values", () => {
      expect(make<string>(0).of(() => "foo").length).toEqual(0);
      expect(make<string>(-1).of(() => "foo").length).toEqual(0);
    });
  });
});
