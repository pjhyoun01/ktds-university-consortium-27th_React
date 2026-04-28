import {createContext, useState} from "react";

export const TmdbContext = createContext({
    trend: "",
    onChange(trendData){},
});

export const TmdbContextProvider = ({children}) => {
    const [trend, setTrend] = useState("today");

    const providValue = {
        trend,
        onChange(trendData) {
            setTrend(trendData);
        }
    }

    return (
        <TmdbContext.Provider value={providValue}>
            {children}
        </TmdbContext.Provider>
    )

};