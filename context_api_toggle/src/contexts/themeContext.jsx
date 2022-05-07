import { createContext } from "react";
import { useState } from "react";
const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("Light");
    const handleThemeChange = () => {
        setTheme(theme === "Light" ? "Dark" : "Light")
    }
    return (
        <ThemeContext.Provider value={{theme,handleThemeChange}}>{children}</ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider };