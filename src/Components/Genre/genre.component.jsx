import { useGenre } from "../../../Data/Genre/genre.context";
import { Genrestyled } from "./GenreStyled";

export const GenreComponent = () => {
    const {genreList} = useGenre();

    return (
        <Genrestyled>

            <h3>Filtrer genre:</h3>
            
            {genreList && genreList.map((data) => {
                return (
                    <li key={data.id}>
                        {data.title} 
                    </li>
                )
            })}
        </Genrestyled>
    );
}