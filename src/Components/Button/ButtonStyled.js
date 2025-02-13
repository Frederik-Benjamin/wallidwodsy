import styled from "styled-components";

export const ButtonStyled = styled.button`
    background-color: #D1B3A7;
    color: #000000;
    border: 1px solid #524641;
    border-radius: 5px;
    padding: 5px 10px;
    z-index: 1;
    cursor: pointer;
    width: auto;
    transition: 0.25s;

    &:hover {
        background-color: rgb(226, 200, 150);
        color: rgb(255, 255, 255);
        border: 1px solid #524641;
    }

    img {
        width: 10px;
        height: 10px;
    }


`