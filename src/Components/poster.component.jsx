import { usePoster } from "../Utils/Data/poster.context";

export const PosterComponent = () => {
    const {dataList} = usePoster();

    
    console.log(dataList);
    // console.log(123);

    if(dataList) {
        // console.log('error');
        
    }
    
    

    return (
        <ul>
            {dataList
                && dataList.map((data) => (
                    <li key={data.id}>{data.name}</li>  
                ))}
        </ul>
    );
}