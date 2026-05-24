import Bowser from "bowser";

/**
 * Returns the name of the user's browser
 */
export const getBrowser = () => {
  const parser = Bowser.getParser(window.navigator.userAgent);
  return parser.getBrowserName();
};
