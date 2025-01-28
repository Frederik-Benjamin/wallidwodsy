import { CardStyled } from "./CardStyled";
import { ButtonComponent } from "../Button/Button";
import { LikeButton } from "../LikeButton/LikeButton.component";

export const Card = ({
    cardStyle,
    image,
    name,
    description,
    slug,
    width,
    height,
    price,
    stock,
    created_at,
    updated_at,
    buttonText,
    buttonClickType,
    buttonPosterId
}) => {
    return (
        <CardStyled className={cardStyle}>
            {/* Image section */}
            <div className="postImage">
                {image && <img src={image} alt={name} />}
            </div>

            {/* Info section */}
            <div>
                <div className="postInfo">
                    {name && <h3>{name}</h3>}
                    {description && <p>{description}</p>}
                    {slug && <p>{slug}</p>}
                </div>
                <div className="postSize">
                    {width && <p>B:{width}</p>}
                    {height && <p>H:{height}</p>}
                </div>
                <div>
                    {price && <p>Kr. {price}</p>}
                    {stock && <p>{stock}</p>}
                    {created_at && <p>{created_at}</p>}
                    {updated_at && <p>{updated_at}</p>}
                </div>
            </div>

            {/* Buttons section */}
            <div className="postButtons">
                <ButtonComponent
                    text={buttonText}
                    onClick={() => buttonClickType(buttonPosterId)} // Videregiv poster ID
                />
                <LikeButton id="likeButton" buttonPosterId={buttonPosterId} />
            </div>
        </CardStyled>
    );
};






