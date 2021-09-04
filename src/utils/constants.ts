export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;

export enum ENV {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

const API_DOMAIN = "https://api.coped.dev";

const API_PATHS: Record<string, string> = {
  CONTACT: "contact",
  INDEX: "",
};

// Same thing as API_PATHS, but values are URL objects
export const API_URLS: Record<string, URL> = Object.fromEntries(
  Object.entries(API_PATHS).map(([k, v]) => [k, new URL(API_DOMAIN + v)])
);