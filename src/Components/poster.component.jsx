import { usePoster } from "../Utils/Data/poster.context";

export const PosterComponent = () => {
    const {posterList} = usePoster();

    
    // console.log(123);
    
//    console.log(dataList);
   
    
    

    return (
        <ul>
            {posterList
                && posterList.map((data) => {
                    return (
                        <li key={data.id}>{data.name}</li> 
                    )
                }
                     
            )}
        </ul>
    );
}