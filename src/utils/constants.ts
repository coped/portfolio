export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;

export enum ENVIRONMENTS {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}
export const BASE_API_URL = "http://localhost:8000";

export const URLS = {
  SEND_FORM: BASE_API_URL + "/send-form",
};
