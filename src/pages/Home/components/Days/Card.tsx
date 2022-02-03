import React from 'react';
import s from './Days.module.scss'
import {Day} from "./Days";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";

interface CardProps {
    day: Day,
}

const Card: React.FC<CardProps> = ({day}) => {
    const {day_name, day_info, icon_id, temp_day, temp_night, info} = day
    return (
        <div className={s.card}>
            <div className={s.day__name}>{day_name}</div>
            <div className={s.day__info}>{day_info}</div>
            <div className={s.day__img}>
                <GlobalSvgSelector id={icon_id}/>
            </div>
            <div className={s.temp__day}>{temp_day}</div>
            <div className={s.temp__night}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    );
};

export default Card;
