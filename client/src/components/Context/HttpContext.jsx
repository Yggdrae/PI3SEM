import { Children, createContext, useState } from "react";

export const HttpContext = createContext();

export const HttpProvider = ({ children }) => {
    
    const linkToWeb = 'http://192.168.15.200:8080'

    return <HttpContext.Provider value={{ linkToWeb }}>
        { children }
        </HttpContext.Provider>
}