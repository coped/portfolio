import React from 'react';
import './Toolbox.css'

function Toolbox(props) {
    return (
        <div className="notification">
            <h3 className="subtitle has-text-centered has-text-weight-bold">
                {props.name}
            </h3>
            <div className="has-text-left">
                {props.tools.map((tool, index) => 
                    <div 
                        key={index}
                        className="columns is-vertical-center">
                        <img
                            src={tool.logo}
                            className="column tool-icon"
                            alt={tool.name + " logo"}
                        />
                        <p className="column is-7">
                            {tool.name}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Toolbox;