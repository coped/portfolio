import React from 'react';
import './Tools.css';
import Toolbox from 'components/Toolbox/Toolbox';
import { tools } from 'lib/content';

function Tools() {
    return (
        <div className="columns">
            <div className="column">
                <Toolbox 
                    name="Back end"
                    tools={tools.backend}
                />
            </div>
            <div className="column">
                <Toolbox 
                    name="Front end"
                    tools={tools.frontend}
                />
            </div>
            <div className="column">
                <Toolbox 
                    name="Miscellaneous"
                    tools={tools.miscellaneous}
                />
            </div>
        </div>
    )
}

export default Tools;