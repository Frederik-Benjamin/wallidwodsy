import { ButtonComponent } from "../Button/Button";
import LikeButtonSvg from "../../Assets/Images/LikeButton.svg";

export const LikeButton = ({ buttonPosterId }) => {

    
    return (
        <ButtonComponent
            buttonSvg={LikeButtonSvg}
            buttonClickType="buttonLike"
            buttonPosterId={buttonPosterId}
        />
    );
}