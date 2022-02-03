import React from 'react';
import s from './ThisDayInfo.module.scss'
import {IThisDayInfoItem} from "./ThisDayInfo";
import IndicatorSvgSelector from "../../../../assets/icons/indicators/IndicatorSvgSelector";

interface ThisDayInfoItemProps {
    item: IThisDayInfoItem,
}

const ThisDayInfoItem: React.FC<ThisDayInfoItemProps> = ({item}) => {
    const {icon_id, name, value} = item
    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector id={icon_id}/>
            </div>
            <div className={s.indicator__name}>{name}</div>
            <div className={s.indicator__value}>{value}</div>
        </div>
    );
};

export default ThisDayInfoItem;
