import { createRoot } from "react-dom/client"
import App from "./App";
import { ENV } from "utils/constants";

// Use MSW responses in development
if (process.env.NODE_ENV !== ENV.PRODUCTION) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("./mocks/browser");
  worker.start();
}

const container = document.getElementById("root")
const root = createRoot(container!);

root.render(<App />);
