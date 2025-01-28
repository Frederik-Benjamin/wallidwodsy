import { CardStyled } from './CardStyled';
import { ButtonComponent } from '../Button/Button';
import { LikeButton } from '../LikeButton/LikeButton.component';



export const Card = ({ name, slug, description, image, width, height, price, stock, created_at, updated_at, cardStyle, buttonText, buttonClickType, buttonPosterId }) => {

    return (
        <CardStyled className={cardStyle}>

            <div className='postImage'>
                {image && <img src={image} alt={name} />}
            </div>

            <div className='postInfo'>
                {name && <h3>{name}</h3>}
                {description && <p>{description}</p>}
                {slug && <p>{slug}</p>}
                <div className='postSize'>
                    {width && <p>W:{width}</p>}
                    {height && <p>H:{height}</p>}
                </div>
                {price && <p>Kr. {price}</p>}
                {stock && <p>{stock}</p>}
                {created_at && <p>{created_at}</p>}
                {updated_at && <p>{updated_at}</p>}
                <div className='postButtons'>
                    <ButtonComponent
                        text={buttonText}
                        buttonClickType={buttonClickType}
                        buttonPosterId={buttonPosterId}
                    />
                    <LikeButton id="likeButton" buttonPosterId={buttonPosterId} />
                </div>
            </div>
        </CardStyled>
    );
};






