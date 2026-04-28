import movieData from "./trend.json";
import {TrendItem} from "./TrendItem.jsx";
import {useContext} from "react";
import {TmdbContext} from "./TmdbContext.jsx";


export const TrendList = () => {

    const {trend} = useContext(TmdbContext);

    return (
        <>
            {movieData.items[trend].map((item) => (
                <TrendItem key={item.id} item={item} />
            ))}
        </>
    )
}