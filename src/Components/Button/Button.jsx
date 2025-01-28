import { ButtonStyled } from './ButtonStyled';
import { usePoster } from '../../../Data/Posters/poster.context';
import { useNavigate } from 'react-router-dom';

export const ButtonComponent = ({ text, buttonClickType, buttonPosterId, buttonSvg }) => {
    const { posterList } = usePoster();
    const navigate = useNavigate();

    const singlePoster = (id) => {
        const poster = posterList.find((data) => data.id === id);
        if (poster) {
            navigate(`/posters/${poster.slug}`, { state: { poster } });
            // console.log(poster);
        }
    }

    const handleClick = () => {
        if (buttonClickType === 'singlePoster') {
            singlePoster(buttonPosterId);
        } else {
            console.log(buttonPosterId);
        }
    }

    return (
        <ButtonStyled onClick={handleClick}>
            {text}
            {buttonSvg && <img src={buttonSvg} alt="button icon" />}
        </ButtonStyled>
    );
};