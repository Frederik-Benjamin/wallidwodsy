import { usePoster } from "../../../Data/Posters/poster.context.jsx";
import { Card } from "../Card/Card.jsx";
import { Grid } from "../Grid/Grid.jsx";
import { PosterStyled } from "./PosterStyled.js";


export const PosterComponent = () => {
    const { posterList } = usePoster();
  
    return (
      <Grid gridStyle="poster-grid">
        {posterList &&
          posterList.map((data) => (
            <PosterStyled key={data.id}>
            <Card
              image={data.image}
              name={data.name}
              price={data.price}
              buttonText="Læg i kurv"
            />
            </PosterStyled>
          ))}
      </Grid>
    );
  };
  