import {createContext} from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface ThemeContextProps {
    theme: Theme,
    changeTheme: (theme: Theme) => void,
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
    changeTheme: () => {}
})
