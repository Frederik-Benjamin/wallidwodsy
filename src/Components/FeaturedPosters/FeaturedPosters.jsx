import { FeaturedPosterStyled } from "./FeaturedPosterStyled";
import { usePoster } from "../../../Data/Posters/poster.context";
import { Card } from "../Card/Card";
import { Grid } from "../Grid/Grid";
import { ButtonComponent } from "../Button/Button";

export const FeaturedPosters = () => {
    const { featuredPoster } = usePoster();

    return (
        <Grid gridStyle="frontpage-grid">
            {featuredPoster &&
                featuredPoster.map((data) => (
                    <FeaturedPosterStyled key={data.id}>
                        <Card cardStyle="featured-card"  
                        image  ={data.image}
                        name   ={data.name}
                        slug   ={data.slug}
                        width  ={data.width}
                        height ={data.height}
                        price  ={data.price}
                        />

                        <ButtonComponent text="Læs mere" />
                    </PosterStyled>
                    </FeaturedPosterStyled>

                ))}
        </Grid>
    );
};
