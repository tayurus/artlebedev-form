import React from "react";
import "./Form.css";
import { TabsNavigation } from "./../TabsNavigation/TabsNavigation";
import { Button } from "./../Button/Button";
import { Table } from "./../Table/Table";

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorName: "Синий",
            color: [
                {
                    checked: true,
                    value: "skyey",
                    volume: 1,
                    packageType: "банка"
                },
                {
                    checked: true,
                    value: "blue",
                    volume: 2,
                    packageType: "банка"
                },
                {
                    checked: true,
                    value: "deep",
                    volume: 1,
                    packageType: "банка"
                },
                {
                    checked: true,
                    value: "royal",
                    volume: 3,
                    packageType: "банка"
                }
            ],
            currentTab: 0,
            tabsNames: ["Состав заказа", "Комментарий", "Контактное лицо"],
            tonesInSelect: ["Небесный", "Голубой", "Глубокий", "Королевский"]
        };

        /*********BINDING METHODS*********/
        this.changeCurrentTab = this.changeCurrentTab.bind(this);
        this.addTone = this.addTone.bind(this);
        this.removeTone = this.removeTone.bind(this);
        this.updateTone = this.updateTone.bind(this);

        /********** BINDING HELPERS FUNCTIONS **********/
        this.getCheckedTonesCount = this.getCheckedTonesCount.bind(this);
        this.getToneEnding = this.getToneEnding.bind(this);
    }

    /*********METHODS**********/
    changeCurrentTab(newTab) {
        this.setState({ currentTab: newTab });
    }

    addTone() {
        let defaultTone = {
            checked: true,
            value: "deep",
            volume: 1,
            packageType: "банка"
        };
        this.setState({ color: this.state.color.concat(defaultTone) });
    }

    removeTone(index) {
        this.setState({
            color: this.state.color.filter(function(item, i) {
                return i !== index;
            })
        });
    }

    updateTone(toneIndex, fieldName, value) {
        let updatedTone = this.state.color[toneIndex];
        updatedTone[fieldName] = value;
        let updatedColor = [...this.state.color];
        updatedColor[toneIndex] = updatedTone;
        this.setState({ color: updatedColor });
    }


    /*******HELPERS FUNCTIONS*********/
    getCheckedTonesCount() {
        return this.state.color.reduce(
            (acc, item) => (item.checked ? acc + 1 : acc),
            0
        );
    }

    //возвращает верную форму множественного числа слова "оттенок"
    getToneEnding(number) {
        //эмпирическим путем перебираем формы слова
        // 1 21 31 41 101 оттенок
        // 2 3 4 22 23 34 оттенка
        // 5 6 7 8 9 10 11 12 13 25 35 100 111  оттенков
        if (number % 10 === 1 && number <= 101 && number != 11) return "оттенок";

        if (number % 10 >= 2 && number % 10 <= 4 && !(number >= 12 && number <= 14)) return "оттенка";

        return "оттенков";
    }

    render() {
        return (
            <div className="Form">
                <div className="Form__tabs">
                    <div
                        className="Form__tab"
                        hidden={this.state.currentTab !== 0}
                    >
                        <h3 className="Form__tab-title">
                            Выбраны {this.getCheckedTonesCount()}{" "}
                            {this.getToneEnding(this.getCheckedTonesCount())}
                        </h3>

                        <Table
                            helpersClasses="mt-3"
                            colorName={this.state.colorName}
                            color={this.state.color}
                            removeTone={this.removeTone}
                            updateTone={this.updateTone}
                            tonesInSelect={this.state.tonesInSelect}
                        />

                    <Button type="add" helpersClasses="d-block mx-auto mt-5" label="+ Добавить оттенок" onClickHandler={() => this.addTone()}/>

                    </div>
                    <div
                        className="Form__tab"
                        hidden={this.state.currentTab !== 1}
                    >
                        <h3 className="Form__tab-title">Комментарий</h3>
                    </div>
                    <div
                        className="Form__tab"
                        hidden={this.state.currentTab !== 2}
                    >
                        <h3 className="Form__tab-title">Контактное лицо</h3>
                    </div>
                </div>

                <div className="Form__controls">
                    <TabsNavigation
                        tabsNames={this.state.tabsNames}
                        changeCurrentTab={this.changeCurrentTab}
                        currentTab={this.state.currentTab}
                        helpersClasses="mb-4"
                    />

                    <Button helpersClasses="d-block mx-auto" label="Отправить" type="send" />
                </div>
            </div>
        );
    }
}
