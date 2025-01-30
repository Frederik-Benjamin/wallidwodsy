import { useParams, useNavigate } from "react-router-dom";
import { usePoster } from "../../../Data/Posters/poster.context.jsx";
import { useGenreRel } from "../../../Data/GenrePostRel/GenPostRel.jsx";
import { PosterStyled } from "./PosterStyled.js";
import { Grid } from "../Grid/Grid.jsx";
import { Card } from "../Card/Card.jsx";

// PosterComponent - hovedkomponent
export const PosterComponent = () => {
    const { genre_id } = useParams();
    const { posterList } = usePoster();
    const { genreRelation } = useGenreRel();
    const navigate = useNavigate();

    // Filtrerer posters baseret på genre_id
    let filteredPosters = posterList;
    if (genre_id) {
        const relatedPosters = genreRelation.filter(
            (relation) => relation.genre_id === parseInt(genre_id, 10)
        );

        filteredPosters = posterList.filter((poster) =>
            relatedPosters.some((relation) => relation.poster_id === poster.id)
        );
    }

    // Håndterer "Læs mere" knap klik
    const handleReadMore = (posterId) => {
        navigate(`/Posters/${genre_id}/${posterId}`);
    };

    // Returnerer grid med filtrerede posters
    return (
        <Grid gridStyle="posterpage-grid">
            {filteredPosters.map((data) => (
                <PosterStyled key={data.id}>
                    <Card
                        image={data.image}
                        name={data.name}
                        price={data.price}
                        buttonText="Læs mere"
                        buttonClickType={() => handleReadMore(data.id)}
                    />
                </PosterStyled>
            ))}
        </Grid>
    );
};
