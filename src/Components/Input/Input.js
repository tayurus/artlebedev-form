import React from "react";
import "./Input.css";

validate(e, type){
    if (type === "number"){
        let reg = /^[0-9]+$/;
        console.log(e.target.value);
    }
}

export const Input = props => {
    return <input className="Input" type={props.type} onChange={(e) => validate(e, props.type)} />;
};
