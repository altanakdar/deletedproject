"use client"

import React,  {createContext, useContext, useState, useEffect} from "react";

interface ThemeContextType {
    mode: string;
    setMode:(mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined >(undefined);

export function ThemeProvider({children}: {children: React.ReactNode}){
    const [mode, setMode] = useState('');

    const HandleThemeChange = () => {
        if(mode === 'dark'){
            setMode('light');
            document.documentElement.classList.add('light');
        }else {
            setMode('dark');
            document.documentElement.classList.add('dark');
        }
    }
    useEffect(() => {
      HandleThemeChange();
      
    }, [mode])
    

    return (
        <ThemeContext.Provider value={{mode, setMode}}>
        {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext);

    if(context === undefined){
        throw new Error('UseTheme must be used with in a Theme Provider')
    }
    return context;
}
