import React from 'react';
import s from './Header.module.scss'
import Select from 'react-select'
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import {useTheme} from "../../hooks/useTheme";
import {Theme} from "../../context/ThemeContext";

interface HeaderProps {

}

const options = [
    {value: 'city-1', label: 'Сант-Петербург'},
    {value: 'city-2', label: 'Москва'},
    {value: 'city-3', label: 'Йошкар-Ола'}
]


const Header: React.FC<HeaderProps> = ({}) => {
    const theme = useTheme()

    const colourStyles = {
        control: (styles: object) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (style: object) => ({
            ...style,
            color: theme.theme === Theme.DARK ? '#fff' : '#000',
        })
    }

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id={"header-logo"}/>
                </div>
                <div className={s.title}>Weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}
                     onClick={changeTheme}
                >
                    <GlobalSvgSelector id={"change-theme"}/>
                </div>
                <Select defaultValue={options[2]} styles={colourStyles} options={options}/>
            </div>
        </header>
    );
};

export default Header;