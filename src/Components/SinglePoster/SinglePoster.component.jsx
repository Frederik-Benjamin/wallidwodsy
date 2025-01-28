import { SinglePosterStyled } from "./SinglePoster.styled";
import { ButtonComponent } from "../Button/Button";
import { LikeButton } from "../LikeButton/LikeButton.component";
import parse from 'html-react-parser';

export const SinglePoster = ({ poster }) => {
    console.log(poster);
    
  return (
    <SinglePosterStyled>
      <h1>{poster.name}</h1>
      {parse(poster.description)}
      <div>
        {poster.width} x {poster.height}
      </div>
      <p>Varenummer: {poster.id}</p>
      <p>{poster.price}</p>
      <ButtonComponent
        text="Tilføj til kurv"
        buttonClickType="addToCart"
        buttonPosterId={poster.id}
        />
        <LikeButton buttonPosterId={poster.id} />
      <img src={poster.image} alt={poster.name} />  
    </SinglePosterStyled>
  );
}