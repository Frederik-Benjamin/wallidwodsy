import { ButtonStyled } from "./ButtonStyled";

// Knap komponent

export const ButtonComponent = ({ text, buttonSvg, onClick }) => {
    return (
        <ButtonStyled onClick={onClick}>
            {text}
            {buttonSvg && <img src={buttonSvg} alt="button icon" />}
        </ButtonStyled>
    );
};
