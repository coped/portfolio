import { useReducer } from "react";

/**
 * A simple boolean toggler
 * @param init Initial toggle value
 * @returns
 */
export const useToggler = (init: boolean) => {
  return useReducer((state) => !state, init);
};
