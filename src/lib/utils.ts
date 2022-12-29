/**
 * Ensures a provided item is a defined value. Otherwise an error is thrown.
 * @param item - Item whose existence we're checking
 * @returns Provided item if it exists.
 */
export const defined = <T>(item: T | null | undefined): T => {
  const throwError = () => {
    throw new Error(
      `Expected ${item} to be defined, but was not a defined value`
    );
  };
  return item ?? throwError();
};

/**
 * Returns true if code is client-side.
 * @returns
 */
export const isClientSide = (): boolean => typeof window !== "undefined";
