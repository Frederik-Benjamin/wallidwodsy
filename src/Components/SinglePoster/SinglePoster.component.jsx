import { SinglePosterStyled } from "./SinglePoster.styled";
import { ButtonComponent } from "../Button/Button";
import { LikeButton } from "../LikeButton/LikeButton.component";
import parse from "html-react-parser";

// SinglePoster komponent
export const SinglePoster = ({ poster }) => {
    const { name, description, image, width, height, price, stock } = poster;
    console.log(typeof description);
    

    return (
        <SinglePosterStyled>
            <div className="singlePosterContent">
                {/* Billede */}
                <div className="posterImage">
                    {image && <img src={image} alt={name} />}
                </div>

                {/* Information */}
                <div className="posterDetails">
                    {name && <h2>{name}</h2>}
                    {description && parse(description)}


                    {/* Størrelse */}
                    <div className="posterSize">
                        {width && <p>Bredde: {width} cm</p>}
                        {height && <p>Højde: {height} cm</p>}
                    </div>

                    {/* Pris og lagerstatus */}
                    {price && <p>Pris: Kr. {price}</p>}
                    {stock && <p>På lager: {stock}</p>}
                </div>
                <div className="posterButtons">
                    <ButtonComponent text='Læg i kurv' />
                    <LikeButton />
                </div>
            </div>
        </SinglePosterStyled>
    );
};
