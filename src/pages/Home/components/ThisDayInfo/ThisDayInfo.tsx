import React from 'react';
import s from './ThisDayInfo.module.scss'
import cloud from './../../../../assets/imges/cloud.png'
import ThisDayInfoItem from "./ThisDayInfoItem";
import {id} from "../../../../id/id";

interface ThisDayInfoProps {
}

export interface IThisDayInfoItem {
    icon_id: string,
    name: string,
    value: string,
}
const items: IThisDayInfoItem[] = [
    {
        icon_id: 'temp',
        name: 'Температура',
        value: '20° - ощущается как 17°',
    },
    {
        icon_id: 'pressure',
        name: 'Давление',
        value: '765 мм ртутного столба - нормальное',
    },
    {
        icon_id: 'precipitation',
        name: 'Осдаки',
        value: 'Без осадков',
    },
    {
        icon_id: 'wind',
        name: 'Ветер',
        value: '3 м/c юго-запад - лёгкий ветер',
    },]
const ThisDayInfo: React.FC<ThisDayInfoProps> = ({}) => {

    return (
        <div className={s.this__day_info}>
            <img className={s.cloud__img} src={cloud} alt="облако"/>
            <div className={s.this__day_info_items}>
                {items.map((item: IThisDayInfoItem) =>
                    <ThisDayInfoItem key={id()} item={item}/>
                )}
            </div>
        </div>
    );
};

export default ThisDayInfo;
