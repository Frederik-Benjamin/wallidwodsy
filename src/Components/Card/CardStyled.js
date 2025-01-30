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
        transform: scale(1.03);
    }

    img {
        width: 100%;
        object-fit: contain;
        aspect-ratio: 1/1;
    }

    .postInfoSection {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }


    .postImage{
        width: 100%;
         
    }

    .postInfo {
        display: flex;
        flex-direction: column;
    }

    .postSizeInfo {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    .postButtons {
        display: flex;
        gap: 1rem;
    }





    &.featured-card {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        min-height: 300px;
        gap: 2rem;


        .postInfoSection {
            display: flex;
            align-items: flex-start;
        }

        .postInfo {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }

        .postSize {
            display: flex;
            gap: 1rem;
        }

        img {
            min-height: 250px;
        }
        
    }


    .postButtons {
        display: flex;
        gap: 1rem;


        img {
            width: 20px;
            height: 20px;
            min-width: 20px;
            min-height: 20px;
            max-width: 20px;
            max-height: 20px;
        }

        button:last-child {
        
        }
    }

    #likeButton {
        width: 20px;
        height: 20px;
        min-width: 20px;
        min-height: 20px;
    }
`

