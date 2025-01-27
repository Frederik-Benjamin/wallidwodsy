import { usePoster } from "../../../Data/Posters/poster.context";
import { PosterStyled } from "../Posters/PosterStyled";
import { Card } from "../Card/Card";
import { Grid } from "../Grid/Grid";

export const FeaturedPosters = () => {
    const { featuredPoster } = usePoster();

    return (
        <Grid gridStyle="poster-grid">
            {featuredPoster &&
                featuredPoster.map((data) => (
                    <PosterStyled key={data.id}>
                        <Card
                        image={data.image}
                        name={data.name}
                        price={data.price}
                        />
                        <p>intet her</p>
                    </PosterStyled>
                ))}
        </Grid>
    );
};
