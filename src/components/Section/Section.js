import React from 'react';
import './Section.css'

function Section(props) {
    return (
        <section
            id={props.id}
            className="section"
        >
            <div className="container">
                <h2 className="is-size-2 has-text-weight-light center title">
                    {props.name}
                </h2>
                <div className="columns center">
                    <div className={"column" + ((props.wide) ? "" : " is-two-thirds")}>
                        <hr className="hr"></hr>
                    </div>
                </div>
                {props.component}
            </div>
        </section>
    )
}

export default Section;