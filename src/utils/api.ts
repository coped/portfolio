import { API_URLS } from "./constants";

interface RequestBody {
  name: string;
  email: string;
  message: string;
  token: string;
}
export const contact = (requestBody: RequestBody): Promise<Response> => {
  const request = () =>
    fetch(API_URLS.CONTACT.toString(), {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

  return handleRequest(request);
};

export const index = (): Promise<Response> => {
  const request = () => fetch(API_URLS.INDEX.toString());

  return handleRequest(request);
};

/**
 * General request handler
 */
const handleRequest = async (f: () => Promise<Response>): Promise<Response> => {
  try {
    return await f();
  } catch (e: unknown) {
    return Response.error();
  }
};
