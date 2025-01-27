import { CardStyled } from './CardStyled';
import { Button } from '../Button/Button';


export const Card = ({ name, slug, description, image, width, height, price, stock, created_at, updated_at }) => {
    const data = { name, slug, description, image, width, height, price, stock, created_at, updated_at };
    return (
        <CardStyled>
            {image       && <img src={image} alt={name}/>}
            {name        && <h3>{name}</h3>}
            {description && <p>{description}</p>}
            {slug        && <p>{slug}</p>}
            {width       && <p>{width}</p>}
            {height      && <p>{height}</p>}
            {price       && <p>Kr. {price}</p>}
            {stock       && <p>{stock}</p>}
            {created_at  && <p>{created_at}</p>}
            {updated_at  && <p>{updated_at}</p>}
        </CardStyled>
    );
};






