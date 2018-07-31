import React from "react";
import "./Button.css";

export const Button = props => {
    return <button className={"Button " + props.type}>{props.label}</button>;
};
