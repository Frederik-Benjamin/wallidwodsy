import { useParams } from "react-router-dom";
import { usePoster } from "../../../Data/Posters/poster.context";
import { SinglePoster } from "../../Components/SinglePoster/SinglePoster.component";

export const SinglePosterPage = () => {
    const { poster_id } = useParams(); 
    const { posterList } = usePoster();

    
    let selectedPoster = null;
    if (posterList) {
        selectedPoster = posterList.find(
            (poster) => poster.id === parseInt(poster_id, 10)
        );
    }

    if (selectedPoster) {
        return (
            <div>
                <SinglePoster poster={selectedPoster} />
            </div>
        );
    } else {
        return (
            <div>
                <p>Poster ikke fundet.</p>
            </div>
        );
    }
};
