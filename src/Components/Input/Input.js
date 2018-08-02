import React from "react";
import "./Input.css";

export const Input = props => {
    return <input className={"Input " + (typeof props.size === "undefined" ? "" : "Input_" + props.size)} type={props.type} value={props.value} onChange={(e) => props.updateValue(props.toneIndex, props.valueName, e.target.value)} />;
};
