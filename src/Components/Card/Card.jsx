import { CardStyled } from './CardStyled';
import { ButtonComponent } from '../Button/Button';



export const Card = ({ name, slug, description, image, width, height, price, stock, created_at, updated_at, cardStyle }) => {

    return (
        <CardStyled className={cardStyle}>
             
            <div className='postImage'> 
            {image       &&   <img src={image} alt={name}/>} 
            </div>
            
            <div className='postInfo'>
            {name        && <h3>{name}</h3>}
            {description && <p>{description}</p>}
            {slug        && <p>{slug}</p>}
            <div className='postSize'>
            {width       && <p>W:{width}</p>}
            {height      && <p>H:{height}</p>}
            </div>
            {price       && <p>Kr. {price}</p>}
            {stock       && <p>{stock}</p>}
            {created_at  && <p>{created_at}</p>}
            {updated_at  && <p>{updated_at}</p>}
            </div>
           <ButtonComponent text="Læs mere" />
        </CardStyled>
    );
};






