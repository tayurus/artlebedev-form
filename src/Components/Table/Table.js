import React from "react";
import "./Table.css";

export const Table = props => {
    return (
        <table class="Table">
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
                        <td className={index === 0 ? "brdr-b-2" : ""}>{index === 0 ? props.colorName : ""}</td>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>
                            <select />
                        </td>
                        <td>
                            <input type="number" />
                        </td>
                        <td>{item.packageType}</td>
                        <td>
                            <span>remove</span>
                        </td>
                    </tr>
                );
            })}
        </table>
    );
};
