import ReactDOM from "react-dom";
import App from "./App";

// Use MSW responses in development
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(<App />, document.getElementById("root"));
