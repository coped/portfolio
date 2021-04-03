import { ReactElement } from "react";
import { Toolbox } from "components/home/Toolbox";
import { tools } from "lib/content";

export function Tools(): ReactElement {
  return (
    <div className="columns">
      <div className="column">
        <Toolbox name="Back end" tools={tools.backend} />
      </div>
      <div className="column">
        <Toolbox name="Front end" tools={tools.frontend} />
      </div>
      <div className="column">
        <Toolbox name="Miscellaneous" tools={tools.miscellaneous} />
      </div>
    </div>
  );
}
