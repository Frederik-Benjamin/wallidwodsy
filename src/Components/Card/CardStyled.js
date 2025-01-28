import styled from "styled-components";

export const CardStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem;
transition: transform 0.2s;

min-height: 500px;
border: solid 1px grey;
border-radius: 10px;

box-shadow: -1px 1px 8px 1px grey;

&:hover {
    transform: scale(1.05);
}

img {
    width: 100%;
    min-width: 400px;
    height: auto;
    object-fit: contain;
    aspect-ratio: 1/1;
    border-radius: 8px;
}

.postInfo {
    display: flex;
    flex-direction: column;
    min-width: 150px;
}

.postSize {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

&.featured-card {
    
display: grid;
grid-template-columns: repeat(2, 1fr);

.postInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
}

    .postSize {
        display: flex;
        gap: 1rem;
    }

    img {
        min-width: 300px;
    }
}
`