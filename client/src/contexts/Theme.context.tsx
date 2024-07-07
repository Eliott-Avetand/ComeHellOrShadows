import { createContext } from "react";
import { ContextsProps } from "./contexts.types";

export interface ThemeContextType {
    theme: string
}

const initialThemeState = {
    theme: "palette",
};

export const ThemeContext = createContext<ThemeContextType>(initialThemeState);

export const ThemeContextProvider = ({ children }: ContextsProps) => {
    const theme = initialThemeState.theme;

    return (
        <ThemeContext.Provider value={{ theme }}>
            <div className={`theme--${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export default ThemeContext;