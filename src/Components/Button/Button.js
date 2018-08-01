import React from "react";
import "./Button.css";

export const Button = props => {
    return <button className={"Button Button_" + props.type}>{props.label}</button>;
};
