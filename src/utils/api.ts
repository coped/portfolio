import { API_URLS } from "./constants";

type ErrorResponse = { ok: false };
type RequestResult = Promise<Response | ErrorResponse>;

export const contact = (
  name: string,
  email: string,
  message: string
): RequestResult => {
  const request = () =>
    fetch(API_URLS.CONTACT.toString(), {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

  return handleRequest(request);
};

export const index = (): RequestResult => {
  const request = () =>
    fetch(API_URLS.INDEX.toString(), {
      method: "GET",
    });

  return handleRequest(request);
};

const handleRequest = async (
  f: () => Promise<Response>
): Promise<Response | ErrorResponse> => {
  try {
    return await f();
  } catch (e) {
    return await new Promise((res) => {
      res({ ok: false });
    });
  }
};
