import React from "react";
import "./Checkbox.css";

let maxCheckBoxId = 0;

export const Checkbox = props => {
    return (
        <div className="Checkbox">
            <input
                type="checkbox"
                checked={props.checked}
                onChange={() => props.handleCheck(props.index, "checked", !props.checked)}
                id={"checkbox" + maxCheckBoxId}
                hidden
            />
            <label className="Checkbox__label" htmlFor={"checkbox" + maxCheckBoxId++} />
        </div>
    );
};
