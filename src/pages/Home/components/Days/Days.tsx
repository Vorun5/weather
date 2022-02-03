import React from 'react';
import s from './Days.module.scss'
import Card from "./Card";
import Tabs from "./Tabs";
import {id} from "../../../../id/id";

interface DaysProps {

}

export interface Day {
    day_name: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
}

const Days: React.FC<DaysProps> = ({}) => {
    const days: Day[] = [
        {
            day_name: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day_name: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь и солнце',
        },
        {
            day_name: 'Пн',
            day_info: '30 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь и солнце',
        },
        {
            day_name: 'Пн',
            day_info: '30 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь и солнце',
        },
        {
            day_name: 'Пн',
            day_info: '30 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь и солнце',
        },
        {
            day_name: 'Пн',
            day_info: '30 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь и солнце',
        },
        {
            day_name: 'Пн',
            day_info: '30 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь и солнце',
        },
    ]
    return (
        <>
            <Tabs/>
            <div className={s.days}>
                {days.map((day: Day) => <Card key={id()} day={day}/>)}
            </div>
        </>
    );
};

export default Days;
