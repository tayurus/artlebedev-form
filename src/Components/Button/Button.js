import React from "react";
import "./Button.css";

export const Button = props => {
    return (
        <button
            onClick={props.onClickHandler}
            className={
                "Button Button_" + props.type + " " + props.helpersClasses
            }
        >
            {props.label}
        </button>
    );
};
