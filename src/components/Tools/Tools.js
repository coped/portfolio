import React from 'react';
import './Tools.css';
import Toolbox from 'components/Toolbox/Toolbox'
import Content from 'lib/content';

function Tools() {
    return (
        <div className="columns">
            <div className="column">
                <Toolbox 
                    name="Back end"
                    tools={Content.tools.backend}
                />
            </div>
            <div className="column">
                <Toolbox 
                    name="Front end"
                    tools={Content.tools.frontend}
                />
            </div>
            <div className="column">
                <Toolbox 
                    name="Miscellaneous"
                    tools={Content.tools.miscellaneous}
                />
            </div>
        </div>
    )
}

export default Tools;