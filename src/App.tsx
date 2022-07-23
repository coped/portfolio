import { ReactElement } from "react";
import "./App.css";
import { Home as LegacyHome } from "components/home/Home";
import { Home } from "components/newHome/Home";

export default function App(): ReactElement {
  return <Home />;
}
