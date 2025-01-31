import { useGenre } from "../../../Data/Genre/genre.context";
import { Genrestyled } from "./GenreStyled";
import { Link } from "react-router-dom";

// GenreComponent - hovedkomponent
export const GenreComponent = () => {
    const { genreList } = useGenre();

    // Returnerer liste over genrer
    return (
        <Genrestyled>
            <h3>Filtrer genre:</h3>
            {genreList && genreList.map((data) => (
                <Link to={`/Posters/${data.id}`}><li key={data.id}>
                    {data.title}
                </li></Link>
            ))};
        </Genrestyled>
    );
};