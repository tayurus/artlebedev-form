import React from "react";
import "./TabsNavigation.css";

export const TabsNavigation = props => {
    return (
        <ul className={"TabsNavigation " + props.helpersClasses}>
            {props.tabsNames.map((item, index) => {
                return (
                    <li
                        className={
                            "TabsNavigation__item " +
                            (props.currentTab === index
                                ? "TabsNavigation__item_active"
                                : "")
                        }
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
    );
};
