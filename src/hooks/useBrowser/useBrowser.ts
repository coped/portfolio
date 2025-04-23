import { useEffect, useState } from "react";
import Bowser from "bowser";

/**
 * Gets the user's browser name
 */
export const useBrowser = () => {
  const [browser, setBrowser] = useState<string>("");

  useEffect(() => {
    const parser = Bowser.getParser(window.navigator.userAgent);
    setBrowser(parser.getBrowserName());
  }, []);

  return browser;
};
