import { ButtonStyled } from './ButtonStyled';
import { usePoster } from '../../../Data/Posters/poster.context';

export const ButtonComponent = ({text, buttonClickType, buttonPosterId}) => {
    const { posterList } = usePoster();

    const singlePoster = (buttonPosterId) => {
        const poster = posterList.find((data) => data.id === buttonPosterId);
        if (poster) {
            console.log(poster);
        }
    }
    // console.log(posterId);
    
    const handleClick = () => {
        if (buttonClickType == 'singlePoster') {
            singlePoster(buttonPosterId);
        } else {
            console.log(buttonPosterId);
            
        }
    }

    return (
        <ButtonStyled  onClick={handleClick}>
            {text}
        </ButtonStyled>
    )
}