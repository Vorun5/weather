import React from 'react';
import s from './Days.module.scss'
import {id} from "../../../../id/id";

interface Tab {
    value: string
}

const tabs: Tab[] = [
    {
        value: 'На неделю'
    },
    {
        value: 'На 10 дней'
    },
    {
        value: 'На месяц'
    },
]


interface TabsProps {
}

const Tabs: React.FC<TabsProps> = ({}) => {

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map((tab: Tab) =>
                    <div className={s.tab} key={id()}>
                        {tab.value}
                    </div>
                )}
            </div>
            <div className={s.cancel}>Отменить</div>
        </div>
    );
};

export default Tabs;
