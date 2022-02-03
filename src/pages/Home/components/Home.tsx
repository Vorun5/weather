import React, {useEffect} from 'react';
import s from './Home.module.scss'
import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDayInfo/ThisDayInfo";
import Days from "./Days/Days";
import {useCustomDispatch, useCustomSelector} from "../../../hooks/store";
import {fetchCurrentWeather} from "../../../store/thunks/fetchCurrentWeather";

interface HomeProps {

}

const Home: React.FC<HomeProps> = ({}) => {
    const dispatch = useCustomDispatch();
    const {weather} = useCustomSelector((state) => state.currentWeatherSliceReducer)
    useEffect(() => {
        dispatch(fetchCurrentWeather({lat: 57, lon: 48}))
    }, [])
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo/>
            </div>
            <Days/>
        </div>
    );
};

export default Home;
