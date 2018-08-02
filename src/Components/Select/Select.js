import React from "react";
import "./Select.css";

export const Table = props => {
    return <select class="Select">{props.options.map((option, key) => <option value={key}>{option}</option>)}</select>;
};
