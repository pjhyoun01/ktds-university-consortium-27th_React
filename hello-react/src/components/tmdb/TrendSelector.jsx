import {useContext} from "react";
import {TmdbContext} from "./TmdbContext.jsx";

export const TrendSelector = () => {
    const {onChange} = useContext(TmdbContext);

    return (
        <>
            <div className="today" onClick={onChange.bind(this, "today")}>오늘</div>
            <div className="weekend" onClick={onChange.bind(this, "week")}>이번주</div>
        </>
    )
}