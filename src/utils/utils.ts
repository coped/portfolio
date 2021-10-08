import { v4 } from "uuid";
import type { Make } from "types/utils/utils";
import { RefObject } from "react";

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

export function scrollIntoView(
  identifier: string | RefObject<HTMLElement>
): void {
  let element;
  if (typeof identifier === "string") {
    element = document.querySelector(identifier);
  } else {
    element = identifier.current;
  }

  if (element) element.scrollIntoView({ behavior: "smooth" });
}

export function joinClasses(...args: string[]): string {
  return args.join(" ");
}

export function seconds(n: number): number {
  return n * 1000;
}

export function minutes(n: number): number {
  return seconds(n * 60);
}

export function hours(n: number): number {
  return minutes(n * 60);
}

export function titleize(s: string): string {
  const words = s.split(" ");
  const titleized = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return titleized.join("");
}

export function hasOwnProperty(obj: unknown, prop: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
