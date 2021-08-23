import { ReactElement } from "react";
import { Box } from "components/ui/Box";
import { tools } from "lib/content";
import commonStyles from "common.module.css";
import type { Tool } from "types/lib/content";
import toolStyles from "./Tools.module.css";
import { joinClasses } from "utils/utils";

export function Tools(): ReactElement {
  function makeToolList(tools: Tool[]): ReactElement[] {
    return tools.map((tool) => (
      <div
        key={tool.id}
        className={joinClasses("columns", commonStyles.isVerticalCenter)}
      >
        <img
          src={tool.logo}
          className={joinClasses("column", toolStyles.toolIcon)}
          alt={tool.name + " logo"}
        />
        <p className="column is-7">{tool.name}</p>
      </div>
    ));
  }

  return (
    <div className="columns">
      <div className="column">
        <Box name="Back end">{makeToolList(tools.backend)}</Box>
      </div>
      <div className="column">
        <Box name="Front end">{makeToolList(tools.frontend)}</Box>
      </div>
      <div className="column">
        <Box name="Miscellaneous">{makeToolList(tools.miscellaneous)}</Box>
      </div>
    </div>
  );
}
