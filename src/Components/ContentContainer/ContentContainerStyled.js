import styled from "styled-components";

export const ContentContainerStyled = styled.div`

background-color: white;
padding: 3rem 10rem 3rem 10rem;
height: auto;
min-height: 100vh;
max-width: 1500px;

display: flex;
flex-direction: column;

.spaceLinje {
    width: 100%;
    height: 3px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: orange;

    margin-top: 5rem;
}

`