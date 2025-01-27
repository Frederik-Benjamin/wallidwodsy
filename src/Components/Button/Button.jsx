import { ButtonStyled } from './ButtonStyled';

export const Button = ({ children }) => {
    return (
        <ButtonStyled>
            {children}
        </ButtonStyled>
    )
}