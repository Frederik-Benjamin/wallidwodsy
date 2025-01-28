import { FeaturedPosterStyled } from "./FeaturedPosterStyled";
import { usePoster } from "../../../Data/Posters/poster.context";
import { Card } from "../Card/Card";
import { Grid } from "../Grid/Grid";
import { useNavigate } from "react-router-dom";

// Henter featured posters fra context
export const FeaturedPosters = () => {
    const { featuredPoster } = usePoster();
    const navigate = useNavigate();

    // Håndterer "Læs mere" knap klik
    const handleReadMore = (posterId, genreId) => {
        navigate(`/Posters/${genreId}/${posterId}`); 
    };

    return (
        // Viser featured posters i et grid layout
        <Grid gridStyle="frontpage-grid">
            {featuredPoster &&
                featuredPoster.map((data) => (
                    <FeaturedPosterStyled key={data.id}>
                        <Card
                            cardStyle="featured-card"
                            image={data.image}
                            name={data.name}
                            slug={data.slug}
                            width={data.width}
                            height={data.height}
                            price={data.price}
                            buttonText="Læs mere"
                            buttonClickType={() => handleReadMore(data.id, data.genre_id)} 
                        />
                    </FeaturedPosterStyled>
                ))}
        </Grid>
    );
};
