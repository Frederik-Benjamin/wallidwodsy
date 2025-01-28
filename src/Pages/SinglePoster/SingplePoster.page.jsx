import { SinglePoster } from "../../Components/SinglePoster/SinglePoster.component";
import { useLocation } from 'react-router-dom';

export const SinglePosterPage = () => {
    const location = useLocation();
    const { poster } = location.state || {};

    return (
        <div>
            {poster ? (
                <SinglePoster poster={poster} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};