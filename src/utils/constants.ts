export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;

export enum ENV {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

export const BASE_API_URL: URL = new URL(
  process.env.REACT_APP_API_URL || "http://localhost:8000"
);

export const BASE_FRONTEND_URL: URL = new URL(
  process.env.NODE_ENV === ENV.PRODUCTION
    ? "https://coped.dev"
    : "http://localhost:3000"
);

export const PATHS: Record<string, string> = {
  CONTACT: "contact",
  INDEX: "",
};

// Same thing as PATHS, but values are URL objects
export const URLS: Record<string, URL> = Object.fromEntries(
  Object.entries(PATHS).map(([k, v]) => [k, new URL(BASE_API_URL + v)])
);
