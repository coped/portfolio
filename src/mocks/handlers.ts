import { rest } from "msw";
import { API_URLS } from "utils/constants";
import { seconds } from "utils/utils";
import { hasOwnProperty } from "utils/utils";

const mockDelay = seconds(0.5);

export const handlers = [
  rest.get(API_URLS.INDEX.toString(), (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(mockDelay));
  }),
  rest.post(API_URLS.CONTACT.toString(), (req, res, ctx) => {
    if (!req.body) throw new Error("Required request body is missing");

    const fields = ["name", "email", "message", "token"];
    let hasFields = false;

    // Make sure req.body has required fields
    if (fields.every((field) => hasOwnProperty(req.body, field))) {
      hasFields = true;
    }

    if (hasFields) {
      return res(ctx.status(200), ctx.delay(mockDelay));
    } else {
      return res(ctx.status(400), ctx.delay(mockDelay));
    }
  }),
];
