import React from "react";
import "./Checkbox.css";

let maxCheckBoxId = 0;

export const Checkbox = props => {
    return (
        <div className="Checkbox">
            <input type="checkbox" id={"checkbox" + maxCheckBoxId} hidden/>
            <label class="Checkbox__label" for={"checkbox" + maxCheckBoxId++}></label>
        </div>
    )
}
