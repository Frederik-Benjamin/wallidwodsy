import { ButtonStyled } from './ButtonStyled';

export const ButtonComponent = props => {
    return (
        <ButtonStyled>
            {props.text}
        </ButtonStyled>
    )
}