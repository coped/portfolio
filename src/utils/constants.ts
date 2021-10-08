export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;

export enum ENV {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

export const API_DOMAIN = "https://api.coped.dev";
export const DEV_API_DOMAIN = "http://localhost:8000";

const API_PATHS = {
  CONTACT: "contact/",
  INDEX: "",
};

export const API_URLS = mapPathToUrl(DEV_API_DOMAIN);

export const DEV_API_URLS = mapPathToUrl(DEV_API_DOMAIN);

function mapPathToUrl(domain: string): Record<string, URL> {
  return Object.fromEntries(
    Object.entries(API_PATHS).map(([k, v]) => [k, new URL(v, domain)])
  );
}
