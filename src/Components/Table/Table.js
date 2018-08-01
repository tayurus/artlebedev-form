import React from "react";
import "./Table.css";

import { Button } from './../Button/Button';

export const Table = props => {
    return (
        <table className="Table">
            <tbody>
                <tr>
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
                            <td className={index === 0 ? "brdr-b-2 fz-2-2rem d-inline-block" : ""}>{index === 0 ? props.colorName : ""}</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <select />
                            </td>
                            <td>
                                <input type="number" /> л
                            </td>
                            <td>{item.packageType}</td>
                            <td>
                                <Button type="remove" onClickHandler={() => props.removeTone(index)}/>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
