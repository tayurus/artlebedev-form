import React from "react";
import "./Select.css";

export const Select = props => {
    return (
        <select
            onChange={e =>
                props.handleChange(props.index, props.valueName, e.target.value)
            }
            className="Select"
        >
            {props.options.map((option, index) => (
                <option selected={(props.selectedValue === index ? true : false)} value={index}>{option}</option>
            ))}
        </select>
    );
};
