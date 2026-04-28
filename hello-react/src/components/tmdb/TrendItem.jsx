export const TrendItem = ({item}) => {

    return (
        <>
            <img src={item.poster} alt={item.name}/>
            <div>{item.name}</div>
            <div>{item.openDate}</div>
        </>
    )
}