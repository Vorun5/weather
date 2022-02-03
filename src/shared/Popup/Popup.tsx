import React from 'react';
import s from './Popup.module.scss'
import ThisDayInfoItem from "../../pages/Home/components/ThisDayInfo/ThisDayInfoItem";
import {id} from "../../id/id";
import {IThisDayInfoItem} from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";

interface PopupProps {
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
const Popup: React.FC<PopupProps> = ({}) => {
    return (
        <>
            <div className={s.blur}/>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day__temp}>20</div>
                    <div className={s.day__name}>Среда</div>
                    <div className={s.day__img}>
                        <GlobalSvgSelector id={'sun'}/>
                    </div>
                    <div className={s.day__time}>Время: <span>21:54</span></div>
                    <div className={s.day__city}>Город: <span>Йошкар-Ола</span></div>
                </div>
                <div className={s.day_info}>
                    <div className={s.day_info_items}>
                        {items.map((item: IThisDayInfoItem) =>
                            <ThisDayInfoItem key={id()} item={item}/>
                        )}
                    </div>
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id={'close'}/>
                </div>
            </div>
        </>
    );
};

export default Popup;
