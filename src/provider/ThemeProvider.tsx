import React, {useState} from 'react';
import {Theme, ThemeContext} from "../context/ThemeContext";
import {changeCssRootVariables} from "../model/ChangeCssRootVariables";
import {storage} from "../model/Storage";

interface ThemeProviderProps {
    children: React.ReactNode,
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children, ...props}) => {
    const [theme, setTheme] = useState<Theme>(storage.getItems('theme') || Theme.LIGHT)
    changeCssRootVariables(theme)

    function changeTheme(theme: Theme) {
        storage.setItem('theme', theme)
        setTheme(theme)
        changeCssRootVariables(theme)
    }

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                changeTheme: changeTheme,
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
