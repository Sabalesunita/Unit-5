import { createContext } from "react";
import { useState } from 'react'

export const ThemeContext= createContext();

export const ThemeContextProvider= ({children})=>{
    const [theme, setTheme]= useState("light");
    const handlechange=(value)=>{
        setTheme(value)   
    }  
    return <ThemeContext.Provider value={{theme, handlechange}}>{children}</ThemeContext.Provider>
}