import { rest } from "msw";

export const handlers = [
  rest.post(
    "https://api.emailjs.com/api/v1.0/email/send-form",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(500), ctx.json("OK"));
    }
  ),
];
