import {TrendHeader} from "./TrendHeader.jsx";
import {TrendList} from "./TrendList.jsx";
import {TmdbContextProvider} from "./TmdbContext.jsx";

export const TrendBox = () => {


    return (
        <>
            <TmdbContextProvider>
                <TrendHeader/>
                <TrendList/>
            </TmdbContextProvider>
        </>
    )
}