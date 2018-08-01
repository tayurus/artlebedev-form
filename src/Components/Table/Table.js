import React from "react";
import "./Table.css";

import { Button } from "./../Button/Button";
import { Checkbox } from "./../Checkbox/Checkbox";

export const Table = props => {
    return (
        <table className={"Table " + props.helpersClasses}>
            <tbody>
                <tr className="text-left">
                    <th>Цвет</th>
                    <th />
                    <th>Оттенок</th>
                    <th>Объем</th>
                    <th>Упаковка</th>
                    <th />
                </tr>

                {props.color.map((item, index) => {
                    return (
                        <tr>
                            <td
                                className={
                                    index === 0
                                        ? "brdr-b-2 fz-2-2rem d-inline-block"
                                        : ""
                                }
                            >
                                {index === 0 ? props.colorName : ""}
                            </td>
                            <td>
                                <Checkbox handleCheck={props.updateTone} index={index} checked={item.checked}/>
                            </td>
                            <td>
                                <select />
                            </td>
                            <td>
                                <input type="number" /> л
                            </td>
                            <td>{item.packageType}</td>
                            <td className="text-right">
                                <Button
                                    type="remove"
                                    onClickHandler={() =>
                                        props.removeTone(index)
                                    }
                                />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
