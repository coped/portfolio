import { v4 } from "uuid";
import type { Make } from "types/utils/utils";

export const uuid = (): string => v4();

export function randomNumber(min: number = 0, max: number = 100): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

/**
 * make(3).fromCallback(randomNumber); // -> [42, 9, 83];
 */
export const make: Make = (amount = 1) => ({
  of: (item) => {
    const items = [];
    for (let i = 0; i < amount; i++) {
      items.push(item);
    }
    return items;
  },
  fromCallback: (cb) => {
    const items = [];
    for (let i = 0; i < amount; i++) {
      items.push(cb());
    }
    return items;
  },
});

export function scrollIntoView(querySelector: string): void {
  const element = document.querySelector(querySelector);
  element && element.scrollIntoView({ behavior: "smooth" });
}
